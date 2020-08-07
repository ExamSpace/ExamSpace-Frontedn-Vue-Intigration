<template>
  <div id="goole_map">
    <GChart
      :settings="{
        packages: ['corechart', 'table', 'map'],
        mapsApiKey: 'AIzaSyDVHrzfVa7XR6S0j_OX3id_r7npVCgumjw'
      }"
      type="GeoChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'GoogleMap',
  components: {
    GChart
  },
  data() {
    return {
      chartData: [
        ['', 'Point'],
        ['BD-A', 200],
        ['BD-B', 100],
        ['BD-C', 500],
        ['BD-D', 900],
        ['BD-E', 20],
        ['BD-F', 480],
        ['BD-G', 250],
        ['BD-H', 360]
      ],
      chartOptions: {
        region: 'BD',
        resolution: 'provinces',
        colorAxis: { colors: ['#debdbd', '#c22121'] }
      }
    }
  }
}
</script>

<style></style>
