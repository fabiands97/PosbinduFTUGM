import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartdata: null,
    lokasi: null,
    judul: null,
    color: null,
    label: null,
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
    console.log(this.label)
  },
  computed: {
    chartData: function () {
      return this.chartdata, this.label, this.color;
    }
  },
  methods: {
    renderLineChart: function () {
      var options = {
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
            label: /*'Statistik Peserta '*/ this.judul + this.lokasi,
            backgroundColor: /*'#f87979'*/ this.color,
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