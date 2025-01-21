<template>
  <div class="about-container">
    <h3>Version 1.0.0</h3>
    <p class="created-by">Created by José Jorge</p>
    <router-link to="/" class="back-link">Go Back</router-link>
  </div>
</template>


<script>
export default {
  name: 'About',
  inheritAttrs: false, // disable 'non-props' warning
};
</script>

<style scoped>
.about-container {
  text-align: center;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h3 {
  color: #333;
  font-size: 24px;
  margin-bottom: 10px;
}

.created-by {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.back-link {
  display: inline-block;
  padding: 10px 20px;
  text-decoration: none;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.back-link:hover {
  background-color: #0056b3;
}
</style>