<template>
  <div id="faq">
    <section class="examsection padding-lg">
      <div class="container">
        <div class="row heading heading-icon">
          <h2>Everything You Need For Your Exam Preparation</h2>
          <p>
            Online Courses, Practice Question Bank, Mock Test Series, Study
            Notes, Strattegy & Preparation Planes, Guidence & Mantoring and
            more...
          </p>
        </div>
        <!--          heading end-->
        <!--          card starts-->
        <ul class="row">
          <li class="col-12 col-md-6 col-lg-4">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure>
                <img
                  src="../assets/FAQ/img/select_pass.png"
                  class="img-responsive"
                  alt
                />
              </figure>
              <h3>
                <a href="#">SELECT PASS</a>
              </h3>
              <p>Select Test Pass</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure>
                <img
                  src="../assets/FAQ/img/choose_pass_validity.png"
                  class="img-responsive"
                  alt
                />
              </figure>
              <h3>
                <a href="#">CHOOSE PASS VALIDITY</a>
              </h3>
              <p>Select Pass validity best suited for your need</p>
            </div>
          </li>
          <li class="col-12 col-md-6 col-lg-4">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure>
                <img
                  src="../assets/FAQ/img/unlick_test.png"
                  class="img-responsive"
                  alt
                />
              </figure>
              <h3>
                <a href="#">UNLOCK TESTS</a>
              </h3>
              <p>
                After payment, you can access all the Tests covered under Test
                Pass
              </p>
            </div>
          </li>
        </ul>
        <!--        Card ends-->
        <!--          FAQ starts-->
        <div class="row">
          <div class="col-md-12">
            <div class="exam-faq">
              <h2>Frequently Asked Questions</h2>

              <p>What is Testbook Pass?</p>

              <p>
                Testbook Pass is a special membership that unlocks Test Series
                available on Testbook.
              </p>

              <a href="#">
                <h5>Explore All Exams</h5>
              </a>
            </div>
          </div>
        </div>
        <!--          FAQ ends-->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FAQ'
}
</script>

<style scoped>
#faq {
  padding: 1rem 1rem;
}
/*--------Heading----------*/
.row.heading h2 {
  color: #020266;
  font-size: 32.52px;
  line-height: 45px;
  font-family: sans-serif;
  font-weight: 700;
  text-align: center;
  margin: 4px 5px 5px 5px;
  padding-bottom: 10px;
  text-transform: uppercase;
}
.row.heading p {
  color: #b3b3b3;
  font-size: 16px;
  line-height: 20px;
  font-family: sans-serif;
  font-weight: 100;
  text-align: center;
  margin: 5px 4px 4px 6px;
  padding-bottom: 96px;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.heading.heading-icon {
  display: block;
}
.padding-lg {
  display: block;
  padding-top: 10px;
}
/*-----------card----------------*/
.examsection {
  background: #ebf6f1;
  font-family: 'Poppins', sans-serif;
}
.examsection .cnt-block {
  float: left;
  width: 100%;
  padding: 30px 20px;
  text-align: center;
  border: 1px solid #beb7e3;
  margin: 0 0 28px;
  transition: margin 1s ease, box-shadow 1s ease;
}
.examsection .cnt-block:hover {
  box-shadow: 0px 0px 40px black;
}
.examsection .cnt-block figure {
  width: 148px;
  height: 148px;
  border-radius: 100%;
  display: inline-block;
  margin-bottom: 15px;
}
.examsection .cnt-block img {
  width: 148px;
  height: 148px;
  border-radius: 100%;
}
.examsection .cnt-block h3 {
  color: #2a2a2a;
  font-size: 20px;
  font-weight: 500;
  padding: 6px 0;
  text-transform: uppercase;
}
.examsection .cnt-block h3 a {
  text-decoration: none;
  color: #020266;
}
.examsection .cnt-block h3 a:hover {
  color: #337ab7;
}
.examsection .cnt-block p {
  color: #999999;
  font-size: 15px;
  font-weight: 100;
  font-family: open sans;

  line-height: 24px;
  text-align: center;
  padding: 0px 20px;
}
/*--------FAQ------------*/

.exam-faq {
  font-size: 20px;
  font-family: arial regular;
}
.exam-faq a {
  text-decoration: none;
}
.exam-faq h2 {
  color: #020266;
  margin-bottom: 5px;
  margin-top: 35px;
}

.exam-faq h6 {
  font-size: 16px;
  font-family: arial regular;
  font-weight: 500;
  color: #000000;
  margin-top: -24px;
  margin-left: 50px;
  padding: 0px 1px;
  text-decoration: none;
}
.exam-faq h5 {
  font-size: 16px;
  font-family: arial regular;
  margin: 6px 0px 19px 0px;
  color: #020266;
  line-height: 54px;
}
</style>
