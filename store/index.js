export const state = () => ({
  sidebarOpen: false
});

export const mutations = {
  sidebar_opened(state, arg) {
    state.sidebarOpen = arg;
  }
};
