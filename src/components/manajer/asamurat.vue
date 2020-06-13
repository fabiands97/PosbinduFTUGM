<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Asam Urat
        <small>Grafik Asam Urat Peserta Posbindu</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/" exact>
            <i class="fa fa-dashboard"></i>
            Dashboard
          </router-link>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">

      <div class="row">

      <div class="col-sm-4">
       <list-select :list="someList"
                     option-value="code"
                     option-text="name"
                     :selected-item="item"
                     id="mySelectId"
                     name="mySelectName"
                     placeholder="select item"
                     @select="onSelect">
        </list-select>
       
      <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :lokasi="lokasi"/>
      </div>
      <div class="col-sm-4">
      <pie-chart
      v-if="loaded"
      :chartdata="pieData"/>
      </div>
      </div>
      <!-- Your Page Content Here -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import LineChart from '../LineChart'
import PieChart from '../PieChart'
import { BasicSelect, ModelSelect, ListSelect } from "vue-search-select";

import axios from "axios";
  export default {
    name: 'Dashboard',
    components: {LineChart,PieChart,BasicSelect,ModelSelect,ListSelect },
    data: () => ({
    loaded: false,
    chartdata: null,
    pieData: null,
    lokasi: 'Seluruh FT',
    someList: [
          { code: 'all', name: 'Seluruh FT', desc: 'desc01' },
          { code: 'KPFT', name: 'KPFT', desc: 'desc02' },
          { code: 'DTAP', name: 'DTAP', desc: 'desc03' },
          { code: 'DTETI', name: 'DTETI', desc: 'desc04' },
          { code: 'DTAG', name: 'DTAG', desc: 'desc05' },
          { code: 'DTGL', name: 'DTGL', desc: 'desc06' },
          { code: 'DTK', name: 'DTK', desc: 'desc07' },
          { code: 'DTMI', name: 'DTMI', desc: 'desc08' },
          { code: 'DTNTF', name: 'DTNTF', desc: 'desc09' },
          { code: 'DTS', name: 'DTS', desc: 'desc10' }
        ],
        item: {
          code: null,
          name: '',
          desc: ''
        }
  }),

  async created(){
    this.loaded = false
    try {
      const userlist = await axios.get('http://52.187.24.10:8080/api/v1/manager/jumlahPeserta?lokasi=all')
      const pesertaPekerjaan = await axios.get('http://52.187.24.10:8080/api/v1/manager/pesertabypekerjaan?lokasi=all')
      this.chartdata = userlist.data
      this.pieData = pesertaPekerjaan.data
      this.loaded = true
      console.log(this.chartdata)
      
    } catch (e) {
      console.error(e)
    }
    console.log(this.chartdata)
  }
  ,
  async mounted () {
    console.log(this.chartdata+"mounted")
  },
  methods: {
    changeData(){
      this.chartdata = [0,0,0,0,0,0,0,0,0,0,0,0]
      console.log(this.chartdata)
    },
    async onSelect (item) {
        this.item = item
    try {
      const userlist = await axios.get('http://52.187.24.10:8080/api/v1/manager/jumlahPeserta?lokasi='+item.code)
      const pesertaPekerjaan = await axios.get('http://52.187.24.10:8080/api/v1/manager/pesertabypekerjaan?lokasi='+item.code)
      this.chartdata = userlist.data
      this.pieData = pesertaPekerjaan.data
      this.loaded = true
      this.lokasi = item.name
    } catch (e) {
      console.error(e)
    }
      
      },
      reset () {
        this.item = {}
      },
      selectItem () {
        // select option from parent component
        this.item = this.someList[0]
      }

  }
  }
</script>
