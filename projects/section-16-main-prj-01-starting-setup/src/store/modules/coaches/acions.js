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
    if (!responseData.ok) {
      // error handling
    }
    console.log(responseData);
    context.commit('registerCoach', { coach: responseData });
  },
  async fetchCoaches(context) {
    const response = await fetch(
      `https://vue-manage-coach-default-rtdb.asia-southeast1.firebasedatabase.app/coaches.json`
    );
    const responseData = await response.json();
    if (!responseData.ok) {
      // error handling
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
  },
};
