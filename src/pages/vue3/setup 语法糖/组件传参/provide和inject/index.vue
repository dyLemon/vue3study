<template>
  <div>父：{{ count }}</div>
  <Child></Child>
</template>

<script lang="ts" setup>
import Child from "./children.vue";
import { ref, provide, readonly } from "vue";
const count = ref(0);
//修改count 的值，传入子孙
const updateCount = () => {
  count.value++;
};

//为了保证provide 传给子孙的值不被修改 加上readonly
provide("count", readonly(count));
provide("updateCount", updateCount);
</script>
