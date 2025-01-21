<template>
  <div 
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
    :aria-label="`Task: ${task.text}, Due: ${task.day}`"
    role="article"
  >
    <h3>
      {{ task.text }}
      <button 
        @click.stop="$emit('delete-task', task.id)" 
        aria-label="Delete task"
        class="delete-icon"
      >
        <i class="fas fa-times"></i>
      </button>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: {
    task: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.task:hover {
  background-color: #e9e9e9;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0; /* Removendo margem padrão do h3 */
}

.fas {
  color: red;
}

.delete-icon {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-size: 1em;
}

.delete-icon:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(255, 0, 0, 0.5); /* destacando o botão ao focar */
}
</style>