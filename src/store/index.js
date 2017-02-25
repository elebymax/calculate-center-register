import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  progressDialog: false,
  resultDialog: false,
  resultDialogContent: ''
};

const getters = {
  progressDialog: state => state.progressDialog,
  resultDialog: state => state.resultDialog,
  resultDialogContent: state => state.resultDialogContent
};

const mutations = {
  setResultDialogContent (state, message) {
    state.resultDialogContent = message;
  },
  progressDialogOpen (state) {
    state.progressDialog = true;
  },
  progressDialogClose (state) {
    state.progressDialog = false;
  },
  resultDialogOpen (state) {
    state.resultDialog = true;
  },
  resultDialogClose (state) {
    state.resultDialog = false;
  }
};

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});

export default store
