<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>Meja 5 : Analisis Kesehatan</h1>
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
      <font color="red">Panduan Konsultasi pada Meja 5</font>
      <br>
      <ol>
        <li>Panduan keterangan warna :
          <br><i class="fas fa-square fa-2x" style="color:#FF0000;"></i>&ensp;Tidak ideal atau tidak normal
          <br><i class="fas fa-square fa-2x" style="color:#FFFF00;"></i>&ensp;Perlu diwaspadai (batas toleransi)
          <br><i class="fas fa-square fa-2x" style="color:#00FF00;"></i>&ensp;Ideal atau normal (aman)
        </li>   
        <li>Petugas dapat memberikan edukasi selain yang terdapat pada analisis sistem</li>
        <li>Isi kolom catatan jika terdapat beberapa catatan yang ingin ditambahkan</li>
        <li>Kosongkan kolom catatan bila tidak ada yang ingin ditambahkan</li>
        <li>Pilih opsi rujukan bila peserta membutuhkan rujukan atau penanganan medis lebih lanjut</li>   
      </ol>
      </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="col-xs-12">
        <div class="box box-primary">
          <div class="box-header">
            <h2 class="box-title"><b>PESERTA</b></h2><br>
            <!-- <br>Nama : {{ x["user.Nama"] }}
            <br>NIM : {{ y }}
            <br>Tanggal Periksa : {{ date }} -->
            <div>
              <table class="table-responsive" border="0">
              <tr>
                <td>Nama</td>
                <td> : </td>
                <td>{{ x["user.Nama"] }}</td>
              </tr>
              <tr>
                <td>NIM</td>
                <td> : </td>
                <td>{{y}}</td>
              </tr>
              <tr>
                <td>Tanggal periksa &ensp;</td>
                <td> : &ensp;</td>
                <td>{{date}}</td>
              </tr>
              </table>
            </div>
            <br><br><br>

            <div style="margin-left:5pt;margin-right:5pt;">
            <div class="table-responsive">
              <div style="
                margin-right:30%;
                margin-top:10pt;
                padding-left:10pt;
                background-color:#3C8DBC;
                color:#FFFFFF;
                width:50%;
                height:30px;"><h4 style="color:#FFFFFF">Hasil Pemeriksaan Kesehatan</h4>
              </div>
            <table class="table table-striped table-hover" align="center">
            <thead>
              <tr>
              <td><b>Pengukuran</b></td>
              <td><b>Hasil</b></td>
              <td></td>
              <td><b>Keterangan</b></td>
              <td><b>Komplikasi / Menyebabkan :</b></td>
              </tr>
            </thead>
            <tr>
              <br>
            </tr>
            <tbody>
            <tr>
              <td>IMT</td>
              <td>{{riwayatpemeriksaan.IMT}}</td>
              <td v-bind:style="warna1"><i class="fas fa-square fa-2x"></i></td>
              <td>{{hasil1}}</td>
              <td>{{komp1}}</td>
            </tr>

            <tr>
              <td>Lingkar Perut</td>
              <td>{{riwayatpemeriksaan.LingkarPerut}} cm</td>
              <td v-bind:style="warna2"><i class="fas fa-square fa-2x"></i></td>
              <td>{{hasil2}}</td>
              <td>{{komp2}}</td>
            </tr>

            <tr>
              <td>Tekanan Darah</td>
              <td>{{riwayatpemeriksaan.TekananDarahSistol}} / {{riwayatpemeriksaan.TekananDarahDiastol}}</td>
              <td v-bind:style="warna3"><i class="fas fa-square fa-2x"></i></td>
              <td>{{hasil3}}</td>
              <td>{{komp3}}</td>
            </tr>

            <tr>
              <td>Kolesterol</td>
              <td>{{riwayatpemeriksaan.Kolesterol}} mg/dL</td>
              <td v-bind:style="warna4"><i class="fas fa-square fa-2x"></i></td>
              <td>{{hasil4}}</td>
              <td>{{komp4}}</td>
            </tr>
            <tr>
              <td>Gula Darah</td>
              <td>{{riwayatpemeriksaan.GulaDarah}} mg/dL</td>
              <td v-bind:style="warna5"><i class="fas fa-square fa-2x"></i></td>
              <td>{{hasil5}}</td>
              <td>{{komp5}}</td>
            </tr>
            <tr v-bind:style="asam">
              <td>Asam Urat</td>
              <td>{{riwayatpemeriksaan.AsamUrat}} mg/dL</td>
              <td></td>
              <td> - </td>
              <td> - </td>
            </tr>     
            </tbody>  
          </table>
        </div>

        <br><br>
      <div class="table-responsive">
        <div style="
          margin-right:30%;
          margin-top:10pt;
          padding-left:10pt;
          background-color:#3C8DBC;
          color:#FFFFFF;
          width:50%;
          height:30px;"><h4>Faktor Risiko PTM</h4></div>
            <table class="table table-striped table-hover" align="left">
              <thead>
                <tr>
                <td width="40%"><b>Faktor Risiko :</b>
                  <br><small><i>Keterangan :</i><br>
                    <i class="fas fa-square fa-1x" style="color:#FF0000"></i> : Ya  &ensp;
                    
                    <i class="fas fa-square fa-1x" style="color:#00FF00"></i> : Tidak</small>
                </td>
                <td width="40%"><b>Menyebabkan : </b></td>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td><i class="fas fa-square fa-2x" v-bind:style="warnafaktor1"></i>   Merokok</td>
                <td>{{faktor1}}</td>
              </tr>

              <tr>
                <td><i class="fas fa-square fa-2x" v-bind:style="warnafaktor2"></i>   Konsumsi Alkohol</td>
                <td>{{faktor2}}</td>
              </tr>

              <tr>
                <td><i class="fas fa-square fa-2x" v-bind:style="warnafaktor3"></i>   Aktivitas Fisik</td>
                <td>{{faktor3}}</td>
              </tr>

              <tr>
                <td><i class="fas fa-square fa-2x" v-bind:style="warnafaktor4"></i>   Kurang konsumsi Sayur dan Buah</td>
                <td>{{faktor4}}</td>
              </tr>
            </tbody>
            </table>
          </font>
          </div>

          <br><br>
          <div class="table-responsive" style="white-space:pre-line;">
            <div style="
              margin-right:30%;
              margin-top:10pt;
              padding-left:10pt;
              background-color:#3C8DBC;
              color:#FFFFFF;
              width:50%;
              height:30px;"><h4>Riwayat PTM yang dimiliki</h4></div>
                <table class="table table-striped table-hover" align="left">
                  <thead><br></thead>
                  <tbody>
                  <tr>
                    <td width="40%"><b>Pada diri sendiri :</b>
                      {{ptmdiri}}
                    </td>
                    <td width="40%"><b>Pada orang tua :</b>
                      {{ptmortu}}
                    </td>
                  </tr>
                  <!-- <tr>
                    <td><br><i>Catatan di Meja 2 :</i><br>
                      {{riwayatpemeriksaan.CatatanMeja2}}
                    </td>
                    <td></td>
                  </tr> -->
                </tbody>
                </table>
                <br><i>Catatan di Meja 2 :</i>
                      {{riwayatpemeriksaan.CatatanMeja2}}
          </div>
          <br><br>

          <div class="table-responsive" style="white-space:pre-line;">
            <div style="
              margin-right:30%;
              margin-top:10pt;
              padding-left:10pt;
              background-color:#3C8DBC;
              color:#FFFFFF;
              width:50%;
              height:30px;"><h4>Kesimpulan</h4></div>
            <table class="table table-striped table-hover" align="left">
              <thead><br></thead>
              <tbody>
              <tr>
                <td width="40%"><b>Sehat :</b>&ensp;<i class="fas fa-square fa-2x" style="color:#00FF00"></i>
                  {{KesimpulanSehat}}
                </td>
                <td width="40%"><b>Batas toleransi :</b>&ensp;<i class="fas fa-square fa-2x" style="color:#FFFF00"></i>
                  {{KesimpulanToleransi}}
                </td>
              </tr>
              <tr>
                <td><b>Masalah yang timbul : </b>
                    {{KesimpulanMasalah}}                  
                </td>
                <td><b>Komplikasi risiko PTM :</b>
                    {{KesimpulanKomplikasi}}
                </td>
              </tr>
              <tr>
                <td><b>Faktor risiko yang perlu diwaspadai : </b>
                    {{KesimpulanFaktor}}
                </td>
                <td><b>Risiko yang timbul jika dihiraukan :</b>
                    {{KesimpulanAwas}}
                </td>
              </tr>
            </tbody>
            </table>

            <table class="table table-striped" align="left">
              <tbody>
                <tr>
                  <td>
                    <b>Rekomendasi :</b><br>
                        {{sar}}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br><br>
          <form role="form">
            <div class="box-body form-group" style="margin-left:5pt;margin-right:10pt">
                <label>Apakah peserta butuh dirujuk?</label>&ensp;
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="rujukan" id="rujukan1" value="true" v-model="rujuk" v-on:click="rujukan">
                        <label class="form-check-label" for="rujukan1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input  class="form-check-input" type="radio" name="rujukan" id="rujukan2" value="false" v-model="rujuk" v-on:click="tidakrujuk">
                        <label class="form-check-label" for="rujukan2">Tidak</label>
                  </div>
                  <br>
                  <div class="form-group" v-bind:style="catrujuk">
                    <label for="catatanrujuk">Rujukan :</label>
                      <textarea class="form-control" id="catatanrujuk" placeholder="Rujukan peserta" v-model="user.AlasanRujukan">
                      </textarea>
                  </div>
                  <br>
                  <div class="form-group">
                    <label for="catatanrujuk">Catatan :</label>
                      <textarea class="form-control" id="catatan" placeholder="Catatan" v-model="user.Catatan"></textarea>
                  </div>
            </div>
            <!-- /.box-body -->
            <div class="box-footer">
              <button type="button" class="btn btn-primary" v-on:click="simpanMeja4">Submit</button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Input4",
  data() {
    return {
      rujuk:null,
      sar:null,
      x: null,
      y: null,
      date: null,
      gender: null,
      riwayatpemeriksaan: null,
      riwayatdiri:null,
      riwayatortu:null,
      IdUser:null,
      user: {
        userId: null,
        Catatan:null,
        MasalahDitemukan: null,
        Saran:null,
        AlasanRujukan: null,
        YangMerujuk: null
        },
      asam:{
        display: "table-row"
      },
      catrujuk:{
        display: "none"
      },
      warna1:{color:"#2f383d"},warna2:{color:"#2f383d"},warna3:{color:"#2f383d"},warna4:{color:"#2f383d"},warna5:{color:"#2f383d"},
      warnafaktor1:{color: "#2f383d"},warnafaktor2:{color: "#2f383d"},warnafaktor3:{color:"#2f383d"},warnafaktor4:{color: "#2f383d"},warnafaktor5:{color: "#2f383d"},
      
      hasil1:null,
      hasil2:null,
      hasil3:null,
      hasil4:null,
      hasil5:null,
      komp1:null,
      komp2:null,
      komp3:null,
      komp4:null,
      komp5:null,
      faktor1:null,
      faktor2:null,
      faktor3:null,
      faktor4:null,
      faktor5:null,
      penyebabrokok:null,
      penyebabalkohol:null,
      penyebabaktivitas:null,
      penyebabsayurbuah:null,
      KesimpulanMasalah:null,
      KesimpulanKomplikasi:null,
      KesimpulanToleransi:null,
      KesimpulanFaktor:null,
      KesimpulanAwas:null,
      KesimpulanSehat:null,
      ptmdiri:null,
      ptmortu:null
    };
  },

    

  async created() {
    this.user.userId = this.$route.params.user.userId;
    // this.user.LokasiPeriksa = this.$store.state.petugas.lokasi;
    this.user.YangMerujuk = this.$store.state.petugas.nama;

    var response = await axios.get("http://52.187.24.10:8080/api/v1/petugas/riwayatpemeriksaan/user/terakhir?id="+this.user.userId)
    // this.gender = riwayatpemeriksaan
    this.riwayatpemeriksaan = response.data;
    this.gender = this.riwayatpemeriksaan["user.JenisKelamin"];
    var as = this.riwayatpemeriksaan.AsamUrat;
    console.log(as);
    if(as == null){
      console.log("Asam urat kosong");
      this.asam.display = "none";
    }
    else if(as != null){
      this.asam.display = "table-row";
    }
    if(this.riwayatpemeriksaan.CatatanMeja2 == null){
      this.riwayatpemeriksaan.CatatanMeja2 = "-tidak ada-";
    }

    this.IdUser = this.user.userId;
    var respondiri = await axios.get("http://52.187.24.10:8080/api/v1/petugas/riwayatptm/sendiri?id=" +this.IdUser);
    this.riwayatdiri = respondiri.data;
    var ri = [];
    if(this.riwayatdiri.Diabetes == true){
      ri.push("Diabetes")
    }
    if(this.riwayatdiri.Hipertensi == true){
      ri.push("Hipertensi")
    }
    if(this.riwayatdiri.SakitJantung == true){
      ri.push("Sakit Jantung")
    }
    if(this.riwayatdiri.Stroke == true){
      ri.push("Stroke")
    }
    if(this.riwayatdiri.Asma == true){
      ri.push("Asma")
    }
    if(this.riwayatdiri.Kanker == true){
      ri.push("Kanker")
    }
    if(this.riwayatdiri.KolesterolTinggi == true){
      ri.push("Kolesterol Tinggi")
    }
    var a;
    var rdiri = "";
    for(a = 1 ; a <= ri.length ; a++){
      rdiri += a + ". " + ri[a-1] + "\n";
    }
    this.ptmdiri = rdiri;
    
    var responortu = await axios.get("http://52.187.24.10:8080/api/v1/petugas/riwayatptm/keluarga?id=" +this.IdUser);
    this.riwayatortu = responortu.data;
    var ro = [];
    if(this.riwayatortu.Diabetes == true){
      ro.push("Diabetes")
    }
    if(this.riwayatortu.Hipertensi == true){
      ro.push("Hipertensi")
    }
    if(this.riwayatortu.SakitJantung == true){
      ro.push("Sakit Jantung")
    }
    if(this.riwayatortu.Stroke == true){
      ro.push("Stroke")
    }
    if(this.riwayatortu.Asma == true){
      ro.push("Asma")
    }
    if(this.riwayatortu.Kanker == true){
      ro.push("Kanker")
    }
    if(this.riwayatortu.KolesterolTinggi == true){
      ro.push("Kolesterol Tinggi")
    }
    var rortu = "";
    for(a = 1 ; a <= ro.length ; a++){
      rortu += a + ". " + ro[a-1] + "\n";
    }
    this.ptmortu = rortu;


   
    this.x = this.$route.params.user;
    this.y = this.$route.params.nim;

    let current_datetime = new Date();
    let formatted_date = current_datetime.getDate() + " - " + (current_datetime.getMonth() + 1) + " - " + current_datetime.getFullYear();
    this.date = formatted_date;

    const aman = new Set();
    const masalah = new Set();
    const toleransi = new Set();
    const faktor = new Set();
    const komplikasi = new Set();
    const awas = new Set();
    const saran = new Set();

    var imt = this.riwayatpemeriksaan.IMT;
    switch (true) {
        case imt == null:
          this.riwayatpemeriksaan.IMT = "-";
          this.hasil1 = "belum ada data";
          break;
        case imt < 18.5:
          this.hasil1 = "Berat badan kurang";
          this.warna1.color = "#FF0000";
          this.komp1 = "Menyebabkan gangguan pertumbuhan / perkembangan";
            masalah.add(this.hasil1);
              komplikasi.add("Gangguan pertumbuhan / perkembangan");
              saran.add("Perbanyak konsumsi makanan");
              saran.add("Makan dengan teratur");
          break;
        case imt >= 18.5 && imt <23:
          this.hasil1 = "Normal";
          this.warna1.color = "#00FF00";
            aman.add("Indeks Massa Tubuh");
          break;
        case imt >= 23 && imt < 25:
          this.hasil1 = "Waspada Obesitas";
          this.warna1.color = "#FFFF00";
          this.komp1 = "Diabetes, Hipertensi, Penyakit Kronis, Kanker, Stroke";
            toleransi.add("Berat badan");
          break;
        case imt >= 25:       
          this.hasil1 = "Berat badan berlebih (Obesitas)";
          this.warna1.color = "#FF0000";
          this.komp1 = "Diabetes, Hipertensi, Penyakit Kronis, Kanker, Stroke";
            masalah.add("Obesitas");
              komplikasi.add("Diabetes");
              komplikasi.add("Hipertensi");
              komplikasi.add("Penyakit jantung");
              komplikasi.add("Kanker");
              komplikasi.add("Stroke");

              saran.add("Diet sehat dengan kalori seimbang");
              saran.add("Mempertahankan berat badan ideal");
          break;

        }

        var gen = this.gender;
        var lingkar = this.riwayatpemeriksaan.LingkarPerut;
        if (gen == "L"){
          switch (true) {
            case lingkar == null:
              this.riwayatpemeriksaan.LingkarPerut = "-";
              this.hasil2 = "Belum ada data";
              break;
            case lingkar < 90:
              this.hasil2 = "Normal";
              this.warna2.color = "#00FF00";
                aman.add("Lingkar perut");
              break;
            case lingkar >= 90:
              this.hasil2 = "Obesitas, risiko penyakit kronis";
              this.warna2.color = "#FF0000";
              this.komp2 = "Diabetes, Stroke, Penyakit Jantung, Kolesterol tinggi";
                masalah.add("Obesitas");
                masalah.add("Lingkar perut besar");
                  komplikasi.add("Diabetes");
                  komplikasi.add("Stroke");
                  komplikasi.add("Penyakit jantung");
                  komplikasi.add("Kolesterol tinggi");

                  saran.add("Diet sehat dengan kalori seimbang");
                  saran.add("Mempertahankan berat badan ideal");
              break;
            }
        }

        else {
          switch (true) {
            case lingkar == null:
              this.riwayatpemeriksaan.LingkarPerut = "-";
              this.hasil2 = "Belum ada data";
              break;
            case lingkar < 80:
              this.hasil2 = "Normal";
              this.warna2.color = "#00FF00";
              aman.add("Lingkar perut");
              break;
            case lingkar >= 80:
              this.hasil2 = "Obesitas, risiko penyakit kronis";
              this.warna2.color = "#FF0000";
                masalah.add("Obesitas");
                masalah.add("Lingkar perut besar");
                  komplikasi.add("Diabetes");
                  komplikasi.add("Stroke");
                  komplikasi.add("Penyakit jantung");
                  komplikasi.add("Kolesterol tinggi");

                  saran.add("Diet sehat dengan kalori seimbang");
                  saran.add("Mempertahankan berat badan ideal");
              break;
            }
        }

    var sistol = this.riwayatpemeriksaan.TekananDarahSistol;
    var diastol = this.riwayatpemeriksaan.TekananDarahDiastol;
    switch (true) {
        case sistol == null:
          case diastol == null:
            this.riwayatpemeriksaan.TekananDarahSistol = "-";
            this.riwayatpemeriksaan.TekananDarahDiastol = "-";
            this.hasil3 = "Belum ada data";
          break;
        case sistol <= 90:
          case diastol <= 60:
              this.hasil3 = "Hipotensi";
              this.warna3.color = "#FF0000";
              this.komp3 = "Shock";
                masalah.add("Hipotensi");
                  komplikasi.add("Mudah lemas atau shock");
                  saran.add("Makan dengan teratur");
          break;
        case sistol > 90 && sistol <= 120:
              case diastol > 60 && diastol <= 80:
                  this.hasil3 = "Normal";
                  this.warna3.color = "#00FF00";
                  aman.add("Tekanan darah");
              break;
        case sistol > 120 && sistol <= 139:
              case diastol > 80 && diastol <= 89:
                  this.hasil3 = "Prehipertensi";
                  this.warna3.color = "#FFFF00";
                  this.komp3 = "Diabetes, Penyakit Jantung, Stroke";
                    toleransi.add("Tekanan darah sedikit tinggi");                   
              break;
        case sistol >= 140:
          case diastol >= 90:
              this.hasil3 = "Hipertensi";
              this.warna3.color = "#FF0000";
              this.komp3 = "Diabetes, Penyakit Jantung, Stroke";
                masalah.add("Hipertensi");
                  komplikasi.add("Diabetes");
                  komplikasi.add("Penyakit jantung");
                  komplikasi.add("Stroke");

                  saran.add("Diet sehat dengan kalori seimbang");
                  saran.add("Mempertahankan berat badan ideal");
                  saran.add("Kurangi konsumsi garam(tidak lebih dari 1 sendok teh garam atau melebihi 2000 mg natrium/sodium per hari");
                  saran.add("Melakukan aktivitas fisik secara teratur(jalan 3 km atau olahraga 30 menit per hari)");
                  saran.add("Kurangi merokok secara perlahan dan/atau menghindari asap rokok")
                  saran.add("Mengurangi konsumsi alkohol");
          break;
      }

      var kol = this.riwayatpemeriksaan.Kolesterol;
      switch(true){
      case kol == null:
        this.riwayatpemeriksaan.Kolesterol = " - ";
        this.hasil4 = "belum ada data";
        break;
      case kol < 150:
        this.hasil4 = "Normal";
        this.warna4.color = "#00FF00";
          aman.add("Kolesterol");
        break;
      case kol >= 150 && kol <= 189:
        this.hasil4 = "Waspada Kolesterol tinggi";
        this.warna4.color = "#FFFF00";
        this.komp4 = "Diabetes, Penyakit Jantung, Stroke";
          toleransi.add("Kolesterol");
        break;
      case kol > 189:
        this.hasil4 = "Kolesterol tinggi";
        this.warna4.color = "#FF0000";
        this.komp4 = "Diabetes, Penyakit Jantung, Stroke";
          masalah.add("Kolesterol tinggi");
            komplikasi.add("Diabetes");
            komplikasi.add("Penyakit jantung");
            komplikasi.add("Stroke");

            saran.add("Diet sehat dengan kalori seimbang");
            saran.add("Mempertahankan berat badan ideal");
            saran.add("Melakukan aktivitas fisik secara teratur(jalan 3 km atau olahraga 30 menit per hari)");
        break;
      }

      var gul = this.riwayatpemeriksaan.GulaDarah;
      switch(true){
      case gul == null:
        this.riwayatpemeriksaan.GulaDarah = " - ";
        this.hasil5 = "belum ada data";
        break;
      case gul < 145:
        this.hasil5 = "Normal";
        this.warna5.color = "#00FF00";
          aman.add("Gula darah sewaktu");
        break;
      case gul >= 145 && gul < 200:
        this.hasil5 = "Waspada Gula darah tinggi";
        this.warna5.color = "#FFFF00";
        this.komp5 = "Hipertensi, Stroke, Penyakit Jantung, Obesitas";
          toleransi.add("Gula darah sewaktu");
        break;
      case gul >= 200:
        this.hasil5 = "Gula darah tinggi";
        this.warna5.color = "#FF0000";
        this.komp5 = "Hipertensi, Stroke, Penyakit Jantung, Obesitas";
          masalah.add("Gula darah tinggi");
            komplikasi.add("Hipertensi");
            komplikasi.add("Stroke");
            komplikasi.add("Penyakit jantung");
            komplikasi.add("Obesitas");

            saran.add("Diet sehat dengan kalori seimbang");
            saran.add("Mempertahankan berat badan ideal");
            saran.add("Melakukan aktivitas fisik secara teratur(jalan 3 km atau olahraga 30 menit per hari)");
        break;
      }

      var rokok = this.riwayatpemeriksaan.Merokok;
      var alkohol = this.riwayatpemeriksaan.KonsumsiAlkohol;
      var aktif = this.riwayatpemeriksaan.KurangAktifitas;
      var sayurbuah = this.riwayatpemeriksaan.KurangMakanSayurBuah;
      var sulittidur = this.riwayatpemeriksaan.SulitTidurNafsuMakanTurun;

      switch(true){
      case rokok == false:
        this.warnafaktor1.color = "#00FF00";
        break;
      case rokok == true:
        this.warnafaktor1.color = "#FF0000";
        this.faktor1 = "Kanker paru-paru, Penyakit Kronis, Hipertensi";
        faktor.add("Merokok");
          awas.add("Kanker");
          awas.add("Penyakit jantung");
          awas.add("Hipertensi");
          saran.add("Kurangi merokok secara perlahan dan/atau menghindari asap rokok");
        break;
      }

      switch(true){
      case alkohol == false:
        this.warnafaktor2.color = "#00FF00";
        break;
      case alkohol == true:
        this.warnafaktor2.color = "#FF0000";
        this.faktor2 = "Penyakit Kronis dan Hipotensi";
        faktor.add("Mengonsumsi minuman beralkohol");
          awas.add("Penyakit jantung");
          awas.add("Hipotensi");
          saran.add("Mengurangi konsumsi alkohol");
        break;
      }

      switch(true){
      case aktif == false:
        this.warnafaktor3.color = "#00FF00";
        break;
      case aktif == true:
        this.warnafaktor3.color = "#FF0000";
        this.faktor3 = "Obesitas, Hipertensi, Kolesterol tinggi";
        faktor.add("Kurang aktivitas fisik");
          awas.add("Obesitas");
          awas.add("Hipertensi");
          awas.add("Kolesterol tinggi");
          saran.add("Melakukan aktivitas fisik secara teratur(jalan 3 km atau olahraga 30 menit per hari)");
        break;
      }

      switch(true){
      case sayurbuah == false:
        this.warnafaktor4.color = "#00FF00";
        break;
      case sayurbuah == true:
        this.warnafaktor4.color = "#FF0000";
        this.faktor4 = "Penyakit kronis, Hipertensi, Kolesterol tinggi, Diabetes";
        faktor.add("Kurang konsumsi sayur dan buah");
          awas.add("Penyakit jantung");
          awas.add("Hipertensi");
          awas.add("Kolesterol tinggi");
          awas.add("Diabetes");
          saran.add("Perbanyak konsumsi buah dan sayur");
          saran.add("Makan dengan teratur");
        break;
      }


      var i;

      var ArMasalah = Array.from(masalah);
      var item1 = "";
      if (ArMasalah.length == 0){
        this.KesimpulanMasalah = "-tidak ada-";
      }
      for (i = 1; i <= masalah.size; i++) {
        item1 += i + ". " + ArMasalah[i-1] +"\n" ;
        }
      this.KesimpulanMasalah = item1;


      var ArKomplikasi = Array.from(komplikasi);
      var item2 = "";
      if (ArKomplikasi.length == 0){
        this.KesimpulanKomplikasi = "-tidak ada-";
      }
      for (i = 1; i <= komplikasi.size; i++) {
        item2 += i + ". " + ArKomplikasi[i-1] +"\n" ;
        }
      this.KesimpulanKomplikasi = item2;

      var ArToleransi = Array.from(toleransi);
      var item3 = "";
      if (ArToleransi.length == 0){
        this.KesimpulanToleransi = "-tidak ada-";
      }
      else{
        for (i = 1; i <= toleransi.size; i++) {
          item3 += i + ". " + ArToleransi[i-1] +"\n" ;
            }
          this.KesimpulanToleransi = item3;
          }

      var ArAman = Array.from(aman);
      var sehat = "";
      if (ArAman.length == 0){
        this.KesimpulanToleransi = "-tidak ada-";
      }
      else{
        for (i = 1; i <= aman.size; i++) {
          sehat += i + ". " + ArAman[i-1] +"\n" ;
            }
          this.KesimpulanSehat = sehat;
          }
      

      var ArFaktor = Array.from(faktor);
      var item4 = "";
      if (ArFaktor.length == 0){
        this.KesimpulanFaktor = "-tidak ada-";
      }
      else{
        for (i = 1; i <= faktor.size; i++) {
          item4 += i + ". " + ArFaktor[i-1] +"\n" ;
            }
          this.KesimpulanFaktor = item4;
          }


      var ArAwas = Array.from(awas);
      var item5 = "";
      if (ArAwas.length == 0){
        this.KesimpulanAwas = "-tidak ada-";
      }
      else{
        for (i = 1; i <= awas.size; i++) {
          item5 += i + ". " + ArAwas[i-1] +"\n" ;
            }
        this.KesimpulanAwas = item5;
        }

      var ArSaran = Array.from(saran);
      var sa = "";
      for(i = 1; i <= saran.size; i++){
        sa += i + ". " + ArSaran[i-1] + "\n";
      }
      console.log(sa);
      this.sar = sa;

    // this.user.MasalahDitemukan = JSON.stringify(ArMasalah);
    // this.user.Saran = JSON.stringify(ArSaran);

    this.user.MasalahDitemukan = ArMasalah.toString();
    this.user.Saran = ArSaran.toString();



  },
  methods:{
    rujukan(){
      this.catrujuk.display = "block";
    },
    tidakrujuk(){
      this.catrujuk.display = "none";
    },

    simpanMeja4(){
      // console.log(this.user.userId);
      // console.log(this.user.MasalahDitemukan);

      
      if(this.user.userId){
       axios.post('http://52.187.24.10:8080/api/v1/petugas/input/pengukuranptm/meja5', this.user)
            .then(() => {
                alert("Sukses menambahkan input Meja 5")
                this.$router.push('/list4')
                this.catrujuk.display = "none";
            })
            .catch(() =>{
                 alert("Gagal menambahkan data")
            })}else{
              alert("Masukan detail Petugas")
            }
    }
  }
};
</script>