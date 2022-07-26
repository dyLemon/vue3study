<template><div>孙子</div></template>
<script setup lang="ts">
//可以拿到祖先传递回来的参数，但是父亲没有props 接收使用
const props = defineProps({
  nameDemo: String,
});
console.log(props, "dd");
</script>
