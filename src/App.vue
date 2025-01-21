<template>
  <div class="app-container">
    <Header 
      @toggle-add-task="toggleAddTask" 
      title="Zezinhos Agenda" 
      :showAddTask="showAddTask"
    />
    <div class="main-content">
      <div class="week-days">
        <div v-for="day in ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo']" :key="day" class="day">{{ day }}</div>
      </div>
      <div class="router-content">
        <router-view :showAddTask="showAddTask"></router-view>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f4;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding: 20px;
  background-color: white;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.btn {
  display: inline-block;
  background: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  transition: background 0.3s ease;
}

.btn:hover {
  background: #555;
}

.btn:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.5);
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

.week-days {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.day {
  width: calc(100% / 7);
  text-align: center;
  padding: 10px 5px;
  background-color: #d9e3f0;
  border: 1px solid #a9bce2;
  border-radius: 3px;
  font-weight: bold;
  color: #333;
}

.router-content {
  padding: 20px;
}

.router-view-tasks {
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.task-item {
  padding: 10px;
  margin: 5px 0;
  background: #e9ecef;
  border-left: 5px solid #3498db;
  border-radius: 3px;
}

/* Responsividade */
@media (max-width: 768px) {
  .week-days {
    flex-wrap: wrap;
  }

  .day {
    width: calc(100% / 3);
    margin-bottom: 5px;
  }
}
</style>