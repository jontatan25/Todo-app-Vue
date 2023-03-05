import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todoList: [],
  }),
  getters: {
    doneTodos(state) {
      state.todoList.filter((todo) => todo.done);
    },
  },
  actions: {
    addTodo(newTodo) {
      // Push the newTodo into the todoList array in the state
      this.todoList.push(newTodo);
      console.log(newTodo)
      console.log(this.todoList)
    },
  },
});
