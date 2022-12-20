import { defineStore } from "pinia";

export const useTempStore = defineStore("temp", {
  state: () => {
    return { tempData: null };
  },

});