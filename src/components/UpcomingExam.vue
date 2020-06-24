<template>
  <div id="upcoming_exam">
    <div class="upcoming_exam_section">
      <h4>Upcoming and Popular Exams</h4>
      <div class="upcoming_exam_wrapper">
        <div class="row">
          <b-col
            cols="3"
            sm="3"
            md="3"
            lg="3"
            xl="3"
            v-for="index in 4"
            :key="index"
          >
            <div class="content-card">
              <img src="../assets/HomeFooter/img/upcoming_exam.png" alt />
              <p>RRB NTPC</p>
              <p></p>
            </div>
          </b-col>
        </div>
        <div class="row">
          <b-col
            cols="6"
            sm="6"
            md="4"
            lg="2"
            xl="2"
            v-for="index in 6"
            :key="index"
          >
            <div class="card">
              <div class="card-head">
                <img
                  src="../assets/HomeFooter/img/Group.png"
                  class="card-img-top pt-1"
                  alt
                />
              </div>
              <div class="card-body">
                <h5 class="card-title mb-1">Agrani Bank Limited</h5>
                <router-link to="/exam" class="btn btn-primary"
                  >Click me!</router-link
                >
                <p class="card-text mt-4">Agrani Bank Limited</p>
                <p class="card-text">Recruitment Test</p>
                <p class="card-text">Exams: 1 Version: Bangla & English</p>
                <p class="card-footer-text">by EduHive Originals</p>
              </div>
            </div>
          </b-col>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpcomingExam'
}
</script>

<style lang="scss" scoped>
#upcoming_exam {
  padding: 1rem 2rem;
}
.upcoming_exam_section {
  .upcoming_exam_wrapper {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .content-card {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      margin: 20px 0;
    }
    .content-card img {
      width: 80px;
    }
  }
  h4 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-bottom: 0;
    color: #020266;
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
