<template>
  <div>儿：父传子的数据--------{{ name }}--{{ sexChange }}</div>
  <div @click="handClick">儿子按钮</div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";
const props = defineProps({
  name: String as PropType<string>,
  sexChange: String,
  handChange: Object,
});

// defineProps<{
//   name: string;
// }>();
//注册子传父事件
// const emit =defineEmits<{
//   (e:'change',id:number):void
// }>
const emit = defineEmits(["change", "update:sexChange"]);
const handClick = () => {
  props.handChange("幺儿"); //直接使用父传给子的函数，和react一样

  emit("change", "幺儿");
  // v-model:xxx  updata:xxx  双向绑定
  emit("update:sexChange", "母");
};
</script>
