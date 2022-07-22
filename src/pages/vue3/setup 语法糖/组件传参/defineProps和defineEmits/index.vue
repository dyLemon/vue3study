<template>
  <div>父：{{ name }} -{{ sex }}</div>
  <Child
    :name="name"
    :handChange="handChange"
    @change="change"
    v-model:sexChange="sex"
  ></Child>
</template>

<script lang="ts" setup>
import Child from "./children.vue";
import { ref } from "vue";
const name = ref("辣条");
const sex = ref("公");

const handChange = (params) => {
  name.value = params;
};
// const change = (params) => {
//   name.value = params;
// };
</script>
