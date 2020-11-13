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
                <span class="login-form-title p-b-55">Welcome</span>
                <div
                  class="wrap-input validate-input m-b-16"
                  data-validate="Password is required"
                >
                  <input
                    class="input mb-3"
                    type="password"
                    name="user"
                    placeholder="Password"
                    v-model="password"
                  />
                  <input
                    class="input mb-3"
                    type="password"
                    name="user"
                    placeholder="Confirm Password"
                    v-model="re_password"
                  />
                  <div class="container-login-form-btn m-t-2">
                    <button
                      class="login-form-btn1"
                      type="submit"
                      @click="resetPassword"
                    >
                      Update Password
                    </button>
                  </div>
                  <div>
                    <p class="mt-3 text-danger font-weight-bold">
                      *Never Share your Password with anyone
                    </p>
                  </div>
                  <div>
                    <p class="mt-1 text-danger font-weight-bold">
                      *Password must have 8 characters
                    </p>
                  </div>
                  <div>
                    <p class="mt-1 text-danger font-weight-bold">
                      *Password must consist of both uppercase and lowercase
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from '../axios-api'
export default {
  name: 'ResetPassword',
  data() {
    return {
      token: '',
      password: '',
      re_password: ''
    }
  },
  methods: {
    resetPassword() {
      if (this.password == this.re_password) {
        getAPI
          .post('api/auth/password_reset/confirm/', {
            password: this.password,
            token: this.$route.query.token
          })
          .then(response => {
            this.$alert('Password successfully changed!')
          })
          .catch(err => {
            this.$alert('Try again!')
            console.log(err)
          })
      } else {
        this.$alert('Password does not match!')
      }
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
