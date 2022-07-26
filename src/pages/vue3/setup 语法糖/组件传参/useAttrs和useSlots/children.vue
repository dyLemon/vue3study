<template>
  <div>儿子</div>
  <!-- 把父的属性传给孙 -->
  <!-- <Sun v-bind="attrs"></Sun> -->
  <Sun></Sun>
  <slot name="top" message="信息"></slot>
</template>
<script lang="ts" setup>
import Sun from "./sun.vue";
//属性透传 vue2是attrs
import { useAttrs, useSlots } from "vue";
defineProps({
  msg: String,
});
//可以收集父组件中的所有传过来的属性，除了那些在组件中通过 props 定义的，因为用props注册了 就不能接收到。
//如果不用defineProps attrs可以获取父绑定的所有属性
const attrs = useAttrs();
console.log(attrs, "孩子");

//useSlots 插槽透传  //通常用于手写渲染函数，但也可用于检测是否存在插槽
const slots = useSlots();
console.log(slots);
</script>

<!-- https://juejin.cn/post/7047498919009320974 -->
