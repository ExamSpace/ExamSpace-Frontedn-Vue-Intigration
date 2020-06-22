<template>
  <div id="nav">
    <div class="top-nav">
      <a href>
        <img src="../assets/NavBar/img/insta.png" width="30px" alt="insta" />
      </a>
      <a href>
        <img src="../assets/NavBar/img/fb.png" width="30px" alt="insta" />
      </a>
      <a href>
        <img src="../assets/NavBar/img/whatsapp.png" width="30px" alt="insta" />
      </a>
      <a href>
        <img src="../assets/NavBar/img/twitter.png" width="30px" alt="insta" />
      </a>
      <b-button size="sm" class="nav-btn" variant="secondary" to="/login">Log In</b-button>
      <b-button size="sm" class="nav-btn" variant="primary">SignUp</b-button>
    </div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="navbar-brand">
        <router-link to="/">
          <img src="../assets/NavBar/img/logo.png" height="60px" alt="ExamSpace" />
        </router-link>
      </div>
      <div></div>
      <b-navbar-toggle target="nav-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up" style="color: rgb(0, 37, 107);"></b-icon>
          <b-icon v-else icon="chevron-bar-down" style="color: rgb(0, 37, 107);"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>-->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Exam" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href>Courses</b-nav-item>
          <b-nav-item href>Test Series</b-nav-item>
          <b-nav-item href>Practice</b-nav-item>
          <b-nav-item href>Pass</b-nav-item>
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          </b-nav-form>

          <b-nav-item-dropdown text="English" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form>
            <b-button size="sm" class="my-2 my-sm-0 nav-btn" variant="secondary" href="/login">Login</b-button>
            <b-button size="sm" class="my-2 my-sm-0 nav-btn" variant="primary">SignUp</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: white important;
  .nav-btn {
    display: block;
    margin: 0 0.3rem;
    @media (max-width: 786px) {
      display: none;
    }
  }
  .btn-primary {
    background-color: rgb(0, 37, 107);
    border-color: rgb(0, 37, 107);
  }
  .navbar-brand {
    position: relative;
    margin-top: 30px;
    img {
      position: absolute;
      bottom: 0;
    }
  }
}
.top-nav {
  display: flex;
  justify-content: flex-end;
  padding: 0 1.2rem;
  margin-top: 5px;
  background-color: #f8f9fa !important;

  .nav-btn {
    display: block;
    margin: 0 0.3rem;
    @media (min-width: 786px) {
      display: none;
    }
  }
  .btn-primary {
    background-color: rgb(0, 37, 107);
    border-color: rgb(0, 37, 107);
  }

  img {
    margin: 0 2px;
  }
}

button:focus {
  outline: 0 !important;
}
</style>