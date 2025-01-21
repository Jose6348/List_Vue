<template>
  <footer class="footer">
    <nav class="footer-nav">
      <router-link to="/sobre" aria-label="Saiba mais sobre o aplicativo">Sobre</router-link>
      <router-link to="/privacidade" aria-label="Veja nossa política de privacidade">Privacidade</router-link>
      <router-link to="/termos" aria-label="Leia os termos de serviço">Termos</router-link>
    </nav>
    <p>© {{ currentYear }} Nome da Sua Empresa. Todos os direitos reservados.</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  },
}
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  color: #333;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #dee2e6;
}

.footer-nav {
  margin-bottom: 10px;
}

.footer-nav a {
  color: #007bff;
  text-decoration: none;
  padding: 0 10px;
  transition: color 0.3s ease;
}

.footer-nav a:hover, .footer-nav a:focus {
  color: #0056b3;
  text-decoration: underline;
}

p {
  font-size: 0.9em;
  margin: 0;
}
</style>