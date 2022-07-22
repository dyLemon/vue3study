<template>
  <div>儿：{{ count }}</div>
  <div @click="updateCount">儿++</div>
  <Sun></Sun>
</template>

<script lang="ts" setup>
import Sun from "./sun.vue";
import { inject } from "vue";
const count = inject("count");
// 传入方法，触发改变父响应式数据
const updateCount = inject("updateCount");
</script>
