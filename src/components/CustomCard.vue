<template>
  <div id="custom_card">
    <b-row>
      <b-col md="6">
        <div class="card-holder">
          <b-card
            title="Practice"
            class="custom-card"
            :style="{
              'background-image':
                'url(' +
                require('../assets/Common/img/practice_card_background.png') +
                ')'
            }"
          >
            <b-card-text>Practice best questions for free.</b-card-text>
            <b-card-text>
              <a href class="custom-card-link">Explore Practice</a>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
      <b-col md="6">
        <div class="card-holder">
          <b-card
            title="Exam"
            class="custom-card"
            :style="{
              'background-image':
                'url(' +
                require('../assets/Common/img/exam_card_background.png') +
                ')'
            }"
          >
            <b-card-text>
              Explore and start
              <br />preparing for your Exam.
            </b-card-text>
            <b-card-text>
              <a href class="custom-card-link">Explore Exam</a>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'CustomCard'
}
</script>

<style lang="scss" scoped>
#custom_card {
  padding: 1rem 1rem;
}

.card-holder {
  margin: 0.5rem 0;
}
.custom-card {
  background-color: #e5e5ef;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top right 10px;
  margin: 0 auto;
  height: 155px;
  width: 90%;
  overflow: hidden;
  .custom-card-link {
    position: absolute;
    bottom: 0.5rem;
    text-decoration: none;
    color: rgba(0, 1, 70, 0.733);
    &:hover {
      color: rgba(0, 0, 0, 0.733);
    }
  }

  .card-title {
    color: rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 786px) {
    background-size: 140px;
    background-position: right 30px;
  }
}
</style>
