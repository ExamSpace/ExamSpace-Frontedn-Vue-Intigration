<template>
  <div id="promo_banner" class="promo-banner">
    <input type="checkbox" id="nav-check" />
    <div class="btn-nav">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="links-nav">
      <ul>
        <li>
          <b-link>
            <span> <b-icon-phone></b-icon-phone> </span> Download our
            app</b-link
          >
        </li>
        <li><b-link>Exam Calender</b-link></li>
        <li><b-link>GK & Current Affairs</b-link></li>
        <li><b-link to="/blog">Blog</b-link></li>
        <li><b-link to="/blog">Videos</b-link></li>
        <li>
          <b-link to="/blog"
            >Refer & Earn
            <span class="badge">New</span>
          </b-link>
        </li>
        <li><b-link to="/blog">Promo</b-link></li>
        <li><b-link to="/blog">Teacher Training Program</b-link></li>
        <li>
          <b-button pill variant="danger" size="sm">We are hiring</b-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PromoBanner'
}
</script>

<style lang="scss" scoped>
.promo-banner {
  background-color: rgb(25, 8, 121);
  margin: 0.25rem 0;
  padding: 0.3rem 0;
  padding-right: 1.5rem;
  white-space: nowrap;
  overflow-x: scroll;
  transition: all 0.3s ease-in;
  #nav-check {
    display: none;
  }
  .btn-nav {
    display: none;
  }
  .links-nav {
    transition: all 0.3s ease-in;
  }
  @media (max-width: 920px) {
    .btn-nav {
      display: inline-block;
      float: right;
    }
    .btn-nav > label {
      display: inline-block;
      margin-bottom: 0;
      margin-top: 0.3rem;
    }
    .btn-nav > label > span {
      display: block;
      width: 25px;
      height: 10px;
      border-top: 2px solid #eee;
    }
    .btn-nav > label:hover,
    #nav-check:checked ~ .btn-nav > label {
      background-color: rgba(0, 0, 0, 0.3);
    }
    #nav-check:not(:checked) ~ .links-nav {
      height: 0px;
      display: none;
      transition: all 0.3s ease-in;
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    list-style-type: none;
    display: inline;
    @media (max-width: 920px) {
      display: block;
      padding-left: 0rem;
    }
    li {
      display: inline;
      padding: 0 1rem;
      @media (max-width: 920px) {
        display: block;
      }
      a {
        color: white;
        text-decoration: none;

        &:hover {
          color: rgb(214, 214, 214);
        }
      }
    }
  }
}
.badge {
  background-color: red;
}
</style>
