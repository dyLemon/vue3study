<template>
  <div>
    <Child @add="add"></Child>
  </div>
</template>

<script lang="ts" setup>
import Child from "./children.vue";
const add = (params) => {
  console.log(params);
};
</script>
