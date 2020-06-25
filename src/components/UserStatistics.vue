<template>
  <div id="user_statistics">
    <b-row>
      <b-col md="9">
        <div class="chart-holder-outer">
          <div class="chart-holder">
            <div class="pane"><line-chart></line-chart></div>
            <div class="pane"><polar-chart></polar-chart></div>
            <div class="pane"><bar-chart></bar-chart></div>
          </div>
        </div>
        <div class="chart-holder-outer">
          <div class="chart-holder">
            <div class="pane"><line-chart></line-chart></div>
            <div class="pane"><multiline-chart></multiline-chart></div>
            <div class="pane"><bar-chart></bar-chart></div>
          </div>
        </div>
      </b-col>
      <b-col md="3">
        <div class="calender-wrapper">
          <b-calendar locale="en-US"></b-calendar>
        </div>
        <div class="card-content-wrapper">
          <p class="title">Learning Corner</p>
          <div class="card-content">
            <a href="">
              <span><b-icon-kanban-fill></b-icon-kanban-fill> </span> Quizzes
            </a>
            <a href="">
              <span><b-icon-layout-wtf></b-icon-layout-wtf> </span> Daily GK &
              Current Affairs
            </a>
            <a href="">
              <span> <b-icon-play></b-icon-play> </span> Videos
            </a>
            <a href="">
              <span> <b-icon-bell-fill></b-icon-bell-fill> </span> Exams
              Notifications
            </a>
          </div>
        </div>
        <div class="card-content-wrapper">
          <p class="title">Your Vault</p>
          <div class="card-content">
            <a href="">
              <span><b-icon-kanban-fill></b-icon-kanban-fill> </span> Saved
              Questoins
            </a>
            <a href="">
              <span><b-icon-layout-wtf></b-icon-layout-wtf> </span> Saved
              Articles
            </a>
            <a href="">
              <span> <b-icon-play></b-icon-play> </span> Reported Questoins
            </a>
          </div>
        </div>
      </b-col>
      <b-col md="9">
        <div class="test-wrapper">
          <p class="title">Suggested Free Tests</p>
          <div class="test">
            <b-row>
              <b-col cols="9" md="10">
                <div class="test-content">
                  <p>SBI PO 1st June 2020 Shifty</p>
                  <p class="footer-text">
                    <span>
                      <b-icon-question-circle></b-icon-question-circle
                    ></span>
                    100 Questions
                    <span><b-icon-list></b-icon-list></span> 100 Marks
                    <span><b-icon-clock-fill></b-icon-clock-fill></span> 60
                    Minutes
                  </p>
                </div>
              </b-col>
              <b-col cols="3" md="2">
                <div class="btn-holder">
                  <b-button size="sm" variant="primary">Start Now</b-button>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="test">
            <b-row>
              <b-col cols="9" md="10">
                <div class="test-content">
                  <p>SBI PO 1st June 2020 Shifty</p>
                  <p class="footer-text">
                    <span>
                      <b-icon-question-circle></b-icon-question-circle
                    ></span>
                    100 Questions
                    <span><b-icon-list></b-icon-list></span> 100 Marks
                    <span><b-icon-clock-fill></b-icon-clock-fill></span> 60
                    Minutes
                  </p>
                </div>
              </b-col>
              <b-col cols="3" md="2">
                <div class="btn-holder">
                  <b-button size="sm" variant="primary">Start Now</b-button>
                </div>
              </b-col>
            </b-row>
          </div>
          <div class="test">
            <b-row>
              <b-col cols="9" md="10">
                <div class="test-content">
                  <p>SBI PO 1st June 2020 Shifty</p>
                  <p class="footer-text">
                    <span>
                      <b-icon-question-circle></b-icon-question-circle
                    ></span>
                    100 Questions
                    <span><b-icon-list></b-icon-list></span> 100 Marks
                    <span><b-icon-clock-fill></b-icon-clock-fill></span> 60
                    Minutes
                  </p>
                </div>
              </b-col>
              <b-col cols="3" md="2">
                <div class="btn-holder">
                  <b-button size="sm" variant="primary">Start Now</b-button>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LineChart from './LineChart'
import PolarChart from './PolarChart'
import BarChart from './BarChart'
import MultilineChart from './MultilineChart'
export default {
  name: 'UserStatistics',
  components: {
    LineChart,
    PolarChart,
    BarChart,
    MultilineChart
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#user_statistics {
  padding: 1rem 1rem;
}

.test-wrapper {
  background-color: rgba(74, 187, 108, 0.2);
  padding: 1rem 1rem;

  .title {
    font-weight: bold;
    font-size: 1.2em;
  }

  .test {
    background-color: white;
    border-radius: 8px;
    margin-bottom: 0.25rem;
    .test-content {
      padding: 0.25rem 1rem;
      p {
        margin: 0;
      }
      .footer-text {
        margin: 0;
        font-size: 0.7em;
        color: rgba(0, 0, 0, 0.4);
      }
    }
    .btn-holder {
      background-color: green;
      position: absolute;
      top: 50%;

      transform: translateY(-50%);
    }
  }
}

.chart-holder-outer {
  width: 100%;
  background-color: rgb(10, 10, 134);
  padding: 0.5rem 0.5rem;
  margin: 1rem 0;
  .chart-holder {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 8px;
    .pane {
      width: 33%;
      display: inline-block;
      padding: 2rem 2rem;
      @media (max-width: 786px) {
        padding: 0 0;
      }
    }
  }
}

.card-content-wrapper {
  background-color: rgb(10, 10, 134);
  margin: 1rem 0;
  padding: 1rem 1rem;
  border-radius: 8px;

  .title {
    font-weight: bold;
    color: white;
  }
  .card-content {
    background-color: white;
    border-radius: 8px;
    padding: 0.25rem 1rem;
    a {
      color: black;
      display: block;
      font-size: 0.9em;
      text-decoration: none;
      margin-bottom: 0.3rem;
    }
  }
}
.calender-wrapper {
  text-align: center;
}
</style>
