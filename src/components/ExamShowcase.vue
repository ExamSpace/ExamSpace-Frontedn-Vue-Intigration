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
              <h4 class="card-title">Content Marketing</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
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
              <h4 class="card-title">Social Media Marketing</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
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
              <h4 class="card-title">Brand & Logo Design</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
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
              <h4 class="card-title">Social Media Advertising</h4>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
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
