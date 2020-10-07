<template>
  <div id="circular_progress_bar">
    <section id="skills">
      <div class="container">
        <b-row>
          <div class="circles text-center"></div>
          <b-col cols="3">
            <div class="first circle">
              <strong></strong>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="second circle">
              <strong></strong>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="third circle">
              <strong></strong>
            </div>
          </b-col>
          <b-col cols="3">
            <div class="forth circle">
              <strong></strong>
            </div>
          </b-col>
        </b-row>
      </div>
    </section>
  </div>
</template>

<script>
import $ from 'jquery'
import 'jquery-circle-progress'
export default {
  name: 'CircularProgressBar',
  mounted: function() {
    // First Circle
    $('.first.circle')
      .circleProgress({
        value: 0.25,
        fill: {
          gradient: ['#0266FF']
        }
      })
      .on('circle-animation-progress', function(event, progress) {
        $(this)
          .find('strong')
          .html(parseInt(25 * progress) + '%')
      })

    // Second Circle
    $('.second.circle')
      .circleProgress({
        value: 0.5,
        fill: {
          gradient: ['#30D2D6']
        }
      })
      .on('circle-animation-progress', function(event, progress) {
        $(this)
          .find('strong')
          .html(parseInt(50 * progress) + '%')
      })

    // Third Circle
    $('.third.circle')
      .circleProgress({
        value: 0.65,
        fill: {
          gradient: ['#24395B']
        }
      })
      .on('circle-animation-progress', function(event, progress) {
        $(this)
          .find('strong')
          .html(parseInt(65 * progress) + '%')
      })

    // Fourth Circle
    $('.forth.circle')
      .circleProgress({
        value: 0.75,
        fill: {
          gradient: ['#4988A6']
        }
      })
      .on('circle-animation-progress', function(event, progress) {
        $(this)
          .find('strong')
          .html(parseInt(75 * progress) + '%')
      })
  }
}
</script>

<style lang="scss" scoped>
#skills {
  margin: 1rem 0;
}

.circles {
  color: #d9534f;
}
.circle {
  position: relative;
  text-align: center;
}

.circle canvas {
  vertical-align: top;
  width: 120px;
  height: 120px;
}

.circle strong {
  position: absolute;
  left: 30%;
  top: 30%;
  text-align: center;
  font-size: 30px;
  @media (min-width: 786px) {
    left: 40%;
    top: 30%;
  }
}
.h4 {
  font-size: 18px;
  text-transform: uppercase;
}
</style>
