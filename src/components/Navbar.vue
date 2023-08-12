<template>
  <header>
    <nav class="navbar navbar-dark principal-color">
      <div class="container-fluid">
        <a class="navbar-brand">Calculator</a>
        <button @click="logout" class="btn btn-dark" type="button">Cerrar Sesion</button>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  methods: {
    logout() {
      localStorage.removeItem("isLogged");
      this.$router.push({ name: 'Login' })
    }
  },
};
</script>

<style scoped>
.principal-color {
  background-color: #0d6efd;
}
</style>