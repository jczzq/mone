export default function(store, moduleName) {
  store.registerModule(moduleName, {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {
      SET_VMS() {},
      PUSH_PAGE_MODEL(state, data) {
        store.state[moduleName].configs.push(Object.freeze(data));
      }
    },
    actions: {
      // INIT(context) {}
    }
  });
}
