import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 0,
    counter2:1,
    user:{
        name:"John",
        age:19
    }
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    getAge:(state) => state.user.age
  },
  actions: {
    increment() {
      this.counter++
    },
    incAge(){
        this.user.age++
    }
  }
})