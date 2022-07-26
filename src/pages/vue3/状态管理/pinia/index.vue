<template>
  <div class="container">
    {{ store.msg }}--{{ store.age }}
    <div>通过storeToRefs解构:</div>
    {{ msg }}--{{ age }}
    <br />
    <br />
    <br />
    <br />
    <div @click="handClick">修改数据</div>
  </div>
</template>
<!-- 
    pinia是一个类似vuex的插件，是一个轻量级状态管理插件
    模块化设计，方便扩展，非常轻巧，服务器渲染支持
    
    Vue2 和 Vue3 都能支持
    抛弃传统的 Mutation,modules ，只有 state, getter 和 action ，简化状态管理库
    不需要嵌套模块，符合 Vue3 的 Composition api，让代码扁平化
    TypeScript支持
    代码简介，很好的代码自动分割

 -->
<script lang="ts" setup>
import { mainStore } from "../../../../store/index";
import { dyStore } from "../../../../store/a";
import { storeToRefs } from "pinia";
const store = mainStore();
const dy = dyStore();
console.log(dy.dogList, "dddd");
//pinia就是vuex5，为了尊重pinia作者，库名不做修改，也就是以后也不会有vuex5了，直接用pinia就行了
// 解构store 这样解构会失去响应式和vue3组合api解构props一样
// const { msg, age } = store;
//使用 storeToRefs 解构不会失去响应式
const { msg, age } = storeToRefs(store);

//修改
/*
简单数据可以直接修改store的state值

修改多条 推荐$patch （官网明确表明patch是经过优化的，会加快修改速度，对性能有很大好处）

$patch 方法接受两个类型的参数，函数 和 对象

函数 会接收一个state 参数，是store仓库的state值
*/
const handClick = () => {
  /**
   * 直接修改state 不通过action
   */
  //简单数据可以直接修改state，复杂的也可以 只是性能不好
  // store.age++;

  //$patch +对象
  // store.$patch({
  //   msg: "修改一下",
  //   age: 2,
  // });

  //$patch + 函数
  // store.$patch((state) => {
  //   state.age = state.age + 2;
  //   state.msg = "该死的疫情";
  // });

  /**
   * 通过action修改
   */
  store.changeState();
};
</script>

<style scoped></style>
