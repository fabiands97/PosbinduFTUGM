<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Meja 1 : Pendaftaran <i>(Registrasi Peserta Baru)</i>
        <small id="txt"></small>
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
      <font color="red">Panduan Registrasi Peserta</font>
      <br>
      Bagian yang wajib diisi :
      <ol>
        <li>Email UGM</li>
        <li>Nama lengkap</li>
        <li>Jenis Kelamin</li>
        <li>Nomor Identitas <i>(setiap orang harus berbeda)</i></li>
        <li>Departemen</li>
        <li>Lokasi periksa</li>
      </ol>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
    <div class="col-xs-12">

    <div class="box box-primary" >
      <form role="form">
      <div class="box-body">
    <div class="box-header with-border">
      <!-- <h3 class="box-title"><b>Pendaftaran Peserta</b></h3> -->
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
          <label for="exampleInputEmail1">Email UGM</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Masukkan Email UGM" v-model="form.Email" width="50">
        </div>
        <div class="form-group">
          <label for="Nama">Nama</label>
          <input class="form-control" id="Nama" placeholder="Nama" v-model="form.Nama">
        </div>
        <div class="form-group">
          <div>
          <label for="gender">Jenis Kelamin :</label>
          <br>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender1"
                      value="L"
                      v-model="form.JenisKelamin"
                    >
                    <label class="form-check-label" for="gender1">Laki-laki</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="gender2"
                      value="P"
                      v-model="form.JenisKelamin"
                    >
                    <label class="form-check-label" for="gender2">Perempuan</label>
                  </div>
            </div>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">No Identitas</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Mahasiswa = NIU 6 digit, Dosen/Karyawan/Tendik = NIP" v-model="form.NoIdentitas">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">No Handphone</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="contoh : 08xxxx" v-model="form.NoTelpon">
        </div>

        <div class="form-group"> <!-- Date input -->
          <label class="control-label" for="date">Tanggal Lahir</label>
            <input class="form-control" id="date" name="date" placeholder="Bulan/Tanggal/Tahun" type="date" v-model="form.TanggalLahir">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Tempat Lahir</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Kota Tempat Lahir sesuai KTP" v-model="form.TempatLahir">
        </div>
      
     
          <label>Pekerjaan</label>
  <select required class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" @change="onChangePekerjaan($event)" v-model="form.Pekerjaan">
    <option value="null" disabled hidden>Pilih Pekerjaan</option>
    <option value="Dosen">Dosen</option>
    <option value="Tendik">Tendik</option>
    <option value="Mahasiswa">Mahasiswa</option>
  </select>

            <label>Departemen</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" @change="onChangeDepartment($event)" v-model="form.Departemen">
    <!-- <option selected>Choose...</option> -->
    <option value="null" disabled hidden>Pilih Departemen</option>
      <option value="KPFT">KPFT</option>
      <option value="DTAP">DTAP</option>
      <option value="DTETI">DTETI</option>
      <option value="DTGD">DTGD</option>
      <option value="DTGL">DTGL</option>
      <option value="DTK">DTK</option>
      <option value="DTMI">DTMI</option>
      <option value="DTNTF">DTNTF</option>
      <option value="DTS">DTS</option>
  </select>


        <div class="form-group">
          <label for="exampleInputEmail1">Alamat</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Alamat di Jogja" v-model="form.Alamat">
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Suku</label>
          <input class="form-control" id="exampleInputEmail1" placeholder="Suku" v-model="form.Suku">
        </div>

        <label>Agama</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" @change="onChangeLokasi($event)" v-model="form.Agama">
    <!-- <option selected>Choose...</option> -->
      <option value="null" disabled hidden>Pilih Agama</option>
      <option value="Islam">Islam</option>
      <option value="Katolik">Katolik</option>
      <option value="Kristen">Kristen</option>
      <option value="Hindu">Hindu</option>
      <option value="Budha">Budha</option>
  </select>

              <label>Lokasi Periksa</label>
  <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" @change="onChangeLokasi($event)" v-model="form.LokasiPeriksa">
    <!-- <option selected>Choose...</option> -->
    <option value="null" disabled hidden>Pilih Lokasi Periksa</option>
      <option value="KPFT">KPFT</option>
      <option value="DTAP">DTAP</option>
      <option value="DTETI">DTETI</option>
      <option value="DTGD">DTGD</option>
      <option value="DTGL">DTGL</option>
      <option value="DTK">DTK</option>
      <option value="DTMI">DTMI</option>
      <option value="DTNTF">DTNTF</option>
      <option value="DTS">DTS</option>
    
  </select>

      </div>
    <!-- /.box-body -->

    <div class="box-footer">
      <button type="button" class="btn btn-primary"  v-on:click="addNewUser">Submit</button>
    </div>
  </form>
</div>
        
           </div>

    </section>
    <!-- /.content -->
  </div>
</template>

<!--<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.4.1/js/bootstrap-datepicker.min.js"></script>
<script type="text/javascript" src="https://code.jquery.com/jquery-1.11.3.min.js"></script> -->

<script>

import axios from "axios";
export default {
  name: 'DaftarUser',
   data() {
    return {
      form: {
        UserLogin:null,
        Email : null, 
        Nama : null, 
        NoIdentitas : null, 
        JenisKelamin : null, 
        NoTelpon : null,
        TanggalLahir : null,
        TempatLahir : null,
        Pekerjaan : null,
        Departemen : null,
        Alamat : null,
        Suku : null, 
        Agama : null,            
        LokasiPeriksa : null
      }
    };
  },
  methods:{
     addNewUser(){
      
       var userlogin = this.form.Email;
       var userloginArray = userlogin.split("@");
       this.form.UserLogin = userloginArray[0];

        if( this.form.Email && this.form.Nama && this.form.NoIdentitas && this.form.JenisKelamin && this.form.Departemen && this.form.LokasiPeriksa)
        {
          axios
          .post('http://52.187.24.10:8080/api/v1/petugas/pendaftaran', this.form)
            .then(() => {
                alert("Sukses melakukan pendaftaran peserta");
                this.$router.push('/Users');
                })
            .catch(() =>{
                 alert("Gagal menambahkan ke antrian")
              })}
            else{
              alert("Isikan data dengan benar !")
            }

    },
    onChangePekerjaan(event) {
            this.form.Pekerjaan = event.target.value
        },
            onChangeDepartment(event) {
            this.form.Departemen= event.target.value
        },
            onChangeLokasi(event) {
            this.form.LokasiPeriksa = event.target.value
        }

  }

}


</script>
