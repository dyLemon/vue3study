<template>
  <div>{{ obj.name ?? "-" }}</div>
  <!-- <div>{{ num }}</div> -->
  <div @click="handChange">按钮</div>
</template>
<script setup lang="ts">
// reactive能做的ref可以做，ref可以做的 reactive不一定能做
//reactive 不能对基本类型数据响应式 https://juejin.cn/post/7109257658447691784#heading-5
//一般reactive写法  const obj=reactive({count:0})

import { reactive, toRefs } from "vue";
// let data = reactive({}); //这样定义对象数组并且data={name:"dd} 直接赋值是会失去响应式
const data = reactive<Record<string, unknown>>({
  obj: {},
});
// const num = reactive("1");
const handChange = () => {
  data.obj = {
    name: "111",
  };
  //   num = 2;
};

//reactive直接解构会失去响应式 使用toRefs
const { obj } = toRefs(data);
</script>
