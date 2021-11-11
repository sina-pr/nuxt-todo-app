import axios from "axios";

export const state = () => ({
  todos: {
    loading: true,
    todoList: [],
  },
});

export const actions = {
  getAllTodos({ commit }) {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?userId=3")
      .then((resp) => {
        commit("GET_ALL", resp.data);
      });
  },
};

export const mutations = {
  GET_ALL(state, todos) {
    state.todos.loading = false;
    state.todos.todoList = todos;
  },
  addTodo(state, text) {
    state.todos.todoList.unshift({
      title: text,
      completed: false,
    });
  },
  toggleTodo(state, todo) {
    todo.completed = !todo.completed;
  },
};
