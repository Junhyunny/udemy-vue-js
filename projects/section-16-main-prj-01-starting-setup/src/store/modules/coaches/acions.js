export default {
  async registerCoach(context, payload) {
    const userId = context.rootGetters.userId;
    const coach = {
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    const response = await fetch(
      `https://vue-manage-coach-default-rtdb.asia-southeast1.firebasedatabase.app/coaches/${userId}.json`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(coach),
      }
    );
    const responseData = await response.json();
    if (!response.ok) {
      // error handling
      throw new Error(responseData.error.message || 'Fail to send request');
    }
    console.log(responseData);
    context.commit('registerCoach', { coach: responseData });
  },
  async fetchCoaches(context, paylaod) {
    console.log(context);
    if (!context.getters.shouldUpdate && !paylaod.forceRefresh) {
      return;
    }
    // using global mutation in local mutation
    // https://stackoverflow.com/questions/44618440/vuex-how-to-commit-a-global-mutation-in-a-module-action
    context.commit('startLoading', null, { root: true });
    try {
      const response = await fetch(
        `https://vue-manage-coach-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
      );
      const responseData = await response.json();
      if (!response.ok) {
        // error handling
        throw new Error(responseData.error.message || 'Fail to send request');
      }
      const coaches = [];
      for (const key in responseData) {
        coaches.push({
          ...responseData[key],
          id: key,
        });
      }
      context.commit('setCoaches', {
        coaches,
      });
      context.commit('setFetchTimestamp');
    } finally {
      context.commit('endLoading', null, { root: true });
    }
  },
};
