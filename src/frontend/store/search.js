export default {
  namespaced: true,
  state: {
    attendeesName: '',
    attendeesOrder: '',
  },
  mutations: {
    updateAttendeeName(state, val) {
      state.attendeesName = val;
    },
    updateAttendeesOrder(state, val) {
      state.attendeesOrder = val;
    },
  },
  actions: {
    updateAttendeeNameQuery({ commit }, query) {
      commit('updateAttendeeName', query);
    },
    updateAttendeesOrder({ commit }, query) {
      commit('updateAttendeesOrder', query);
    },
  },
};
