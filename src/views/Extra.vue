<template>
  <div id="extra">
    <div class="number-section">
      <p class="heading-1">Why ExamSpace.com?</p>
      <p class="heading-2">Our Numbers Speak for Themselves</p>
      <!-- align-items-center justify-content-center -->

      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6 col-6">
          <div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Extra/img/users.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text">
                  Trusted by.
                </p>
                <p class="card-text"><strong>200,00,00+</strong> Users</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-6">
          <div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Extra/img/cloud-sign.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>439,34534,345+</strong>
                </p>
                <p class="card-text">Questions Attempted</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-6">
          <div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Extra/img/notebook.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>239,323,345+</strong>
                </p>
                <p class="card-text">Tests Attempted</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-6">
          <div>
            <div class="card">
              <img
                class="card-img-top"
                src="../assets/Extra/img/play_icon.png"
                alt="Card image cap"
              />
              <div class="card-body">
                <p class="card-text">
                  <strong>439,34534,345+</strong>
                </p>
                <p class="card-text">Videos Watched</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TextBook></TextBook>
    <StudentQuotes></StudentQuotes>
  </div>
</template>

<script>
import TextBook from '@/components/TextBook.vue'
import StudentQuotes from '@/components/StudentQuotes.vue'
export default {
  name: 'Extra',
  components: {
    TextBook,
    StudentQuotes
  }
}
</script>

<style lang="scss" scoped>
.number-section {
  .card {
    // height: 150px;
    width: 250px;
    border: none;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    margin: 0 auto;
    margin-top: 1rem;
    @media (max-width: 768px) {
      width: 200px;
    }
    img {
      width: auto;
      height: 60px;
      margin: 0 auto;
      padding-top: 15px;
    }
    .card-text {
      font-size: 1em;
      margin: 0 0;
      text-align: center;
      @media (max-width: 768px) {
        font-size: 0.8em;
      }
    }
  }
  .heading-1 {
    margin-left: 1.5rem;
    margin-bottom: 0;
    color: rgba(0, 0, 0, 0.6);
  }
  .heading-2 {
    margin-left: 1.5rem;
    margin-bottom: 0;
    font-size: 1.2em;
    color: rgb(23, 93, 197);
  }
}
</style>
