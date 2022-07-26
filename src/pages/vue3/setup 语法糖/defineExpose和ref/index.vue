<template>
  <div class="container">
    <Children ref="childRef"></Children>
    <div @click="handClick">按钮</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Children from "./children.vue";
const childRef = ref(null);

const handClick = () => {
  console.log(childRef.value);
  console.log(childRef.value.c);
  console.log(childRef.value.b);
  console.log(childRef.value.a);
};
</script>
