<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Tekanan Darah
        <small>Grafik Tekanan Darah Peserta Posbindu</small>
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
            placeholder="Pilih pekerjaan"
            @select="onSelectPekerjaan"
          ></list-select>
        </div>
        <div class="col-sm">
          <h6><br></h6>
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
      </div>
<br>
<br>

        <h6>Sistol</h6>
      <div class="row">
        <div class="col-sm-4">
            <line-chart
            v-if="loaded"
            :chartdata="lineDataSistol"
            :lokasi="lokasi"
            :label="deskripsiLine"
            :judul="JudulLineSistol"
            :color="HexcolorLine"
          />
        </div>
         <div class="col-sm-4">
          <bar-chart
            v-if="loaded"
            :chartdata="barDataSistol"
            :lokasi="lokasi"
            :label="deskripsiBar"
            :judul="JudulBarSistol"
            :color="HexcolorBar"
          />
        </div>
         <div class="col-sm-4">
          <pie-chart v-if="loaded" :chartdata="pieData" :label="deskripsiPie" :color="HexcolorPie" />
        </div>
      </div>
      <br>

        <h6>Diastol :</h6>
      <div class="row">
        <div class="col-sm-4">
          
          <line-chart
            v-if="loaded"
            :chartdata="lineDataDiastol"
            :lokasi="lokasi"
            :label="deskripsiLine"
            :judul="JudulLineDiastol"
            :color="HexcolorLine"
          />
        </div>
         <div class="col-sm-4">
          <bar-chart
            v-if="loaded"
            :chartdata="barDataDiastol"
            :lokasi="lokasi"
            :label="deskripsiBar"
            :judul="JudulBarDiastol"
            :color="HexcolorBar"
          />
        </div>
         <div class="col-sm-4">
          
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
    lineDataSistol: null,
    lineDataDiastol: null,
    pieDataSistol: null,
    pieDataDiastol: null,
    barDataSistol: null,
    barDataDiastol: null,
    urlBulan: null,
    urlTahun: null,
    urlPekerjaan: null,
    urlLokasi: null,
    HexcolorLine: ["#41B883", "#E46651", "#00D8FF", "#3ecc17", "#5286e2"],
    HexcolorPie: ["#E46651", "#41B883", "#ffbf00", "#5286e2", "#c52961"],
    HexcolorBar: ["#41B883", "#E46651", "#00D8FF", "#3ecc17", "#5286e2", "#ffbf00", "#c52961", "#928456", "#97449c"],
    deskripsiPie: null,
    deskripsiLine: null,
    deskripsiBar: null,
    JudulBarSistol: "Rerata Sistol antar Departemen",
    JudulLineSistol: "Trend Rerata Pengukuran Sistol",
    JudulBarDiastol: "Rerata Diastol antar Departemen",
    JudulLineDiastol: "Trend Rerata Pengukuran Diastol",
    lokasi: "Seluruh FT",
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
      const barDataSistol = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/bar?type=TekananDarahSistol"
      );
      const barDataDiastol = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/bar?type=TekananDarahDiastol"
      );
      const pieData = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/pie?type=TekananDarah"
      );
      const lineDataSistol = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/line?type=TekananDarahSistol"
      );
      const lineDataDiastol = await axios.get(
        "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/line?type=TekananDarahDiastol"
      );
      this.lineDataSistol = lineDataSistol.data.value;
      this.lineDataDiastol = lineDataDiastol.data.value;
      this.deskripsiLine = lineDataSistol.data.deskripsi;
      this.barDataSistol = barDataSistol.data.value;
      this.barDataDiastol = barDataDiastol.data.value;
      this.deskripsiBar = barDataSistol.data.deskripsi;
      this.pieData = pieData.data.value;
      this.deskripsiPie = pieData.data.deskripsi;
      this.loaded = true;
      console.log(this.lineData);
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
        const barDataSistol = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/bar?type=TekananDarahSistol" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        const barDataDiastol = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/bar?type=TekananDarahDiastol" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        const pieData = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/pie?type=TekananDarah" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        const lineDataSistol = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/line?type=TekananDarahSistol" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        const lineDataDiastol = await axios.get(
          "http://52.187.24.10:8080/api/v1/manajer/report/pengukuran/line?type=TekananDarahDiastol" +
            this.urlBulan +
            this.urlLokasi +
            this.urlTahun +
            this.urlPekerjaan
        );
        this.lineDataSistol = lineDataSistol.data.value;
        this.lineDataDiastol = lineDataDiastol.data.value;
        this.deskripsiLine = lineDataSistol.data.deskripsi;
        this.barDataSistol = barDataSistol.data.value;
        this.barDataDiastol = barDataDiastol.data.value;
        this.deskripsiBar = barDataSistol.data.deskripsi;
        this.pieData = pieData.data.value;
        this.deskripsiPie = pieData.data.deskripsi;
        this.loaded = true;
        console.log(this.lineData);
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
