<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Meja 2 : Wawancara</h1>
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
      <font color="red">Panduan pengisian Meja 2</font>
      <br>
      <ul>
        <li>Bagian yang <b>wajib diisi</b> adalah <u>Faktor Risiko PTM</u></li>
        <li>Jika terdapat catatan lain, isikan pada <b>kolom catatan</b> pada bagian paling bawah</li>
        <li><b>Kosongkan</b> kolom catatan jika tidak ada tambahan catatan</li>
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

          <form role="form" style="margin-left:10px">
            <div class="box-body">
          <div class="box-header with-border">
            <h3 class="box-title"><b>Faktor Risiko PTM / Gaya Hidup</b></h3>
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
          
              <div>
                <label>Apakah Anda Merokok:<font color="red">*</font></label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apamerokok"
                      id="apamerokok1"
                      value="true"
                      v-model="user.Merokok"
                    >
                    <label class="form-check-label" for="apamerokok1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apamerokok"
                      id="apamerokok2"
                      value="false"
                      v-model="user.Merokok"
                    >
                    <label class="form-check-label" for="apamerokok2">Tidak</label>
                  </div>
                </div>
              </div>

              <div>
                <label>Apakah Anda Mengkonsumsi alkohol:<font color="red">*</font></label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apaalkohol"
                      id="apaalkohol1"
                      value="true"
                      v-model="user.KonsumsiAlkohol"
                    >
                    <label class="form-check-label" for="apaalkohol1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apaalkohol"
                      id="apaalkohol2"
                      value="false"
                      v-model="user.KonsumsiAlkohol"
                    >
                    <label class="form-check-label" for="apaalkohol2">Tidak</label>
                  </div>
                </div>
              </div>

              <div>
                <label>Apakah Anda Kurang aktifitasi fisik: (kurang dari 150 menit per minggu)<font color="red">*</font></label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apaaktifitas"
                      id="apaaktifitas1"
                      value="true"
                      v-model="user.KurangAktifitas"
                    >
                    <label class="form-check-label" for="apaaktifitas1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apaaktifitas"
                      id="apaaktifitas2"
                      value="false"
                      v-model="user.KurangAktifitas"
                    >
                    <label class="form-check-label" for="apaaktifitas2">Tidak</label>
                  </div>
                </div>
              </div>

              <div>
                <label>Apakah Anda Kurang makan sayur dan buah: (kurang dari 5 porsi sehari)<font color="red">*</font></label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apasayurbuah"
                      id="apasayurbuah1"
                      value="true"
                      v-model="user.KurangMakanSayurBuah"
                    >
                    <label class="form-check-label" for="apasayurbuah1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apasayurbuah"
                      id="apasayurbuah2"
                      value="false"
                      v-model="user.KurangMakanSayurBuah"
                    >
                    <label class="form-check-label" for="apasayurbuah2">Tidak</label>
                  </div>
                </div>
              </div>

              <!-- <div>
                <label>Apakah Anda Sulit tidur dan nafsu makan turun:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apasulittidur"
                      id="apasulittidur1"
                      value="true"
                      v-model="user.SulitTidurNafsuMakanTurun"
                    >
                    <label class="form-check-label" for="apasulittidur1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="apasulittidur"
                      id="apasulittidur2"
                      value="false"
                      v-model="user.SulitTidurNafsuMakanTurun"
                    >
                    <label class="form-check-label" for="apasulittidur2">Tidak</label>
                  </div>
                </div>
              </div> -->
            </div>

              <br>
              <br>
            <div class="box-body">
            <table style="width:100%">
            <tr>
            <td>
              <div class="box-header with-border">
                <h3 class="box-title"><b>Riwayat PTM Pada Diri Sendiri :</b></h3>
              </div>
            </td>
            <td>
              <div class="box-header with-border">
                <h3 class="box-title"><b>Riwayat PTM Pada Orang Tua :</b></h3>
              </div>
            </td>
            </tr>
            <th><br></th>
            
              <tr>
              <td>
              <div>
                <label>Diabetes:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="diabetesdiri"
                      id="diabetesdiri1"
                      value="true"
                      v-model="ptmdiri.Diabetes"
                    >
                    <label class="form-check-label" for="diabetesdiri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="diabetesdiri"
                      id="diabetesdiri2"
                      value="false"
                      v-model="ptmdiri.Diabetes"
                    >
                    <label class="form-check-label" for="diabetesdiri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
            <td>
              <div>
                <label>Diabetes:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="diabetesortu"
                      id="diabetesortu1"
                      value="true"
                      v-model="ptmortu.Diabetes"
                    >
                    <label class="form-check-label" for="diabetesortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="diabetesortu"
                      id="diabetesortu2"
                      value="false"
                      v-model="ptmortu.Diabetes"
                    >
                    <label class="form-check-label" for="diabetesortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label>Hipertensi:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="hipertensidiri"
                      id="hipertensidiri1"
                      value="true"
                      v-model="ptmdiri.Hipertensi"
                    >
                    <label class="form-check-label" for="hipertensidiri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="hipertensidiri"
                      id="hipertensidiri2"
                      value="false"
                      v-model="ptmdiri.Hipertensi"
                    >
                    <label class="form-check-label" for="hipertensidiri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>

            <td>
              <div>
                <label>Hipertensi:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="hipertensiortu"
                      id="hipertensiortu1"
                      value="true"
                      v-model="ptmortu.Hipertensi"
                    >
                    <label class="form-check-label" for="hipertensiortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="hipertensiortu"
                      id="hipertensiortu2"
                      value="false"
                      v-model="ptmortu.Hipertensi"
                    >
                    <label class="form-check-label" for="hipertensiortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label>Penyakit Jantung:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="jantungdiri"
                      id="jantungdiri1"
                      value="true"
                      v-model="ptmdiri.SakitJantung"
                    >
                    <label class="form-check-label" for="jantungdiri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="jantungdiri"
                      id="jantungdiri2"
                      value="false"
                      v-model="ptmdiri.SakitJantung"
                    >
                    <label class="form-check-label" for="jantungdiri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>

            <td>
              <div>
                <label>Penyakit Jantung:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="jantungortu"
                      id="jantungortu1"
                      value="true"
                      v-model="ptmortu.SakitJantung"
                    >
                    <label class="form-check-label" for="jantungortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="jantungortu"
                      id="jantungortu2"
                      value="false"
                      v-model="ptmortu.SakitJantung"
                    >
                    <label class="form-check-label" for="jantungortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label>Penyakit Stroke:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="strokediri"
                      id="strokediri1"
                      value="true"
                      v-model="ptmdiri.Stroke"
                    >
                    <label class="form-check-label" for="strokediri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="strokediri"
                      id="strokediri2"
                      value="false"
                      v-model="ptmdiri.Stroke"
                    >
                    <label class="form-check-label" for="strokediri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>

            <td>
              <div>
                <label>Penyakit Stroke:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="strokeortu"
                      id="strokeortu1"
                      value="true"
                      v-model="ptmortu.Stroke"
                    >
                    <label class="form-check-label" for="strokeortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="strokeortu"
                      id="strokeortu2"
                      value="false"
                      v-model="ptmortu.Stroke"
                    >
                    <label class="form-check-label" for="strokeortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label>Penyakit Asma:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="asmadiri"
                      id="asmadiri1"
                      value="true"
                      v-model="ptmdiri.Asma"
                    >
                    <label class="form-check-label" for="asmadiri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="asmadiri"
                      id="asmadiri2"
                      value="false"
                      v-model="ptmdiri.Asma"
                    >
                    <label class="form-check-label" for="asmadiri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>

            <td>
              <div>
                <label>Penyakit Asma:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="asmaortu"
                      id="asmaortu1"
                      value="true"
                      v-model="ptmortu.Asma"
                    >
                    <label class="form-check-label" for="asmaortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="asmaortu"
                      id="asmaortu2"
                      value="false"
                      v-model="ptmortu.Asma"
                    >
                    <label class="form-check-label" for="asmaortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label>Penyakit Kanker:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kankerdiri"
                      id="kankerdiri1"
                      value="true"
                      v-model="ptmdiri.Kanker"
                    >
                    <label class="form-check-label" for="kankerdiri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kankerdiri"
                      id="kankerdiri2"
                      value="false"
                      v-model="ptmdiri.Kanker"
                    >
                    <label class="form-check-label" for="kankerdiri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>

            <td>
              <div>
                <label>Penyakit Kanker:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kankerortu"
                      id="kankerortu1"
                      value="true"
                      v-model="ptmortu.Kanker"
                    >
                    <label class="form-check-label" for="kankerortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kankerortu"
                      id="kankerortu2"
                      value="false"
                      v-model="ptmortu.Kanker"
                    >
                    <label class="form-check-label" for="kankerortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>

          <tr>
            <td>
              <div>
                <label>Kolesterol Tinggi:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kolesteroldiri"
                      id="kolesteroldiri1"
                      value="true"
                      v-model="ptmdiri.KolesterolTinggi"
                    >
                    <label class="form-check-label" for="kolesteroldiri1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kolesteroldiri"
                      id="kolesteroldiri2"
                      value="false"
                      v-model="ptmdiri.KolesterolTinggi"
                    >
                    <label class="form-check-label" for="kolesteroldiri2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>

            <td>
              <div>
                <label>Kolesterol Tinggi:</label>
                <div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kolesterolortu"
                      id="kolesterolortu1"
                      value="true"
                      v-model="ptmortu.KolesterolTinggi"
                    >
                    <label class="form-check-label" for="kolesterolortu1">Ya</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="kolesterolortu"
                      id="kolesterolortu2"
                      value="false"
                      v-model="ptmortu.KolesterolTinggi"
                    >
                    <label class="form-check-label" for="kolesterolortu2">Tidak</label>
                  </div>
                </div>
              </div>
              <br>
            </td>
          </tr>
            <!-- /.box-body -->       
          </table>
          </div>

              <div class="form-group" style="margin-left:10pt;margin-right:10pt">
                <label for="catatan2">Catatan tambahan</label>
                <textarea class="form-control" id="catatan2" placeholder="Kosongkan jika tidak ada" v-model="user.CatatanMeja2"></textarea>
              </div>

            <div class="box-footer">
              <button type="button" class="btn btn-primary" v-on:click="simpanMeja1">Submit</button>
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
  name: "Input1",
  data() {
    return {
      x: null,
      y: null,
      user: {
        userId: null,
        Merokok: null,
        KonsumsiAlkohol: null,
        KurangAktifitas: null,
        KurangMakanSayurBuah: null,
        SulitTidurNafsuMakanTurun: null,
        LokasiPeriksa: null,
        PemeriksaMeja2: null,
        CatatanMeja2:null
      },

      ptmdiri: {
        Diabetes:null,
        SakitJantung:null,
        Hipertensi:null,
        KolesterolTinggi:null,
        Asma:null,
        Stroke:null,
        Kanker:null,
        IdUser:null
      },

      ptmortu: {
        Diabetes:null,
        SakitJantung:null,
        Hipertensi:null,
        KolesterolTinggi:null,
        Asma:null,
        Stroke:null,
        Kanker:null,
        IdUser:null
      }
    };
  },
  created() {
    this.user.userId = this.$route.params.user.userId;
    this.user.LokasiPeriksa = this.$store.state.petugas.lokasi;
    this.user.PemeriksaMeja2 = this.$store.state.petugas.nama;
    this.x = this.$route.params.user;
    this.y = this.$route.params.nim;



     console.log("lokasi"+this.user.LokasiPeriksa)
  },
  methods: {

    simpanMeja1(){
      // alert(this.user.userId)
      // console.log(this.user.userId);

      this.ptmdiri.IdUser = this.user.userId;
      this.ptmortu.IdUser = this.user.userId;
      if(
        this.user.userId && 
        this.user.KonsumsiAlkohol && 
        this.user.Merokok && 
        this.user.KurangAktifitas && 
        this.user.KurangMakanSayurBuah && 
        this.user.LokasiPeriksa
        ){
       axios.post('http://52.187.24.10:8080/api/v1/petugas/input/pengukuranptm/meja2', this.user)
            .then(() => {
                alert("Sukses menambahkan data pada Meja 2");
                this.$router.push('/list1');

                
                  let res = axios.post('http://52.187.24.10:8080/api/v1/petugas/riwayatptm/sendiri', this.ptmdiri);
                  console.log(res);
                
                  let res2 = axios.post('http://52.187.24.10:8080/api/v1/petugas/riwayatptm/keluarga', this.ptmortu);
                  console.log(res2); 
                
            })
            .catch(() =>{
                 alert("Gagal menambahkan ke antrian")
            })}else{
              alert("\t\t\tIsikan data dengan benar !\t\t\t\n\tPeriksa panduan pengisian di bagian atas.\t")
            }
    }

  }
};
</script>