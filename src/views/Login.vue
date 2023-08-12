<template>
  <section class="loginSection">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="card bg-color">
        <div class="card-body text-center">
          <h1 class="title">¡Bienvenido! 👋</h1>
          <h4 class="subtitle mb-3">Inicia sesión con Google para continuar</h4>
          <GoogleLogin :callback="callback" prompt />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      callback: (response) => {
        localStorage.setItem("isLogged", "true");
        this.$router.push({ name: "Calculadora" });
      },
    };
  },
};
</script>

<style scoped>
.subtitle {
  color: #05a55d;
}
.title {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.loginSection {
  background-color: #121212;
  display: flex;
  align-items: center;
  min-height: 100vh;
}
.bg-color {
  background-color: #363636;
}

.card{
  width: 50%;;
}

@media only screen and (max-width: 767px) {
  .card {
    width: 90%;
  }
}

</style>
