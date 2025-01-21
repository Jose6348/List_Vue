<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <nav class="nav">
      <router-link to="/" aria-label="Go to home page">Home</router-link>
      <router-link to="/about" aria-label="Learn about the application">About</router-link>
    </nav>
    <Button
      v-if="showAddTaskButton"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'Fechar' : 'Adicionar tarefa'"
      :color="showAddTask ? 'red' : 'green'"
      :aria-label="`${showAddTask ? 'Close' : 'Open'} the task creation form`"
    />
  </header>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      required: true
    },
    showAddTask: {
      type: Boolean,
      default: false
    },
  },
  components: {
    Button,
  },
  computed: {
    showAddTaskButton() {
      // Mostrar o botão apenas na página inicial
      return this.$route.path === '/';
    }
  },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
}

h1 {
  margin: 0;
  color: #333;
}

.nav {
  display: flex;
}

.nav a {
  margin-left: 15px;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav a:hover, .nav a:focus {
  color: #0056b3;
  text-decoration: underline;
}
</style>