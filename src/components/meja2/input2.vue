<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Meja 3 : Pengukuran Dasar</h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/" exact>
            <i class="fa fa-home"></i>
            Dashboard
          </router-link>
        </li>
      </ol>
      <br>
      <div class="box-title" style="margin-left:10px">
      <font color="red">Panduan pengisian Meja 3</font>
      <br>
      <ul>
        <li>Semua kolom <b>wajib</b> diisi<font color="red">*</font></li>
        <li>Pengisian pengukuran berupa <b>angka</b> atau <b>bilangan</b></li>
        <li>Masukkan data dengan <b>teliti</b> karena data tidak dapat diubah</li>
        <li><font color="red">*</font>Berikan nilai <b>nol(0)</b> jika ingin mengosongkan kolom</li>
        <li>Gunakan tanda <b>titik (.) </b> untuk menggantikan koma (,)</li>
      </ul>
      </div>
      <br>
      <h5>
        <table class="table-responsive" style="margin-left:10px">
          <tr>
            <td align="right">Nama :</td>
            <td>{{ x["user.Nama"] }}</td>
          </tr>
          <tr>
            <td align="right">No Identitas :</td>
            <td>{{ y }}</td>
          </tr>
        </table>
      </h5>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="col-xs-12">
        <div class="box box-primary">
          <form role="form">
            <div class="box-body">
              <div class="box-header with-border">
                <!-- <h3 class="box-title">User Edit</h3> -->
                <div class="box-tools pull-right">
                  <button
                    type="reset"
                    class="btn btn-box-tool"
                    v-on:click="$emit('toggleEdit')"
                    title="Close"
                    value="Reset"
                  >
                    <i class="fa fa-remove">Reset</i>
                  </button>
                </div>
              </div>

              <div class="form-group">
                <label for="tinggi">Tinggi Badan (cm)<font color="red">*</font></label>
                <input
                  class="form-control"
                  id="tinggi"
                  placeholder="Tinggi Badan"
                  v-model="user.TinggiBadan"
                >
              </div>
              <div class="form-group">
                <label for="berat">Berat Badan (kg)<font color="red">*</font></label>
                <input
                  class="form-control"
                  id="berat"
                  placeholder="Berat Badan"
                  v-model="user.BeratBadan"
                >
              </div>
              <div class="form-group">
                <label for="lingkar">Lingkar Perut (cm)<font color="red">*</font></label>
                <input
                  class="form-control"
                  id="lingkar"
                  placeholder="Lingkar Perut"
                  v-model="user.LingkarPerut"
                >
              </div>
              <div class="form-group">
              <table class="table-responsive">
                <tr>
                  <td>
                    <label for="sistol">Tekanan Darah Atas (Sistol)<font color="red">*</font></label>
                  </td>
                  <td>&ensp;/&ensp;</td>
                  <td>
                    <label for="diastol">Tekanan Darah Bawah (Diastol)<font color="red">*</font></label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      class="form-control"
                      id="sistol"
                      placeholder="Sistol"
                      v-model="user.TekananDarahSistol"
                    >
                  </td>
                  <td></td>
                  <td>
                    <input
                      class="form-control"
                      id="diastol"
                      placeholder="Diastol"
                      v-model="user.TekananDarahDiastol"
                    >
                  </td>
                </tr>
              </table>
            </div>
              <!-- <div class="form-group">
                <label for="sistol">Tekanan Darah Atas (Sistol)</label>
                <input
                  class="form-control"
                  id="sistol"
                  placeholder="Sistol"
                  v-model="user.TekananDarahSistol"
                >
              </div>
              <div class="form-group">
                <label for="diastol">Tekanan Darah Bawah (Diastol)</label>
                <input
                  class="form-control"
                  id="diastol"
                  placeholder="Diastol"
                  v-model="user.TekananDarahDiastol"
                >
              </div> -->
              <!-- <div class="input-group date" id="datetimepicker1">
                <input type="text" class="form-control">
                <span class="input-group-addon">
                  <span class="glyphicon glyphicon-calendar"></span>
                </span>
              </div>-->
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button type="button" class="btn btn-primary" v-on:click="simpanMeja2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Input2",
  data() {
    return {
      x: null,
      y: null,
      user: {
        userId: null,
        TinggiBadan: null,
        BeratBadan: null,
        LingkarPerut: null,
        TekananDarahSistol: null,
        TekananDarahDiastol: null,
        LokasiPeriksa: null,
        IMT: null,
        CatatanMeja3:null,
        PemeriksaMeja3: null
      }
    };
  },
  created() {
    this.user.userId = this.$route.params.user.userId;
    this.user.LokasiPeriksa = this.$store.state.petugas.lokasi;
    this.user.PemeriksaMeja3 = this.$store.state.petugas.nama;
    this.x = this.$route.params.user;
    this.y = this.$route.params.nim;
  },
  methods: {
    simpanMeja2() {
      console.log(this.user);
      var t2 = Number(this.user.TinggiBadan) / 100;
      var b = Number(this.user.BeratBadan);
      var t = Math.pow(t2,2);
      var imt = (b/t).toFixed(2);
      this.user.IMT = imt;

      if (
        this.user.userId &&
        this.user.TinggiBadan &&
        this.user.BeratBadan &&
        this.user.IMT &&
        this.user.LingkarPerut &&
        this.user.TekananDarahSistol &&
        this.user.TekananDarahDiastol &&
        this.user.LokasiPeriksa
      ) {
        // var tinggiMeter = this.user.TinggiBadan / 100;
        // this.user.IMT = this.user.BeratBadan / (tinggiMeter * tinggiMeter);
        axios
          .post(
            "http://52.187.24.10:8080/api/v1/petugas/input/pengukuranptm/meja3",
            this.user
          )
          .then(() => {
            alert("Sukses menambahkan data pada Meja 3");
            this.$router.push("/list2");
          })
          .catch(() => {
            alert("Gagal menambahkan data");
          });
      } else {
        alert("\t\t\tIsikan data dengan benar !\t\t\t\n\tPeriksa panduan pengisian di bagian atas.\t");
      }
    }
  }
};
</script>