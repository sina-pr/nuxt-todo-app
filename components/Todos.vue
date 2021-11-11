<template>
  <div class="todos d-flex flex-column mt-3 mb-3">
    <div
      v-for="todo in todos"
      :key="todo.text"
      class="todo-item d-flex flex-row align-items-center"
      :class="{ bgDone: todo.completed }"
      @click="toggleTodo(todo)"
    >
      <div :class="{ done: todo.completed }" class="todo-text">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<style>
.todos {
  max-height: 20rem;
  overflow-y: auto;
}
.bgDone {
  background-color: var(--primary);
  color: #fff;
}
.todo-text {
  flex: 1;
  padding: 0.3rem 0.5rem;
  text-align: center;
}
.done {
  text-decoration: line-through;
}
.todo-item {
  cursor: pointer;
  margin: 0.2rem 0.5rem;
  padding: 0.3rem 0.75rem;
  border-bottom: 2px solid rgba(139, 139, 139, 0.657);
  border-radius: 6px;
}
.todo-item:hover {
  background-color: rgb(228, 228, 228);
}
.checkbox {
  margin: 0;
}
</style>
<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },

  mounted() {
    this.$store.dispatch("getAllTodos");
  },
  methods: {
    ...mapMutations({
      toggleTodo: "toggleTodo",
    }),
  },
};
</script>
