<template>
  <div>
    <ul v-if="todos.length">
      <TodoListItem v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo"></TodoListItem>
    </ul>
    <p v-else>Nothing left in the list. Add a new todo in the input above.</p>
  </div>
</template>

<script>
import TodoListItem from "./TodoListItem";

let nextTodoId = 1;

export default {
  components: { TodoListItem },
  data: function() {
    return {
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue"
        },
        {
          id: nextTodoId++,
          text: "Learn about single-file components"
        },
        {
          id: nextTodoId++,
          text: "Fall in love"
        }
      ]
    };
  }
};
</script>

<style>
</style>