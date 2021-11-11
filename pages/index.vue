<template>
  <div class="page-content">
    <todo-app />
  </div>
</template>

<script>
import TodoApp from "../components/TodoApp.vue";

export default { components: { TodoApp } };
</script>

<style>
body {
  background-color: #f9f9fa;
}
</style>
