import { Pie } from 'vue-chartjs'

export default {
  extends: Pie,
  props: {
    chartdata: null,
    color: null,
    label: null
  },
  mounted () {
    console.log(this.label)
    this.renderPieChart()
  },
  computed: {
    chartData: function() {
      return this.chartdata;
    }
  },
  methods: {
    renderPieChart: function(){
      this.renderChart({
        labels: /*['Mahasiswa', 'Tendik', 'Dosen']*/ this.label,
        datasets: [
          {
            backgroundColor: this.color
            /*[
              '#41B883',
              '#E46651',
              '#00D8FF'
            ]*/,
            data: this.chartdata
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    }
  },

watch: {
  chartdata: function() {
    console.log(this.chartdata)
    this._data._chart.destroy();
    //this.renderChart(this.data, this.options);
    this.renderPieChart();
  }
}  
}