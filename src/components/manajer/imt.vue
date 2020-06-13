<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        IMT (Indeks Massa Tubuh)
        <small>Grafik Indeks Massa Tubuh Peserta Posbindu</small>
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
        <div class="col-sm">
          <h6>Filter :</h6>
          <list-select
            :list="someList"
            option-value="code"
            option-text="name"
            :selected-item="item"
            id="mySelectId"
            name="mySelectName"
            placeholder="Pilih lokasi"
            @select="onSelectLokasi"
          ></list-select>
          <list-select
            :list="listPekerjaan"
            option-value="code"
            option-text="name"
            :selected-item="itemPekerjaan"
            id="mySelectId2"
            name="mySelectName2"
            placeholder="Plih pekerjaan"
            @select="onSelectPekerjaan"
          ></list-select>
        </div>
        <div class="col-sm">
          <h6>
            <br />
          </h6>
          <list-select
            :list="listTahun"
            option-value="code"
            option-text="name"
            :selected-item="itemTahun"
            id="mySelectId4"
            name="mySelectName4"
            placeholder="Pilih tahun"
            @select="onSelectTahun"
          ></list-select>
          <list-select
            :list="listBulan"
            option-value="code"
            option-text="name"
            :selected-item="itemBulan"
            id="mySelectId5"
            name="mySelectName5"
            placeholder="Pilih bulan"
            @select="onSelectBulan"
          ></list-select>
        </div>
        <br />
        <br />
      </div>
      <br>
      <div class="row">
        <div class="col-sm-4">
          <line-chart
            v-if="loaded"
            :chartdata="lineData"
            :lokasi="lokasi"
            :label="deskripsiLine"
            :judul="JudulLine"
            :color="HexcolorLine"
          />
        </div>

        <div class="col-sm-4">
            <bar-chart
            v-if="loaded"
            :chartdata="barData"
            :lokasi="lokasi"
            :label="deskripsiBar"
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
import LineChart from "../LineChart";
import PieChart from "../PieChart";
import BarChart from "../BarChart";
import { BasicSelect, ModelSelect, ListSelect } from "vue-search-select";

import axios from "axios";
export default {
  name: "Dashboard",
  components: {
    LineChart,
    PieChart,
    BasicSelect,
    ModelSelect,
    ListSelect,
    BarChart
  },
  data: () => ({
    loaded: false,
    lineData: null,
    pieData: null,
    barData: null,
    urlBulan: null,
    urlTahun: null,
    urlPekerjaan: null,
    urlLokasi: null,
    xAxis : {
      title: {
        text: 'aaa'
            }
      },
    HexcolorLine: ["#E46651", "#41B883", "#00D8FF", "#3ecc17", "#5286e2"],
    HexcolorPie: ["#E46651", "#41B883", "#ffbf00", "#5286e2", "#c52961"],
    HexcolorBar: ["#41B883", "#E46651", "#00D8FF", "#3ecc17", "#5286e2", "#ffbf00", "#c52961", "#928456", "#97449c"],
    deskripsiPie: null,
    deskripsiLine: null,
    deskripsiBar: null,
    JudulBar: "Perbandingan Rerata IMT Departemen ",
    JudulLine: "Pengelompokan Berdasar Kategori ",
    lokasi: "Seluruh FT",
    judulTrend: "Trend Rerata IMT Tiap Bulan ",
    judulPie: "Pengelompokan Berdasar Kategori ",
    judulBar: "Perbandingan Rerata IMT Departemen ",
    labelTrend: [
      "Januari",
      "Februari",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    labelPie: ["Kurang", "Normal", "Pra Obesitas", "Obesitas I", "Obesitas II"],
    labelBar: [
      "KPFT",
      "DTAP",
      "DTETI",
      "DTGD",
      "DTGL",
      "DTK",
      "DTMI",
      "DTNTF",
      "DTS"
    ],
    colorTrend: "#f87979",
    colorBar: "#f87979",
    colorPie: ["#41B883", "#E46651", "#00D8FF", "#ffffff", "#000000"],
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
    },
    listPekerjaan: [
      { code: "Mahasiswa", name: "Mahasiswa", desc: "desc01" },
      { code: "Tendik", name: "Tendik", desc: "desc02" },
      { code: "Dosen", name: "Dosen", desc: "desc03" }
    ],
    itemPekerjaan: {
      code: null,
      name: "",
      desc: ""
    },
    listBulan: [
      { code: "Januari", name: "Januari", desc: "1" },
      { code: "Februari", name: "Februari", desc: "2" },
      { code: "Maret", name: "Maret", desc: "3" },
      { code: "April", name: "April", desc: "4" },
      { code: "Mei", name: "Mei", desc: "5" },
      { code: "Juni", name: "Juni", desc: "6" },
      { code: "Juli", name: "Juli", desc: "7" },
      { code: "Agustus", name: "Agustus", desc: "8" },
      { code: "September", name: "September", desc: "9" },
      { code: "Oktober", name: "Oktober", desc: "10" },
      { code: "November", name: "November", desc: "11" },
      { code: "Desember", name: "Desember", desc: "12" }
    ],
    itemBulan: {
      code: null,
      name: "",
      desc: ""
    },
    listTahun: [
      { code: "2019", name: "2019", desc: "desc01" },
      { code: "2018", name: "2018", desc: "desc02" }
    ],
    itemTahun: {
      code: null,
      name: "",
      desc: ""
    }
  }),

  async created() {
    this.loaded = false;
    try {
      const barData = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/bar?type=IMT"
      );
      const pieData = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/pie?type=IMT"
      );
      const lineData = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/line?type=IMT"
      );
      this.lineData = lineData.data.value;
      this.barData = barData.data.value;
      this.pieData = pieData.data.value;
      this.deskripsiPie = pieData.data.deskripsi;
      this.deskripsiLine = lineData.data.deskripsi;
      this.deskripsiBar = barData.data.deskripsi;
      this.loaded = true;
      console.log(pieData.data.value + "abc");
    } catch (e) {
      console.error(e);
    }
  },
  async mounted() {
    console.log(this.lineData + "mounted");
  },
  methods: {
    changeData() {
      this.chartdata = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      console.log(this.lineData);
    },
    async fetchData() {
      this.loaded = false;
      try {
        if (!this.urlBulan) this.urlBulan = "";
        if (!this.urlLokasi) this.urlLokasi = "";
        if (!this.urlTahun) this.urlTahun = "";
        if (!this.urlPekerjaan) this.urlPekerjaan = "";
        const barData = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/bar?type=IMT" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        const pieData = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/pie?type=IMT" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        const lineData = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/line?type=IMT" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        this.lineData = lineData.data.value;
        this.barData = barData.data.value;
        this.pieData = pieData.data.value;
        this.deskripsiPie = pieData.data.deskripsi;
        this.deskripsiLine = lineData.data.deskripsi;
        this.deskripsiBar = barData.data.deskripsi;
        this.loaded = true;
        console.log(this.pieData);
      } catch (e) {
        console.error(e);
      }
      console.log(this.lineData);
    },
    async onSelectLokasi(item) {
      this.urlLokasi = "&lokasi=" + item.code;
      this.fetchData();
    },

    async onSelectPekerjaan(item) {
      this.urlPekerjaan = "&pekerjaan=" + item.code;
      this.fetchData();
    },

    async onSelectTahun(item) {
      this.urlTahun = "&tahun=" + item.code;
      this.fetchData();
    },

    async onSelectBulan(item) {
      this.urlBulan = "&bulan=" + item.desc;
      this.fetchData();
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
