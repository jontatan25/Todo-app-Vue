<template>
    <div class="todo-list">
      <ul>
        <li v-for="(todo, index) in todos" :key="index">
          <div class="todo-item">
            <input type="checkbox" v-model="todo.done" />
            <p :class="{ 'done': todo.done }">{{ todo.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { computed } from "@vue/reactivity";
  import { useTodoListStore } from "../stores/todoList";
  
  export default {
    setup() {
      const todoListStore = useTodoListStore();
  
      const todos = computed(() => {
        return todoListStore.todoList;
      });
  
      return {
        todos,
      };
    },
  };
  </script>
  
  <style scoped>
  li {
  list-style-type: none;
}
  .todo-list {
    margin-top: 1rem;
  }
  
  .todo-item {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }
  
  .todo-item input[type="checkbox"] {
    margin-right: 1rem;
  }
  
  .todo-item p {
    font-size: 1.2rem;
  }
  
  .todo-item p.done {
    text-decoration: line-through;
    color: #999;
  }
  
  </style>
  