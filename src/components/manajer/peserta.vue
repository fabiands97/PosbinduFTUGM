<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Dashboard
        <small>Partisipasi Peserta Posbindu</small>
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
          <h6>Filter: </h6>
          <list-select
            :list="someList"
            option-value="code"
            option-text="name"
            :selected-item="item"
            id="mySelectId"
            name="mySelectName"
            placeholder="Pilih lokasi"
            @select="onSelect"
          ></list-select>
        </div>
      </div>
      <br>
         <div class="row">
            <div class="col-sm-4">
       <bar-chart
            v-if="loaded"
            :chartdata="barData"
            :lokasi="lokasi"
            :label="deskripsibar"
            :judul="JudulBar"
            :color="HexcolorBar"
          />
            </div>
        <div class="col-sm-4">
          <pie-chart v-if="loaded" :chartdata="pieData" :label="deskripsiPie" :color="HexcolorPie" />
        </div>
      </div>
      <!-- Your Page Content Here -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import BarChart from "../BarChart";
import PieChart from "../PieChart";
import { BasicSelect, ModelSelect, ListSelect } from "vue-search-select";

import axios from "axios";
export default {
  name: "Dashboard",
  components: { BarChart, PieChart, BasicSelect, ModelSelect, ListSelect },
  data: () => ({
    loaded: false,
    pieData: null,
    lokasi: " Seluruh FT",
    barData: null,
    HexcolorLine: ["#41B883", "#E46651", "#00D8FF", "#3ecc17", "#5286e2"],
    HexcolorPie: ["#41B883", "#E46651", "#00D8FF", "#3ecc17", "#5286e2"],
    HexcolorBar: ["#ECF0F5", "#41B883", "#E46651", "#00D8FF", "#3ecc17", "#5286e2", "#ffbf00", "#c52961", "#928456", "#97449c", "#e6e492", "#7760a4", "#0e5218" ],
    deskripsiPie: null,
    deskripsiLine: null,
    deskripsibar: null,
    JudulBar: "Jumlah Peserta Posbindu di ",
    JudulLine: "Trend Rerata Peserta",
    someList: [
      { code: "all", name: "Seluruh FT", desc: "desc01" },
      { code: "KPFT", name: "KPFT", desc: "desc02" },
      { code: "DTAP", name: "DTAP", desc: "desc03" },
      { code: "DTETI", name: "DTETI", desc: "desc04" },
      { code: "DTAG", name: "DTAG", desc: "desc05" },
      { code: "DTGL", name: "DTGL", desc: "desc06" },
      { code: "DTK", name: "DTK", desc: "desc07" },
      { code: "DTMI", name: "DTMI", desc: "desc08" },
      { code: "DTNTF", name: "DTNTF", desc: "desc09" },
      { code: "DTS", name: "DTS", desc: "desc10" }
    ],
    item: {
      code: null,
      name: "",
      desc: ""
    }
  }),

  async created() {
    this.loaded = false;
    try {
      const userlist = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/peserta/bar?lokasi=all"
      );
      const pesertaPekerjaan = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/peserta/pie?lokasi=all"
      );
      this.barData = userlist.data.value;
      this.deskripsibar = userlist.data.deskripsi;
      this.pieData = pesertaPekerjaan.data.value;
      this.deskripsiPie = pesertaPekerjaan.data.deskripsi;
      this.loaded = true;
      console.log(this.chartdata);
    } catch (e) {
      console.error(e);
    }
    console.log(this.chartdata);
  },
  async mounted() {
    console.log(this.chartdata + "mounted");
  },
  methods: {
    changeData() {
      this.chartdata = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      console.log(this.chartdata);
    },
    async onSelect(item) {
      this.item = item;
      try {
        const userlist = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/peserta/bar?lokasi=" +
            item.code
        );
        const pesertaPekerjaan = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/peserta/pie?lokasi=" +
            item.code
        );
        this.barData = userlist.data.value;
        this.deskripsibar = userlist.data.deskripsi;
        this.pieData = pesertaPekerjaan.data.value;
        this.deskripsiPie = pesertaPekerjaan.data.deskripsi;
        this.loaded = true;
        this.lokasi = item.name;
      } catch (e) {
        console.error(e);
      }
    },
    reset() {
      this.item = {};
    },
    selectItem() {
      // select option from parent component
      this.item = this.someList[0];
    }
  }
};
</script>
