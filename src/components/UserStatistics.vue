<template>
  <div id="user_statistics">
    <b-row>
      <b-col md="3">
        <line-chart></line-chart>
      </b-col>
      <b-col md="3">
        <line-chart></line-chart>
      </b-col>
      <b-col md="3">
        <line-chart></line-chart>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import LineChart from './LineChart'

export default {
  name: 'UserStatistics',
  components: {
    LineChart
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
</style>
