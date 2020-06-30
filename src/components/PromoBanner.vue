<template>
  <div id="promo_banner" class="promo-banner">
    <ul>
      <li>
        <b-link>
          <span> <b-icon-phone></b-icon-phone> </span> Download our app</b-link
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
  padding: 0.1rem 0;
  ul {
    list-style-type: none;
    display: inline;
    li {
      display: inline;
      padding: 0 1rem;
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
