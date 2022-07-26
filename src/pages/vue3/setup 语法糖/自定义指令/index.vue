<template>
  <div class="container">
    <!-- <input type="text" v-focus name="" id="" /> -->
    <input type="text" v-focus-directive name="" id="" />
    <!-- <div v-hoverColor>ddd</div> -->
  </div>
</template>

<script lang="ts" setup>
/**
 *
 vue2
 directives: {
  focus: {
    mounted(el) {
      el.focus()
    }
  }
}
 * vue3 自定义指令，但是必须以vNameOfDirective 形式来命名本地自定义指令（v-)
 *
 * 自定义指令生命周期
 * creatd 元素初始化的时候
 * beforeMount 指令绑定到元素后调用 只调用一次
 * mounted    当元素挂载时
 * update 这个周期方法被移除 改用updated
 * beforeUnmount 在元素被移除前调用
 * unmounted 指令被移除后调用 只调用一次
 * 
 * 示例
  const Directive = {
  created() {}, 
  beforeMount() {},
  mounted() {},
  beforeUpdate() {}, 
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}

//main  //全局自定义指令
const app = createApp(App);
app.directive("focus", {
  mounted(el) {
    el.focus();
  },
});

使用 <input type="text" v-focus name="" id="" />
 */

//局部自定义指令
//vue3

const vFocusDirective = {
  //vFocus也行
  mounted: (el: any) => {
    el.focus();
  },
};
</script>

<style scoped></style>
