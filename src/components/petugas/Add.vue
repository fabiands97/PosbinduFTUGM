<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Manajemen Petugas
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/" exact>
            <i class="fa fa-home"></i>
            Dashboard
          </router-link>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="col-xs-12">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Pembuatan Akun Manajer / Kader Posbindu
              <br>
              <br><br><small><div style="color:red;">CATATAN :</div>
              <i>Satu akun petugas dapat digunakan di berbagai perangkat,
                <br>Satu akun mewakili akun satu unit Posbindu</i></small></h3>
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
            <br>
            <div class="box-body">
              <div class="form-group">
                <label for="exampleInputEmail1">Username / akun login</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Gunakan format email dengan pemisah '@' (contoh : aa@bb)"
                  v-model="form.UserLogin"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password khusus 1 unit Posbindu"
                  v-model="form.Password"
                />
              </div>

              <label>Departemen</label>
              <select
                class="custom-select my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                @change="onChangeDepartemen($event)"
              >
                <option selected>Pilih lokasi tujuan Akun Posbindu</option>
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

              <label>Role (sebagai petugas atau manajer)</label>
              <select
                class="custom-select my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
                @change="onChangeRole($event)"
              >
                <option selected>Choose...</option>
                <option value="petugas">Petugas</option>
                <option value="admin">Manajer</option>
              </select>
            </div>
            <!-- /.box-body -->

            <div class="box-footer">
              <button type="button" class="btn btn-primary" v-on:click="addNewUser">Submit</button>
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
  name: "DaftarUser",
  data() {
    return {
      form: {
        Password: null,
        UserLogin: null,
        Departemen: null,
        Role: null
      }
    };
  },
  methods: {
    addNewUser() {
      console.log(this.form);
      if (this.form.Departemen && this.form.Password && this.form.UserLogin && this.form.Role) {
        axios
          .post(
            "http://52.187.24.10:8080/api/v1/manajer/manajemenpetugas",
            this.form
          )
          .then(() => {
            alert("Sukses menambahkan akun");
            this.$router.push("/listpetugas");
          })
          .catch(() => {
            alert("Gagal menambahkan akun");
          });
      } else {
        alert("Isikan data dengan benar");
      }
    },
    onChangeDepartemen(event) {
      this.form.Departemen = event.target.value;
    },

    onChangeRole(event) {
      this.form.Role = event.target.value;
    }
  }
};
</script>
