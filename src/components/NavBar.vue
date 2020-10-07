<template>
  <div id="nav">
    <div class="top-nav">
      <template v-if="!loggedIn">
        <a href>
          <img src="../assets/NavBar/img/insta.png" width="30px" alt="insta" />
        </a>
        <a href>
          <img src="../assets/NavBar/img/fb.png" width="30px" alt="insta" />
        </a>
        <a href>
          <img
            src="../assets/NavBar/img/whatsapp.png"
            width="30px"
            alt="insta"
          />
        </a>
        <a href>
          <img
            src="../assets/NavBar/img/twitter.png"
            width="30px"
            alt="insta"
          />
        </a>
        <b-button size="sm" class="nav-btn" variant="secondary" to="/login"
          >Log In</b-button
        >
        <b-button size="sm" class="nav-btn" variant="primary" to="/register"
          >SignUp</b-button
        >
      </template>
      <template v-else>
        <p>Hello! {{ loggedInUserName }}</p>
        <b-dropdown
          size="sm"
          variant="link"
          toggle-class="text-decoration-none"
          dropleft
          no-caret
        >
          <template v-slot:button-content>
            <img
              class="profile-img"
              src="../assets/NavBar/img/profile.jpg"
              alt="profile"
            />
          </template>
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item v-if="accessToken != null"
            ><router-link :to="{ name: 'Logout' }"
              >Logout</router-link
            ></b-dropdown-item
          >
        </b-dropdown>
      </template>
    </div>

    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="navbar-brand">
        <router-link to="/">
          <img
            src="../assets/NavBar/img/logo.png"
            height="60px"
            alt="ExamSpace"
          />
        </router-link>
      </div>
      <div></div>
      <b-navbar-toggle target="nav-collapse">
        <template v-slot:default="{ expanded }">
          <b-icon
            v-if="expanded"
            icon="chevron-bar-up"
            style="color: rgb(0, 37, 107);"
          ></b-icon>
          <b-icon
            v-else
            icon="chevron-bar-down"
            style="color: rgb(0, 37, 107);"
          ></b-icon>
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
          <b-nav-item href disabled="">Test Series</b-nav-item>
          <b-nav-item href disabled="">Practice</b-nav-item>
          <b-nav-item href disabled="">Pass</b-nav-item>
          <b-nav-item to="/leaderboard">Leaderboard</b-nav-item>
          <b-nav-item to="/extra">Extras</b-nav-item>
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
          </b-nav-form>

          <b-nav-item-dropdown text="English" right disabled="">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form v-if="!loggedIn">
            <b-button
              size="sm"
              class="my-2 my-sm-0 nav-btn"
              variant="secondary"
              to="/login"
              >Login</b-button
            >
            <b-button
              size="sm"
              class="my-2 my-sm-0 nav-btn"
              variant="primary"
              to="/register"
              >SignUp</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <PromoBanner v-if="!loggedIn"></PromoBanner>
  </div>
</template>

<script>
import PromoBanner from '@/components/PromoBanner.vue'
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  components: {
    PromoBanner
  },
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    loggedInUserName() {
      console.log(this.$store.state.username)

      return this.$store.state.username
    },
    ...mapState(['accessToken'])
  }
}
</script>

<style lang="scss" scoped>
#nav {
  background-color: #f8f9fa;
}
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
  .profile-img {
    border-radius: 2px;
    opacity: 1;
    width: 30px;
    height: 30px;
  }
  .profile-img {
    border-radius: 2px;
    width: 30px;
    height: 30px;
  }
  img {
    margin: 0 2px;
  }
  p {
    margin-top: 0.25rem;
    margin-right: 1rem;
    font-size: 1em;
    bottom: 0;
  }
}

button:focus {
  outline: 0 !important;
}
</style>
