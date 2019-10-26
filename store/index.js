export const state = () => ({
  sidebarOpen: false,
  myTestMessage: 'This is the unedited message'
});

// have to be synchronous
export const mutations = {
  sidebarOpenChange(state, sidebarOpen) {
    state.sidebarOpen = sidebarOpen;
  },
  updateMyTestMessage(state, myTestMessage) {
    state.myTestMessage = myTestMessage;
  }
};

export const getters = {
  getSidebarOpen: state => {
    return state.sidebarOpen;
  },
  getMyTestMessage: state => {
    return state.myTestMessage;
  }
};

// can be async
// trigger action with store.dispatch('<action>')
export const actions = {
  updateSidebarOpen: ({ commit, state }, props) => {
    commit('sidebarOpenChange', props);
    return state.sidebarOpen;
  },
  // updateMyTestMessage(context) {
  //   context.commit('updateMyTestMessage');
  // }
  updateMyTestMessage({ commit, state }, payload) {
    // can handle multiple mutations
    commit('updateMyTestMessage', payload);
    return state.myTestMessage;
  }
};
