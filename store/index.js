export const state = () => ({
  sidebarOpen: false,
  myTestMessage: 'This is the unedited message',
  serverinitmessage: 'initial message',
  serverinitid: 0
});

// have to be synchronous
export const mutations = {
  sidebarOpenChange(state, sidebarOpen) {
    state.sidebarOpen = sidebarOpen;
  },
  updateMyTestMessage(state, myTestMessage) {
    state.myTestMessage = myTestMessage;
  },
  reset_serverinits(state, arg) {
    state.serverinitmessage = arg.message;
    state.serverinitid = arg.id;
  },
  resetBoth(state, arg) {
    console.log(arg);
    state.message = arg.message;
    state.id = arg.id;
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
  async nuxtServerInit(store, context) {
    try {
      //
      const response = await context.$axios.get(
        'http://localhost:9000/api/test'
      );
      // changed this:
      //return response.data;
      // to this:
      if (response.data[0]) {
        context.store.commit('reset_serverinits', response.data[1]);
      } else {
        console.log('GET error nuxtServerInit: ', context.error);
      }
    } catch (err) {
      console.log('Catch error nuxtServerInit: ', err);
    }
  },
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
