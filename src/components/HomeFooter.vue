<template>
  <div id="home_footer">
    <div class="info-section">
      <b-row>
        <div class="col-md-2 padding-0">
          <div class="info-header">
            <h6>OFFICE</h6>
          </div>
          <p>Naya Paltan, Dhaka - 1000, Bangladeshsssssssss section</p>
        </div>
        <div class="col-md-2 padding-0">
          <div class="info-header">
            <h6>NEWSLETTER</h6>
          </div>
          <p>
            MasterClass offers online classes created for students of all skill
            levels. Our instructions are best in the world.
          </p>
        </div>
        <div class="col-md-3 padding-0">
          <div class="info-header">
            <h6>RECENT PROJECTS</h6>
          </div>
          <ul>
            <li>
              <a href>Test Series</a>
            </li>
            <li>
              <a href>Attempted Tests</a>
            </li>
            <li>
              <a href>Quizzes</a>
            </li>
            <li>
              <a href>Exam</a>
            </li>
            <li>
              <a href>Practice</a>
            </li>
            <li>
              <a href>Free Live Classes</a>
            </li>
            <li>
              <a href>Saved Questinos</a>
            </li>
            <li>
              <a href>Reffer and Earn</a>
            </li>
            <li>
              <a href>Promo</a>
            </li>
            <li>
              <a href>GK & Current Affairs</a>
            </li>
            <li>
              <a href>Teacher Training Program</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 padding-0">
          <div class="info-header">
            <h6>SOCIAL CONNECTION</h6>
          </div>
          <div class="inline-elements">
            <i
              class="fa fa-facebook-official"
              aria-hidden="true"
              style="color: rgb(26, 26, 138)"
            ></i>
            <p>Facebook</p>
          </div>
          <div class="inline-elements">
            <i
              class="fa fa-whatsapp"
              aria-hidden="true"
              style="color: green;"
            ></i>
            <p>WhatsApp</p>
          </div>
          <div class="inline-elements">
            <i
              class="fa fa-twitter"
              aria-hidden="true"
              style="color: rgba(1, 86, 156, 0.904);"
            ></i>
            <p>Twitter</p>
          </div>
          <div class="inline-elements">
            <i
              class="fa fa-instagram"
              aria-hidden="true"
              style="color: red;"
            ></i>
            <p>Instagram</p>
          </div>
        </div>
        <div class="col-md-2 padding-0">
          <div class="info-header">
            <h6>CONTACT</h6>
          </div>
          <div class="inline-elements">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <a href="tel:+880-1521-2373">+880-1521-2373</a>
          </div>
          <div class="inline-elements">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <a href="tel:+880-1521-4853">+880-1521-4853</a>
          </div>

          <div class="inline-elements">
            <i class="fa fa-envelope-o" aria-hidden="true"></i>
            <a href="mailto:admin@admin.com">admin@admin.com</a>
          </div>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="scss" scoped>
#home_footer {
  padding: 1rem 2rem;
}

.info-section {
  .info-header {
    border-color: rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    h6 {
      margin: 5px 0;
      color: #020266;
    }
  }
  p {
    margin-right: 1rem;
    overflow: hidden;
    font-size: 8pt;
    color: rgba(0, 0, 0, 0.65);
  }
  ul li {
    color: rgba(0, 0, 0, 0.65);
    list-style-type: circle;
    line-height: 1;
    a {
      color: rgba(0, 0, 0, 0.65);
      text-decoration: none;
      cursor: pointer;
      font-size: 8pt;
      &:hover {
        color: rgba(0, 0, 0, 0.85);
      }
    }
  }
}

.inline-elements {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  p {
    padding-left: 1rem;
    margin: 0;
  }
  a {
    padding-left: 0.2rem;
    font-size: 8pt;
    color: rgba(0, 0, 0, 0.65);
    text-decoration: none;
  }
}

.card {
  border-radius: 1rem;
  border: none;
  background-image: linear-gradient(
    180deg,
    #a9ddf3 0%,
    rgba(255, 255, 255, 1) 50%
  );
  .card-img-top {
    width: 4rem;
    margin-bottom: -6px;
  }
  .card-head {
    text-align: center;
  }
  .card-text {
    margin: 0;
  }
  .card-footer-text {
    margin: 1rem 0;
  }
  .card-body {
    h5,
    a {
      text-align: center;
      font-size: 0.9em;
    }
    p {
      font-size: 0.7em;
    }
    a {
      border-radius: 1rem;
      margin-bottom: -8px;
      display: block;
    }
  }
}
.padding-0 {
  padding-left: 0;
  padding-right: 0;
  @media (max-width: 576px) {
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
