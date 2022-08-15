import mutations from './mutations';
import actions from './acions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      coaches: [],
    };
  },
  mutations,
  actions,
  getters,
};
