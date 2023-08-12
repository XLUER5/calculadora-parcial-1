<template>
  <section class="section">
    <section class="calculator-principal">
      <div class="card">
        <!-- <div class="card-header text-center">
          <ul class="nav" data-bs-tabs="tabs">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="true"
                data-bs-toggle="tab"
                href="#dhcp"
                >Calculadora</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#static"
                >Convertidor</a
              >
            </li>
          </ul>
        </div> -->
        <form class="card-body tab-content" id="form">
          <div class="tab-pane active" id="dhcp">
            <div class="calculadora">
              <input
                class="form-control w-100 display"
                type="text"
                name="display"
                id="display"
                disabled
                v-model="current"
              />
              <div class="row mt-3">
                <div class="col-3">
                  <button
                    @click="reset"
                    type="button"
                    class="btn btn-action w-100"
                    id="reset"
                  >
                    AC
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-action w-100"
                    id="positve"
                    @click="negativo"
                  >
                    +/-
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-action w-100"
                    id="porcentaje"
                    @click="porcentaje"
                  >
                    %
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    id="division"
                    @click="dividir"
                  >
                    ÷
                  </button>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-3">
                  <button
                    @click="agregar('7')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="7"
                  >
                    7
                  </button>
                </div>
                <div class="col-3">
                  <button
                    @click="agregar('8')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="8"
                  >
                    8
                  </button>
                </div>
                <div class="col-3">
                  <button
                    @click="agregar('9')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="9"
                  >
                    9
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    id="multiplicar"
                    @click="multiplicar"
                  >
                    x
                  </button>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-3">
                  <button
                    @click="agregar('4')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="4"
                  >
                    4
                  </button>
                </div>
                <div class="col-3">
                  <button
                    @click="agregar('5')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="5"
                  >
                    5
                  </button>
                </div>
                <div class="col-3">
                  <button
                    @click="agregar('6')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="6"
                  >
                    6
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    id="restar"
                    @click="restar"
                  >
                    -
                  </button>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-3">
                  <button
                    @click="agregar('1')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="1"
                  >
                    1
                  </button>
                </div>
                <div class="col-3">
                  <button
                    @click="agregar('2')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="2"
                  >
                    2
                  </button>
                </div>
                <div class="col-3">
                  <button
                    @click="agregar('3')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="3"
                  >
                    3
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    id="sumar"
                    @click="sumar"
                  >
                    +
                  </button>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-6">
                  <button
                    @click="agregar('0')"
                    type="button"
                    class="btn btn-secondary w-100"
                    id="0"
                  >
                    0
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-secondary w-100"
                    id="punto"
                    @click="punto"
                  >
                    .
                  </button>
                </div>
                <div class="col-3">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    id="igual"
                    @click="igual"
                  >
                    =
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane" id="static">
            <p class="card-text">Change Static Network settings.</p>
          </div>
        </form>
      </div>
    </section>
  </section>
</template>

<script>
import { googleLogout } from "vue3-google-login";

export default {
  data() {
    return {
      previous: null,
      current: "",
      operator: null,
      operatorClicked: false,
    };
  },
  methods: {
    logout() {
      googleLogout();
      localStorage.setItem("IsLogged", "false");
    },
    reset() {
      this.current = "";
    },
    negativo() {
      this.current =
        this.current.charAt(0) === "-"
          ? this.current.slice(1)
          : `-${this.current}`;
    },
    porcentaje() {
      this.current = `${parseFloat(this.current) / 100}`;
    },
    agregar(number) {
      if (this.operatorClicked) {
        this.current = "";
        this.operatorClicked = false;
      }
      this.current = `${this.current}${number}`;
    },
    punto() {
      if (this.current.indexOf(".") === -1) {
        this.append(".");
      }
    },
    setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
    },
    dividir() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
    },
    multiplicar() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
    },
    restar() {
      this.operator = (a, b) => b - a;
      this.setPrevious();
    },
    sumar() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
    },
    igual() {
      this.current = `${this.operator(
        parseFloat(this.current),
        parseFloat(this.previous)
      )}`;
      this.previous = null;
    },
  },
};
</script>

<style scoped>
.section {
  min-height: 80vh;
  display: flex;
  align-items: center;
}

.calculator-principal {
  width: 50%;
  margin: auto;
}

.nav {
  justify-content: space-evenly !important;
}

.nav > .nav-item {
  background-color: #45434a;
  width: 50%;
}
.nav-link {
  color: white !important;
}

.nav-link.active {
  background-color: #0d6efd !important ;
}

.card {
  background-color: #363636 !important;
}

.display {
  max-height: 3rem !important;
  height: 3rem !important;
  background-color: #363636 !important;
  color: white !important;
  text-align: right;
  border: 1px solid #363636 !important;
  font-family: "Calculator";
  font-size: 50px !important;
}

.btn-action {
  background-color: #212121 !important;
  color: white !important;
}

@media only screen and (max-width: 767px) {
  .calculator-principal {
    width: 90%;
  }
}
</style>
