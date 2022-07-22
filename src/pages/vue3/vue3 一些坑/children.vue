<template>
  <div @click="handAdd">按钮</div>
</template>

<!-- 解决办法1 -->
<!-- <script lang="ts">
const ADD = "add";
</script> -->

<script lang="ts" setup>
import { ref } from "vue";
//解决办法2
import { ADD } from "./config.js";

const count = ref(0);
//子传父 defineEmits
const emit = defineEmits([ADD]);
//注册了事件，但是用常量会抛错,
//尤大大暂时解决法 定义常量重新写个js文件 ，要么外部引入 要么内部添加script
// const ADD = "add";
// const emit = defineEmits([ADD]);

const handAdd = () => {
  count.value++;
  emit("add", count.value);
};
</script>
