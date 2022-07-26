//注册指令
const plugin = {
  install(app, options) {
    app.directive("demofocus", {
      mounted: (el) => {
        el.focus();
      },
    });
  },
};
export default plugin;
