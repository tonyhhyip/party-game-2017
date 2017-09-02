export default {
  namespaced: true,
  state: {
    attendees: '',
  },
  mutations: {
    updateAttendee(state, val) {
      state.attendees = val;
    },
  },
  actions: {
    updateAttendeeQuery({ commit }, query) {
      commit('updateAttendee', query);
    },
  },
};
