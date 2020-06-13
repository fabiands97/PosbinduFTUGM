import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: null,
    lokasi: null,
    label: null,
    judul: null,
    color: null,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  },

  mounted() {
    // Overwriting base render method with actual data.
    this.renderLineChart();
  },
  computed: {
    chartData: function () {
      return this.chartdata;
    }
  },
  methods: {
    renderLineChart: function () {
      var options = {
        bezierCurve: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      };
      this.renderChart({
        labels: this.label /*['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']*/,
        datasets: [
          {
            label: "Trend Rerata",
            borderColor: '#249EBF',
            pointBackgroundColor: 'white',
            borderWidth: 3,
            pointBorderColor: '#249EBF',
            backgroundColor: 'transparent',
            data: this.chartdata
          }
        ],
      },
        options)
    }
  },
  watch: {
    chartdata: function () {
      this._data._chart.destroy();
      //this.renderChart(this.data, this.options);
      this.renderLineChart();
    }
  }
}