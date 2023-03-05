<template>
    <div class="todo-form">
      <form @submit.prevent="addNewTodo">
        <input type="text" v-model="newTodo" placeholder="Add a new todo" />
        <button type="submit">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from "vue";
  import { useTodoListStore } from "../stores/todoList";
  
  export default {
    setup() {
      const todoListStore = useTodoListStore();
      let newTodo = ref("");
  
      const addNewTodo = () => {
        const todo = { id: Date.now(), text: newTodo.value, done: false };
        todoListStore.addTodo(todo);
        newTodo.value = "";
      };
  
      return {
        newTodo,
        addNewTodo,
      };
    },
  };
  </script>
  
  <style scoped>
  .todo-form {
    margin-bottom: 2rem;
  }
  
  form {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  
  input[type="text"] {
    padding: 0.5rem;
    border-radius: 0.25rem;
    border: none;
    flex: 1;
    font-size: 1.2rem;
  }
  
  button[type="submit"] {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    border: none;
    background-color: #2ecc71;
    color: white;
    font-size: 1.2rem;
  }
  button[type="submit"]:hover {
    cursor: pointer;
    scale: 1.1;
    transition: all 0.3s ease-in-out;
  }
  
  @media (max-width: 768px) {
    form {
      flex-direction: column;
      gap: 0.5rem;
    }
  
    input[type="text"] {
      font-size: 1rem;
    }
  
    button[type="submit"] {
      font-size: 1rem;
    }
  }
  </style>
  