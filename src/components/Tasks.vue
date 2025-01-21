<template>
  <ul class="task-list" aria-label="List of tasks">
    <li 
      v-for="task in tasks" 
      :key="task.id" 
      class="task-item" 
      :aria-label="`Task: ${task.text}, Due: ${task.day}`"
    >
      <Task 
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
    </li>
  </ul>
</template>
<script>
import Task from './Task.vue'

export default {
  name: 'Tasks',
  props: {
    tasks: {
      type: Array,
      required: true
    },
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder'],
}
</script>

<style scoped>
.task-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.task-item {
  margin-bottom: 10px;
}

/* Adicionando um estilo visual para melhorar a separação entre tarefas */
.task-item:not(:last-child) {
  border-bottom: 1px solid #e9ecef;
}
</style>