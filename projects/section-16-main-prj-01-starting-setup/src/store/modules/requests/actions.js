export default {
  async contactCoach(context, payload) {
    const request = {
      coachId: payload.coachId,
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
    if (!response.ok) {
      // error handling
      throw new Error(response.message || 'Failed to send request.');
    }
    const responseData = await response.json();
    request.id = responseData.name;
    context.commit('addRequest', { request });
  },
  async fetchContacts(context) {
    context.commit('startLoading', null, { root: true });
    try {
      const coachId = context.rootGetters.userId;
      const response = await fetch(
        `https://vue-manage-coach-default-rtdb.asia-southeast1.firebasedatabase.app/contacts/${coachId}.json`
      );
      if (!response.ok) {
        // error handling
        throw new Error(response.message || 'Failed to send request.');
      }
      const responseData = await response.json();
      const requests = [];
      for (const key in responseData) {
        requests.push({
          ...responseData[key],
        });
      }
      context.commit('setRequests', { requests });
    } finally {
      context.commit('endLoading', null, { root: true });
    }
  },
};
