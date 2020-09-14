<template>
  <div id="login" class="login">
    <div class="container">
      <div class="row">
        <div class="col col-sm-5 col-md-4 col-lg-6 d-none d-sm-block">
          <div class="container-fluid container-img">
            <router-link to="/">
              <img src="../assets/Login/img/Logo.png" alt />
            </router-link>
            <img src="../assets/Login/img/Computer-icon.png" alt />
          </div>
        </div>

        <div class="col col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
          <div class="limiter">
            <div class="container-login">
              <div class="wrap-login p-l-50 p-r-50 p-t-77 p-b-30">
                <form
                  class="login-form validate-form"
                  v-on:submit.prevent="login"
                >
                  <span class="login-form-title p-b-55">Welcome</span>
                  <p v-if="incorrectAuth" class="text-danger">
                    Incorrect username or password entered - please try again
                  </p>
                  <div
                    class="wrap-input validate-input m-b-16"
                    data-validate="Mobile or Username is required"
                  >
                    <input
                      class="input"
                      type="text"
                      name="user"
                      placeholder="Mobile or Username"
                      v-model="username"
                    />
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                      <b-icon-person-fill></b-icon-person-fill>
                    </span>
                  </div>

                  <div
                    class="wrap-input validate-input m-b-16"
                    data-validate="Password is required"
                  >
                    <input
                      class="input"
                      type="password"
                      name="pass"
                      placeholder="Password"
                      v-model="password"
                    />
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                      <b-icon-lock></b-icon-lock>
                    </span>
                  </div>
                  <div class="container">
                    <div class="row">
                      <div class="col s5 offset-s1 right-align">
                        <input
                          type="checkbox"
                          class="input-checkbox"
                          name
                          id="ckb1"
                        />
                        <label class="label-checkbox" for="ckb1"
                          >Remember me</label
                        >
                      </div>
                      <div class="col s5 offset-s1 left-align">
                        <a href=" ">Forgot Password?</a>
                      </div>
                    </div>
                  </div>

                  <div class="container-login-form-btn m-t-32">
                    <button class="login-form-btn">
                      Login
                    </button>
                  </div>

                  <div class="text-center w-full p-t-42 p-b-22">
                    <span class="txt1">Or</span>
                  </div>

                  <div class="container-login-form-btn m-t-8">
                    <router-link class="login-form-btn1" to="/register"
                      >Signup</router-link
                    >
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      incorrectAuth: false
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('userLogin', {
          username: this.username,
          password: this.password
        })
        .then(() => {
          //this.$store.commit('login', this.username)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
          this.incorrectAuth = true
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: url('../assets/Login/img/background.png') no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: Arial Regular, sans-serif;
  height: 100vh;
}
.login-form-btn1 {
  color: white;
}
@import '../assets/Login/style/style.css';
@import '../assets/Login/style/util.css';
</style>
