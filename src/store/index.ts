import { defineStore } from "pinia";
//store之间相互调用
import { dyStore } from "./a.js";

export const mainStore = defineStore("main", {
  state: () => {
    return {
      msg: "这是辣条",
      age: 3,
    };
  },

  getters: {
    getCount(state): string {
      return state.msg;
    },
  },
  actions: {
    changeState() {
      //调用其他store的方法
      console.log(dyStore().dogList);
      this.msg = "通过action修改";
      // this.age = 20;
      //调用另外一个action的方法
      this.setData(this.age);
    },
    setData(data: number) {
      console.log(data);
    },
  },

  //数据持久化 开启数据缓存
  persist: {
    enabled: true,
    strategies: [
      {
        key: "my_msg", //自定义缓存key值
        storage: localStorage, //储存位置
        // paths: ["age"], //指定你想持久化的字段
      },
    ],
  },
});
