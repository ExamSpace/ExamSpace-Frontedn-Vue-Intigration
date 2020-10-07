<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: 'Dataset 1',
            backgroundColor: '#e0389a',
            borderColor: '#e0389a',
            borderWidth: 1,
            data: [10, 20, 30]
          },
          {
            label: 'Dataset 2',
            backgroundColor: '#6e77f5',
            borderColor: '#6e77f5',
            borderWidth: 1,
            data: [11, 21, 31]
          }
        ]
      },
      options: {
        responsive: true,
        legend: {
          position: 'top'
        },
        title: {
          display: false,
          text: 'Chart.js Polar Area Chart'
        }
      }
    }
  },
  mounted() {
    return this.renderChart(this.datacollection, this.options)
  }
}
</script>
