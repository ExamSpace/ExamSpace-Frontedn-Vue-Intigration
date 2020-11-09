<template>
  <div id="login" class="login">
    <div class="container">
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
            <div class="limiter m-t-200">
              <div class="container-login">
                <div class="wrap-login p-l-50 p-r-50 p-t-77 p-b-30">
                  <h1>Welcome to ExamSpace!!</h1>
                  <span>Go to</span><router-link to="/">HomePage</router-link>
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
  name: 'EmailVerification'
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
