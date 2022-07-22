<template>
  <div>儿子</div>
  <slot name="top" message="信息"></slot>
</template>
<script lang="ts" setup>
//属性透传 vue2是attrs
import { useAttrs, useSlots } from "vue";
defineProps({
  msg: String,
});
//可以拿到父组件给当前组件标签定义的所有属性，比如input placeholder等，但是不包括props里面的值
const attrs = useAttrs();
console.log(attrs);

//useSlots 插槽透传  //通常用于手写渲染函数，但也可用于检测是否存在插槽
const slots = useSlots();
console.log(slots);
</script>
