<template>
  <Child nameDemo="dd" :msg="demo">
    <template #top message="信息">
      我是父
      <p>dddd</p>
    </template></Child
  >
</template>
<script lang="ts" setup>
import { ref } from "vue";
import Child from "./children.vue";
const demo = ref("测试");
</script>
