export default {
  registerCoach(context, payload) {
    const coach = {
      id: new Date().toISOString(),
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };
    context.commit('registerCoach', { coach });
  },
};
