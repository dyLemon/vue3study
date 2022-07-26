import { defineStore } from "pinia";

export const dyStore = defineStore("dy", {
  state: () => {
    return {
      dogList: ["金毛", "拉布拉多", "二哈"],
    };
  },
  getters: {},
  actions: {},
});
