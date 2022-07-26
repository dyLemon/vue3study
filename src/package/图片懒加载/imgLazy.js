//注册懒加载指令,install转为插件 app.use使用插件
const plugin = {
  install(app) {
    app.directive("imageLazy", {
      mounted(el, binding) {
        const baseImg = binding.value;
        //初始化展示默认图片
        el.src = baseImg;
        //图片加载失败
        el.onerror = () => {
          el.src = baseImg;
        };
        //开启监听
        observe.observe(el);
      },
      //将销毁
      beforeUnmount() {
        observe.disconnect();
      },
    });
  },
};

//创建一个观察对象，观察当前使用指令的元素
//  * isIntersecting 在可视区true 反之false
//  *  intersectionRatio 返回目标元素在可视区的比例
const observe = new IntersectionObserver((entries) => {
  // entries是所有被监听对象的集合
  entries.forEach((item) => {
    if (item.isIntersecting || item.intersectionRatio > 0) {
      const el = item.target;
      const imgSrc = el.getAttribute("imgsrc"); //获取元素属性
      setTimeout(() => {
        showImage(item.target, imgSrc);
      }, 200);
    }
  });
});

//加载图片
const showImage = (el, imgSrc) => {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    //图片加载后暂停监听该元素
    observe.unobserve(el);
  };
};

export default plugin;
