<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <font>
          Selamat datang di<br><br>
      </font>
          <h2>
            Aplikasi Posbindu PHSS FT UGM
          </h2>
          <small>
                Pos Pembinaan Terpadu Promosi Hidup Sehat dan Sejahtera<br>
                Fakultas Teknik Universitas Gadjah Mada
          </small>
      
      <ol class="breadcrumb">
        <li>
          <!-- <div id="txt" style="font-size:30px" align="right"></div> -->
          <router-link to="/" exact>
            <!-- <i class="fa fa-home"></i> -->
            <i class="fa fa-dashboard"></i>
            Dashboard
          </router-link>
          <!-- <p id="txt" style="font-size:20px" align="right"></p> -->
        </li>
      </ol>
    </section>
    <br><br>
    <!-- Main content -->
    <section class="content">
      <div class="col-xs-12">
        <div class="box box-primary">
          <div class="box-header">
            <div style="margin-left:5pt;margin-right:5pt;">
              <h4>Perhatikan hal-hal berikut</h4><br>
              <h6>Beberapa panduan untuk 
              <font v-if="role === 'admin'"> Manajer Posbindu</font>
              <font v-if="role === 'petugas'"> Petugas / Kader Posbindu</font>
              </h6>
              <ol v-if="role === 'petugas'">
                <li>Lakukan pemeriksaan peserta secara urut</li>
                <li>Jika terdapat peserta yang ingin melakukan skip antrian atau melewati meja, data peserta tersebut tetap harus dimulai dari Meja 1 secara urut</li>
                <li>Ketika petugas melakukan input data peserta, <b>Jangan</b> menekan tombol <i>reload</i> pada Browser, atau menekan tombol F5 pada keyboard (jika menggunakan laptop)</li>
                <li>Gunakan tombol reset <i>(terdapat pada sisi kanan atas tiap Meja)</i> untuk melakukan input ulang pada peserta yang sama jika terjadi banyak kesalahan</li>
                <li>Periksa dengan teliti data peserta yang ingin diinput, karena ketika disubmit data peserta tidak dapat diubah secara langsung</li>
                <li>Jika nama atau data peserta tidak muncul pada antrian, namun sudah melakukan pemeriksaan pada Meja sebelumnya, pindah ke halaman Dashboard terlebih dahulu, kemudian kembali ke halaman Meja anda bertugas</li>
                <li>Lakukan pergantian nama petugas pada opsi <b>Edit Petugas</b> yang terdapat pada sisi kiri atas ketika dilakukan <i>shift</i> atau pergantian petugas dalam satu perangkat yang sama</li>
              </ol>

              <ol v-if="role === 'admin'">
                <li>Akun ini tidak dapat dilakukan untuk melakukan input data atau pemeriksaan peserta</li>
                <li>Akun ini dapat menambah atau menghapus akun petugas, maupun akun manajer yang lain</li>
                <li>Jangan berikan informasi akun ini kepada pihak yang tidak berwenang</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default{
  name:"Dashboard",
  created() {
    (this.role = this.$store.state.currentUser.role);
    if(this.role === "petugas"){
      (this.nama = this.$store.state.petugas.nama),
      (this.lokasi = this.$store.state.petugas.lokasi)
    }else if(this.role === "admin"){
      (this.nama = "Admin"),
      (this.lokasi = "KPFT")
    }
    
  }
};

</script>
