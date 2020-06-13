<template>
  <div class="offset-md-3">
    <!-- Content Header (Page header) -->


    <!-- Main content -->
    <section class="content">
      <div class="row" style=".center{margin:0 auto}">
        <div class="col-md-6">
          <div class="box box-primary">
            <div class="box-header with-border" align="center">
              <h3 class="box-title"><b>Input Nama Petugas</b></h3>
              <!-- <div class="box-tools pull-right">
                <button
                  type="button"
                  class="btn btn-box-tool"
                  v-on:click="$emit('toggleEdit')"
                  title="Close"
                >
                  <i class="fa fa-remove"></i>
                </button>
              </div> -->
            </div>
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label for="exampleInputPassword1">Nama</label>
                  <input class="form-control" id="exampleInputPassword1" placeholder="Masukkan nama anda" v-model="form.nama">
                </div>

                <label>Lokasi Periksa</label>
                <select class="custom-select col-md6" id="inlineFormCustomSelectPref" @change="onChange($event)" v-model="form.lokasi">
                  <option value="null" disabled hidden>Pilih Lokasi periksa anda saat ini</option>
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
                <br><br><br>
                <label><font color="red">Catatan :</font><br>
                  <i>Jika anda melakukan pergantian/shift petugas<br>
                  jangan lupa untuk mengganti nama petugas !</i>
                </label>
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button
                  type="submit"
                  class="btn btn-primary"
                  v-on:click="simpanPetugas"
                >Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
export default {
  name: "DaftarUser",
  data() {
    return {
      form: {
        nama: null,
        lokasi: null
      }
    };
  },
  methods: {
    simpanPetugas() {
      if(this.form.nama == null){
        alert("Masukkan nama petugas terlebih dahulu !");
      }
      else if(this.form.lokasi){
        this.$store.commit("editPetugas", this.form);
        this.$router.push({ path: "/" });
      }
      else{
        alert("Pilih lokasi anda bertugas !")

      }
    },
    onChange(event) {
            this.form.lokasi = event.target.value
        }
  }
};
</script>
