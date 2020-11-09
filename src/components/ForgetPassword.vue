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
                  data-validate="Email is required"
                >
                  <input
                    class="input mb-3"
                    type="email"
                    name="user"
                    placeholder="Email"
                    v-model="email"
                  />
                  <div class="container mb-2">
                    <router-link to="/login">Go back</router-link>
                  </div>
                  <div class="container-login-form-btn m-t-2">
                    <button class="login-form-btn1" type="submit">
                      Send
                    </button>
                  </div>
                  <div>
                    <p class="mt-3 text-danger font-weight-bold">
                      *Link will be sent to your Email
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
export default {
  name: 'ForgetPassword'
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
