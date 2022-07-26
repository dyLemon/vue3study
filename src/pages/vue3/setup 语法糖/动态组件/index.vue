<template>
  <div>
    <component :is="Foo"></component>
    <component :is="fooShow ? Foo : Bar"></component>
    <div @click="handChange">切换</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Foo from "./foo.vue";
import Bar from "./bar.vue";

const fooShow = ref(false);
const handChange = () => {
  fooShow.value = !fooShow.value;
};
</script>
