export default {
  addRequest(state, paylaod) {
    state.requests.push(paylaod.request);
  },
  setRequests(state, paylaod) {
    state.requests = paylaod.requests;
  },
};
