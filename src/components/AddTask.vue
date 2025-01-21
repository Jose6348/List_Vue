<template>
  <form @submit.prevent="onSubmit" class="add-form">
    <div class="form-control">
      <label for="task">Task</label>
      <input 
        id="task" 
        type="text" 
        v-model.trim="text" 
        name="text" 
        placeholder="Adicionar tarefa " 
        required 
        aria-label="Enter the task description"
      />
    </div>
    <div class="form-control">
      <label for="day">Day & Time</label>
      <input 
        id="day" 
        type="datetime-local" 
        v-model="day" 
        name="day" 
        placeholder="Add Day & Time" 
        required 
        aria-label="Select the day and time for the task"
      />
    </div>
    <div class="form-control form-control-check">
      <label for="reminder">Set Reminder</label>
      <input 
        id="reminder" 
        type="checkbox" 
        v-model="reminder" 
        name="reminder" 
        aria-label="Check to set a reminder for this task"
      />
    </div>

    <button type="submit" class="btn btn-block" :disabled="!text">
      Save Task
    </button>
  </form>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
    }
  },
  methods: {
    onSubmit() {
      if (!this.text) {
        return; // Evita a necessidade de um alert, usamos o atributo 'required' no input
      }

      const newTask = {
        id: Date.now().toString(), // Usar um ID mais previsível e único
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      }

      this.$emit('add-task', newTask)

      this.text = ''
      this.day = ''
      this.reminder = false
    },
  },
}
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
}

.form-control input[type="text"],
.form-control input[type="datetime-local"] {
  width: 100%;
  height: 40px;
  margin: 5px 0;
  padding: 3px 7px;
  font-size: 17px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input[type="checkbox"] {
  margin-left: 10px;
  transform: scale(1.5); /* Torna o checkbox mais visível */
}

.btn {
  display: inline-block;
  background: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 5px 0;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #0056b3;
}

.btn:disabled {
  background-color: #6c757d;
  cursor: not-allowed;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>
