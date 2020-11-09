<template>
  <div id="registration" class="login">
    <div class="container">
      <div class="row">
        <div class="col col-sm-5 col-md-4 col-lg-6 d-none d-sm-block">
          <div class="container-fluid container-img">
            <img src="../assets/Login/img/Logo.png" alt />
            <img src="../assets/Login/img/Computer-icon.png" alt />
          </div>
        </div>

        <div class="col col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">
          <div class="limiter">
            <div class="container-login">
              <div class="wrap-login p-l-50 p-r-50 p-t-77 p-b-30">
                <form
                  class="login-form validate-form"
                  @submit.prevent="registerUser"
                >
                  <span class="login-form-title p-b-55">Welcome</span>
                  <div
                    class="wrap-input validate-input m-b-16"
                    data-validate="Username is required"
                  >
                    <input
                      class="input"
                      type="text"
                      name="user"
                      placeholder="Username"
                      v-model="username"
                    />
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                      <b-icon-person-fill></b-icon-person-fill>
                    </span>
                  </div>
                  <div
                    class="wrap-input validate-input m-b-16"
                    data-validate="Email is required"
                  >
                    <input
                      class="input"
                      type="email"
                      name="user"
                      placeholder="Email"
                      v-model="email"
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

                  <div
                    class="wrap-input validate-input m-b-16"
                    data-validate="Password is required"
                  >
                    <input
                      class="input"
                      type="password"
                      name="pass"
                      placeholder="Confirm Password"
                      v-model="repeat"
                    />
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                      <b-icon-lock></b-icon-lock>
                    </span>
                  </div>
                  <div
                    class="wrap-input validate-input m-b-16"
                    data-validate="Mobile Is Required"
                  ></div>
                  <div class="container-login-form-btn m-t-2">
                    <button class="login-form-btn1" type="submit">
                      Signup
                    </button>
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
  name: 'Register',
  data() {
    return {
      username: '',
      password: '',
      email: '',
      repeat: ''
    }
  },
  methods: {
    registerUser() {
      this.$store
        .dispatch('registerUser', {
          username: this.username,
          password: this.password,
          email: this.email,
          repeat: this.repeat
        })
        .then(() => {
          this.$alert('Success!')
          this.$router.push('/login')
        })
        .catch(err => {
          console.log(err)
          this.$alert('Try Again!')
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
@import '../assets/Login/style/style.css';
@import '../assets/Login/style/util.css';
</style>
