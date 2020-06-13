<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Meja 4 : Pengecekan Darah
      </h1>
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
      <font color="red">Panduan pengisian Meja 4</font>
      <br>
      <ul>
        <li>Kolom Gula darah dan Kolesterol <b>wajib</b> diisi</li>
        <li>Kolom Asam urat <b>tidak wajib</b> diisi</li>
        <li>Pengisian pengukuran berupa <b>angka</b> atau <b>bilangan</b></li>
        <li>Masukkan data dengan <b>teliti</b> karena data tidak dapat diubah</li>
        <li>Berikan nilai <b>nol(0)</b> jika ingin mengosongkan kolom
          <br><font color="red">*</font><small><i>asam urat dikosongkan saja</i></small></li>
        <li>Gunakan tanda <b>titik (.) </b> untuk menggantikan koma (,)</li>
      </ul>
      </div>
      <br>
        <h5>
        <table class="table-responsive" style="margin-left:10px">
          <tr><td align="right">Nama : </td><td>{{ x["user.Nama"] }}</td></tr>
          <tr><td align="right">No Identitas : </td><td>{{ y }}</td></tr>
        </table></h5>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="col-xs-12">
        <div class="box box-primary">
          <div class="box-header with-border">
            <!-- <h3 class="box-title">User Edit</h3> -->
            <div class="box-tools pull-right">
              <button
                type="button"
                class="btn btn-box-tool"
                v-on:click="$emit('toggleEdit')"
                title="Close"
              >
                <i class="fa fa-remove"></i>
              </button>
            </div>
          </div>
          <form role="form">
            <div class="box-body">
                           <div class="form-group">
                <label for="exampleInputEmail1">Gula Darah sewaktu (mg/dL)<font color="red">*</font></label>
                <input
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Gula Darah"
                  v-model="user.GulaDarah"
                >
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Kolesterol (mg/dL)<font color="red">*</font></label>
                <input class="form-control" id="exampleInputPassword1" placeholder="Kolesterol" v-model="user.Kolesterol">
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Asam Urat (mg/dL) <small><i>-tidak wajib</i></small></label>
                <input class="form-control" id="exampleInputEmail1" placeholder="Kosongkan jika tidak melakukan pengukuran asam urat" v-model="user.AsamUrat">
              </div>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button type="button" class="btn btn-primary" v-on:click="simpanMeja3">Submit</button>
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
  name: "Input3",
  data() {
    return {
      x: null,
      y: null,
        user: {
        userId: null,
        AsamUrat: null,
        GulaDarah: null,
        Kolesterol: null,
        LokasiPeriksa:null,
        PemeriksaMeja4:null
      }
    };
  },
  created() {
    this.user.userId = this.$route.params.user.userId;
    this.user.LokasiPeriksa = this.$store.state.petugas.lokasi;
    this.user.PemeriksaMeja4 = this.$store.state.petugas.nama;
    this.x = this.$route.params.user;
    this.y = this.$route.params.nim;
  },
  methods:{
    simpanMeja3(){
      console.log(this.user)
      
      if(this.user.userId && this.user.GulaDarah && this.user.Kolesterol){
       axios.post('http://52.187.24.10:8080/api/v1/petugas/input/pengukuranptm/meja4', this.user)
            .then(() => {
                alert("Sukses menambahkan data pada Meja 4")
                this.$router.push('/list3')
            })
            .catch(() =>{
                 alert("Gagal menambahkan data")
            })}else{
              alert("\t\t\tIsikan data dengan benar !\t\t\t\n\tPeriksa panduan pengisian di bagian atas.\t")
            }
    }
  }
};
</script>