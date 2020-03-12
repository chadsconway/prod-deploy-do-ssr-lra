process.env.DEBUG = true;
process.env.DEBUG_URL = "http://localhost:9000";
process.env.TESTING = false;
process.env.TESTING_URL = "http://1086.live/testbed";
process.env.PRODUCTION = false;
process.env.PRODUCTION_URL = "http://thelivingrosaryapostolate.com";

export const state = () => ({
  sidebarOpen: false,
  sidenavIsHid: false,
  myTestMessage: "This is the unedited message",
  serverinitmessage: "initial message",
  serverinitid: 0,
  message: "initial message",
  id: 0,
  contacts: [],
  detailsArray: [],
  mysteriesArray: []
});

// have to be synchronous
export const mutations = {
  sidenavNowHid(state, sidenavIsHid) {
    state.sideNavIsHid = sidenavIsHid;
  },
  sidebarOpenChange(state, sidebarOpen) {
    state.sidebarOpen = sidebarOpen;
  },
  updateMyTestMessage(state, myTestMessage) {
    state.myTestMessage = myTestMessage;
  },
  reset_serverinits(state, arg) {
    if (process.env.DEBUG) {
      console.log(`arg in mutation->reset_serverinits = ${arg}`);
      for (var ar in arg) {
        console.log(`for ${ar} value = ${arg.ar}`);
      }
    }
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
  getSidenavIsHid: state => {
    return state.sideNavIsHid;
  },
  getSidebarOpen: state => {
    return state.sidebarOpen;
  },
  getMyTestMessage: state => {
    return state.myTestMessage;
  },
  getDetailsArrayContent: state => {}
};

// can be async
// trigger action with store.dispatch('<action>')
export const actions = {
  updateSideNavIsHid: ({ commit, state }, sidenavIsHid) => {
    commit("sidenavNowHid", sidenavIsHid);
  },
  async nuxtServerInit(store, context) {
    if (process.env.DEBUG) {
      console.log("nuxtServerInit - Entry");
    }
    try {
      // URL-depends on environment variable
      var apiUrl = "";
      if (process.env.DEBUG) {
        apiUrl = process.env.DEBUG_URL;
      } else if (process.env.TESTING) {
        apiUrl = process.env.TESTING_URL;
      } else {
        apiUrl = process.env.PRODUCTION_URL;
      }
      if (process.env.DEBUG) {
        console.log(`Using ${apiUrl}/api/ for apiUrl`);
      }
      const response = await context.$axios.get(`${apiUrl}/api/getInit`);
      // changed this:
      //return response.data;
      // to this:
      if (response.data[0]) {
        if (process.env.DEBUG) {
          console.log("");
          console.log("nuxtServerInit response.data[0]");
        }
        context.store.commit("reset_serverinits", response.data[1]);
      } else {
        console.log("GET error nuxtServerInit: ", context.error);
      }
    } catch (err) {
      console.log("Catch error nuxtServerInit: ", err);
    }
  },
  updateSidebarOpen: ({ commit, state }, props) => {
    commit("sidebarOpenChange", props);
    return state.sidebarOpen;
  },
  // updateMyTestMessage(context) {
  //   context.commit('updateMyTestMessage');
  // }
  updateMyTestMessage({ commit, state }, payload) {
    // can handle multiple mutations
    commit("updateMyTestMessage", payload);
    return state.myTestMessage;
  },
  async resetBothAsync(context, payload) {
    context.commit("resetBoth", payload);
  }
};
