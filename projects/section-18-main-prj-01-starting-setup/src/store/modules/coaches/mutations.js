export default {
  registerCoach(state, payload) {
    state.coaches.push(payload.coach);
  },
  setCoaches(state, paylaod) {
    state.coaches = paylaod.coaches;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
};
