export default {
  async contactCoach(context, payload) {
    const request = {
      userEmail: payload.email,
      message: payload.message,
    };

    const response = await fetch(
      `https://vue-manage-coach-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/${payload.coachId}.json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      // error handling
      throw new Error(responseData.error.message || 'Failed to send request.');
    }
    request.id = responseData.name;
    request.coachId = payload.coachId;
    context.commit('addRequest', { request });
  },
  async fetchContacts(context) {
    context.commit('startLoading', null, { root: true });
    try {
      const coachId = context.rootGetters.userId;
      const response = await fetch(
        `https://vue-manage-coach-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/${coachId}.json?auth=${context.rootGetters.token}`
      );
      const responseData = await response.json();
      if (!response.ok) {
        // error handling
        throw new Error(
          responseData.error.message || 'Failed to send request.'
        );
      }
      const requests = [];
      for (const key in responseData) {
        requests.push({
          ...responseData[key],
          id: key,
          coachId: coachId,
        });
      }
      context.commit('setRequests', { requests });
    } finally {
      context.commit('endLoading', null, { root: true });
    }
  },
};
