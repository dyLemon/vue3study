<template>
  <div v-for="item in imgSrc" key="item">
    <img v-lazy="baseImg" src="" :imgsrc="item" />
  </div>
</template>

<script lang="ts" setup>
/**IntersectionObserver
 *
 *  https://juejin.cn/post/6844903874302574599
 *

 */

//图片懒加载指令
const imgSrc = [
  "https://p3-passport.byteacctimg.com/img/user-avatar/594fc0d3d6dd29531946d928d14de93c~300x300.image",
  "https://p26-passport.byteacctimg.com/img/user-avatar/cb728ddfa7c0b57eb22627921283e536~300x300.image",
  "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2da9d0cf65cb408cb2d17e0c87fcaaf0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",
  "https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1658595600&t=91fe8a201643568357340909b6c45610",
  "https://img1.baidu.com/it/u=3217543765,3223180824&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1658595600&t=d7f0da02bebe55763b689f00188dc9c6",
  "https://img2.baidu.com/it/u=1792249350,650626052&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1658595600&t=dcadebca8a30f1ae7811954b0d85f338",
  "https://t10.baidu.com/it/u=3105518379,1723849651&fm=58",
  "https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2da9d0cf65cb408cb2d17e0c87fcaaf0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp",
  "https://t10.baidu.com/it/u=3844842414,292040484&fm=58",
  "https://t12.baidu.com/it/u=2944858655,3260611328&fm=58",
];

//默认图片
const baseImg =
  "https://gw.alicdn.com/tps/i1/TB147JCLFXXXXc1XVXXxGsw1VXX-112-168.png";

//创建一个观察对象，观察当前使用指令的元素
//  * isIntersecting 在可视区true 反之false
//  *  intersectionRatio 返回目标元素在可视区的比例
const observe: any = new IntersectionObserver((entries) => {
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
const showImage = (el: any, imgSrc: string | any) => {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    //图片加载后暂停监听该元素
    observe.unobserve(el);
  };
};
//注册局部指令
const vLazy = {
  mounted: (el: Record<string, unknown>, binding: any) => {
    console.log(binding);

    //初始化展示默认图片
    el.src = binding.value;

    //图片加载失败
    el.onerror = () => {
      el.src = binding.value;
    };
    //开启监听
    observe.observe(el);
  },

  //将销毁
  beforeUnmount() {
    // unobserve 停止监听特定目标的元素 disconnect使IntersectionObserver对象停止全部监听工作
    observe.disconnect();
  },
};
</script>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
