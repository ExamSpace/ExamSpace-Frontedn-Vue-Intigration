<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data() {
    return {
      datacollection: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderWidth: 2,
            borderColor: '#689bed',
            pointBackgroundColor: '#689bed',
            lineTension: 0.8,
            data: [60, 40, 20, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    return this.renderChart(this.datacollection, this.options)
  }
}
</script>
