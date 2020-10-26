<template>
  <div id="exam_terms_and_condition">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="card border-0">
            <div class="card-body">
              <h5 class="card-title">Declaration</h5>
              <p class="card-text">
                The following questionnaire has been prepared by EduHive
                Originals. All rights regarding question quality, answer,
                corrections and related contents are reserved by EduHive
                Originals.
              </p>
              <div class="border-bottom border-danger"></div>
              <h5 class="card-title mt-3">Rules</h5>
              <p class="card-text">
                <span class="rounded-circle bg-primary p-1 span-2">1</span>
                Don't refresh or close the browser.
                <span class="rounded-circle bg-primary p-1 span-2">2</span> You
                can take this exam for one time only.
              </p>
              <p class="card-text border-top border-danger">
                <span class="span">Subject(s):</span> Combined
              </p>
              <p class="card-text">
                <span class="span">100</span> Questions,
                <span class="span">100</span> Marks,
                <span class="span">60</span> Minutes
              </p>
              <p class="card-text">
                Negative Marks Per Wrong Answer:
                <span class="span">0</span>, Multiple Answers Allowed:
                <span class="span">No</span>
              </p>
              <div class="border-top border-danger btn-holder">
                <b-button
                  squared
                  variant="primary"
                  @click="$emit('startExamPressed')"
                  >I Understand, Start Exam</b-button
                >
                <b-button
                  squared
                  variant="danger"
                  style="margin-left: 1rem;"
                  @click="$emit('cancel')"
                  >Cancel</b-button
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-4 mt-5">
          <div class="card card-2">
            <div class="card-body text-center">
              <h5>Position: N/A</h5>
              <h5>Mark Obtained: N/A</h5>
              <h5>Highest Mark: 70</h5>
              <h5>Total Students: 43</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExamTermsAndCondition'
}
</script>

<style lang="scss" scoped>
.span {
  color: red;
}
.span-2 {
  color: white;
  width: 30px;
  height: 30px;
  display: inline-block;
  text-align: center;
}
.card-2 {
  background-color: #f2f2f2;
  color: #757575;
}
.card-2 {
  width: 300px;
  margin: 0 auto;
}
.btn-holder {
  padding: 1rem 0;
}
</style>
