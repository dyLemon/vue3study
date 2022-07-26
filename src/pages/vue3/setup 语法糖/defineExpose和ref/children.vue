<template>
  <div class="container">dd</div>
</template>

<script lang="ts" setup>
import { ref, defineExpose } from "vue";
const a = 1;
const b = ref(2);
const c = ref(3);
defineExpose({
  a,
  b,
});
</script>

<style scoped></style>
