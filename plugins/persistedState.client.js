import createPersistedState from "vuex-persistedstate"

export default ({ store }) => {
  createPersistedState({
    key: "daecommerce-vue",
    paths: ["products", "userInfo", "systemInfo", "productInfo"]
  })(store)
}
