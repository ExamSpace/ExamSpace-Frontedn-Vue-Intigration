<script>
import { PolarArea } from 'vue-chartjs'
export default {
  extends: PolarArea,
  data() {
    return {
      datacollection: {
        datasets: [
          {
            data: [10, 20, 19, 30],
            backgroundColor: ['#f26fc2', '#592e2e', '#e0b255', '#6e80e6'],
            label: 'My dataset' // for legend
          }
        ],
        labels: ['Math', 'Physics', 'GK', 'Chemestry']
      },
      options: {
        responsive: true,
        legend: {
          display: false,
          position: 'bottom'
        },
        title: {
          display: false,
          text: 'Chart.js Polar Area Chart'
        },
        scale: {
          ticks: {
            beginAtZero: true
          },
          reverse: false
        },
        animation: {
          animateRotate: true,
          animateScale: true
        }
      }
    }
  },
  mounted() {
    return this.renderChart(this.datacollection, this.options)
  }
}
</script>
