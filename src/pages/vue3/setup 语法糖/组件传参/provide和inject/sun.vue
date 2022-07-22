<template>
  <div>孙：{{ count }}</div>
</template>

<script lang="ts" setup>
import { inject } from "vue";
const count = inject("count");
</script>
