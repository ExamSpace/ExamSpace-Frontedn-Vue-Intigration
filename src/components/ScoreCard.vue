<template>
  <div id="score_card">
    <div class="score-card">
      <h5>Your Mark Sheet</h5>
      <div class="summary-title">Total Marks: 100 Total Obtained: 0 (0%)</div>
      <b-container>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Subject</th>
              <th scope="col">Total Questions</th>
              <th scope="col">Correct</th>
              <th scope="col">Wrong</th>
              <th scope="col">Mark Obtained</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Bangla</th>
              <td>25</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">English</th>
              <td>25</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Mathematics</th>
              <td>25</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <th scope="row">Total</th>
              <td>75</td>
              <td>0</td>
              <td>0</td>
              <td>0(0%)</td>
            </tr>
          </tbody>
        </table>
      </b-container>
      <div class="summary">
        <div class="summary-body">
          <p>Position : 4</p>
          <p>Marks Obtained : 0</p>
          <p>Height Marks : 45.98</p>
          <p>Total Students : 8</p>
        </div>
        <b-button block variant="primary"
          >View All Questions and Answers</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreCard'
}
</script>

<style lang="scss" scoped>
$primary_color: rgb(0, 22, 121);

.score-card {
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  h5 {
    text-align: center;
  }
  .summary-title {
    color: $primary_color;
    text-align: center;
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    padding: 0.25rem 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.25);
    font-weight: 600;
  }
  .summary {
    display: inline-block;
    position: relative;
    left: 50%;
    transform: translate(-50%);

    .summary-body {
      background-color: rgba(201, 201, 201, 0.1);
      padding: 1rem 1rem;
      border-radius: 8px;
      p {
        margin: 0;
      }
    }
  }
}
</style>
