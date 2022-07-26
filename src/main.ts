import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
/**
 * 插件 pinia-plugin-persist 可以辅助实现数据持久化功能。
 * 数据默认存在sessionStorage里store的id 作为key 但是可以自定义key
 */
import piniaPluginPersist from "pinia-plugin-persist";

// import VueImagelazy from "vue-imagelazy-dy";
//引入指令插件
const app = createApp(App);
import VueImagelazy from "./package/图片懒加载/imgLazy.js";
app.use(VueImagelazy);

const store = createPinia();
store.use(piniaPluginPersist);
app.use(store);

// //全局自定义指令
// app.directive("focus", {
//   mounted(el) {
//     el.focus();
//   },
// });
// //添加样式
// app.directive("hoverColor", {
//   mounted(el) {
//     el.classList.add("button");
//   },
// });
app.mount("#app");
