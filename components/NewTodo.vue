<template>
  <div class="input-group mb-3">
    <input
      @keyup.enter="addTodo"
      type="text"
      class="form-control input"
      placeholder="Add new todo..."
    />
  </div>
</template>
<script>
export default {
  methods: {
    addTodo(e) {
      this.$store.commit("addTodo", e.target.value);
      e.target.value = "";
    },
  },
};
</script>
<style>
.input {
  flex: 1;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.btn {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
</style>
