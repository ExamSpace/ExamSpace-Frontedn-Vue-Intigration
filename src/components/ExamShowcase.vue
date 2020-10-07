<template>
  <div id="exam_showcase">
    <div class="heading-div">
      <h3 class="showcase-heading">Exam showcase</h3>
      <h3 class="service-heading">Service</h3>
    </div>
    <b-row>
      <b-col md="6">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class
                src="../assets/ExamShowcase/img/card1.png"
                alt="Card image cap"
                style="width: 100px;"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">General Knowledge</h4>
              <p class="card-text">
                You will find out all the "General Knowledge" exams that is
                available in our site. It will always be updated from time to
                time. These exams are essential to prove your IQ. Please try to
                attend them all.
              </p>
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
      </b-col>
      <div class="col-md-6">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class
                src="../assets/ExamShowcase/img/card2.png"
                alt="Card image cap"
                style="width: 100px;"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">BCS</h4>
              <p class="card-text">
                Here, you will find all the exams releated to the past BSC and
                even the future BCS exams that might appear. It will cover up
                all the topics needed for you to pass your exams. So, make use
                of this opportunity and sit for the exam now.
              </p>
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </b-row>

    <b-row>
      <div class="col-md-6">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class
                src="../assets/ExamShowcase/img/card3.png"
                alt="Card image cap"
                style="width: 100px;"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">Admission Tests</h4>
              <p class="card-text">
                So, when you need to admit for a specific School, College or
                University, then this is the right place for you to give the
                exam and see your scores. You could check your capability if it
                is a perfect score to join in or not. You can try multiple times
                to get to perfection. Admission Tests will help you build up
                your futre.
              </p>
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card">
          <div class="card-horizontal">
            <div class="img-square-wrapper">
              <img
                class
                src="../assets/ExamShowcase/img/card4.png"
                alt="Card image cap"
                style="width: 100px;"
              />
            </div>
            <div class="card-body">
              <h4 class="card-title">Others</h4>
              <p class="card-text">
                We also give you an opportunity to sit for exams that will allow
                you to measure your strength and weakness you consist of so how
                about if you need to test more of your brain's capability then
                check out these "Other" exams too.
              </p>
            </div>
          </div>
          <div class="card-footer"></div>
        </div>
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'ExamShowCase'
}
</script>

<style scoped>
#exam_showcase {
  padding: 1rem 1rem;
}
.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}

.card {
  border-top: none;
  border-right: none;
}

.card-footer {
  opacity: 0%;
}

.showcase-heading {
  color: #020266;
  border-bottom: 10px solid red;
  border-left-width: 0;
  border-right-width: 0;
  border-image: linear-gradient(to right, #040467, white) 1 stretch;
}
.service-heading {
  color: black;
  text-align: center;
}
.img-square-wrapper img {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-left: 1rem;
}
</style>
