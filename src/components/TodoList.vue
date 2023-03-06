<template>
  <div class="todo-list">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <div class="todo-item">
          <div class="todo-text">
            <input type="checkbox" v-model="todo.done" />
            <p :class="{ done: todo.done }">{{ todo.text }}</p>
          </div>
          <button class="todo__btn-delete" @click="deleteTask(todo.id)">Delete Task</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTodoListStore } from "../stores/todoList";

const todoListStore = useTodoListStore();

const todos = computed(() => {
  return todoListStore.todoList;
});
const deleteTask = (id) => {
  todoListStore.deleteTodo(id)
}
</script>

<style scoped>
li {
  list-style-type: none;
}
.todo-list {
  margin-top: 1rem;
}

.todo-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.todo-text {
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
}

.todo-text input[type="checkbox"] {
  margin-right: 1rem;
}

.todo-text p {
  font-size: 1.2rem;
  
}

.todo-text p.done {
  text-decoration: line-through;
  color: #999;
}

.todo__btn-delete:hover {
    cursor: pointer;
}
</style>
