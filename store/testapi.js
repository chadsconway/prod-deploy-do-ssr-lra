export const state = () => ({
  message: 'initial message',
  id: 0
});

export const mutation = {
  resetBoth(state, arg) {
    console.log(arg);
    state.message = arg.message;
    state.id = arg.id;
  }
};

export const actions = {
  async resetBothAsync({ commit }) {
    commit('resetBoth', payload);
  }
};
