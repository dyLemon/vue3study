<script setup lang="ts">
import { ref } from "vue";
defineProps({
  msg: String,
});
const emit = defineEmits(["add"]);
const count = ref(0);
const cheshi = "ddd";

defineExpose({
  cheshi,
});
</script>

<template>
  <h1 @click="emit('add', 'dd')">{{ msg }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
