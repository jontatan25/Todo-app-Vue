<template>
    <div class="todo-app">
      <h1>Todo List</h1>
      <todo-form />
      <todo-list />
    </div>
  </template>
  
  <script setup>
  import TodoForm from "./TodoForm.vue"
  import TodoList from "./TodoList.vue"
  </script>
  
  <style scoped>
  .todo-app {
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 0.5rem;
    max-width: 40rem;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  
    .todo-app {
      padding: 1rem;
      border-radius: 0;
      max-width: initial;
    }
  }
  </style>
  