<template>
  <div id="leader_board" class="leader-board">
    <h1 class="title">Leader Board</h1>
    <CircularProgressBar></CircularProgressBar>

    <b-row>
      <b-col cols="6" sm="3">
        <div style="width: 80%">
          <line-chart></line-chart>
        </div>
      </b-col>
      <b-col cols="6" sm="3">
        <div style="width: 80%"><multiline-chart></multiline-chart></div>
      </b-col>
      <b-col cols="6" sm="3">
        <div style="width: 80%"><polar-chart></polar-chart></div>
      </b-col>
      <b-col cols="6" sm="3">
        <div style="width: 80%"><bar-chart></bar-chart></div>
      </b-col>
    </b-row>

    <map-component></map-component>
    <student-info></student-info>
  </div>
</template>

<script>
import CircularProgressBar from '@/components/CircularProgressBar.vue'
import LineChart from '@/components/LineChart.vue'
import MultilineChart from '@/components/MultilineChart.vue'
import PolarChart from '@/components/PolarChart.vue'
import BarChart from '@/components/BarChart.vue'

import StudentInfo from '@/components/StudentInfo.vue'
import MapComponent from '@/components/MapComponent.vue'
export default {
  name: 'LeaderBoard',
  components: {
    CircularProgressBar,
    LineChart,
    MultilineChart,
    PolarChart,
    BarChart,
    StudentInfo,
    MapComponent
  }
}
</script>

<style lang="scss" scoped>
#leader_board {
  padding: 1rem 1rem;
}
.leader-board {
  .title {
    text-align: center;
    text-transform: uppercase;
  }
}
</style>
