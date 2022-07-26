<template>
  <div class="container">
    {{ count }}
    <div @click="handClick">按钮</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, onBeforeUpdate, onUpdated, ref } from "vue";
onMounted(() => {
  console.log("dd");
});
onBeforeUpdate(() => {
  console.log("将要更新");
});
onUpdated(() => {
  console.log("更新");
});
onUnmounted(() => {
  console.log("销毁");
});
const count = ref(0);
const handClick = () => {
  count.value = count.value++;
};
const data = () => {
  console.log(count.value++);

  console.log(count);
};
/**
 *
beforeCreate -> setup()
created -> setup()
beforeMount -> onBeforeMount
mounted -> onMounted
beforeUpdate -> onBeforeUpdate
updated -> onUpdated
beforeDestroy -> onBeforeUnmount
destroyed -> onUnmounted
activated -> onActivated 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行
deactivated -> onDeactivated 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
errorCaptured -> onErrorCaptured 当捕获一个来自子孙组件的异常时激活钩子函数
 *
 */
</script>

<style scoped></style>
