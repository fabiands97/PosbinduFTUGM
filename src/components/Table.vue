<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Meja 1 : Pendaftaran <i>(Daftar peserta)</i>
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
      <font color="red">Panduan Pengecekan Data Peserta</font>
      <ul>
      <li>Silahkan periksa apakah nama atau identitas peserta
      terdapat pada data atau tidak.</li>
      <li>Jika tidak ada, pilih 
      <router-link to="/daftaruser">
        <font color="#00A65A"><u>'Registrasi Baru'</u></font>
      </router-link>
      <i>
        (klik tulisan ini atau pilih opsi di sebelah kiri)
      </i></li>
    </ul>
    </div>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="card">
                <div class="card-body">
                     <div class="col-xs-12">
         <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6">
        <b-form-group label-cols-sm="3" label="Filter" class="mb-0">
          <b-input-group>
            <b-form-input style='width:100%' v-model="filter" placeholder="Ketik untuk mencari peserta"></b-form-input>
            <b-input-group-append>
              <b-button class="btn btn-danger" :disabled="!filter" @click="filter = ''">Hapus</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <!--<b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Sort" class="mb-0">
          <b-input-group >
            <b-form-select v-model="sortBy" :options="sortOptions">
              <option slot="first" :value="null">-- none --</option>
            </b-form-select>
            <b-form-select v-model="sortDesc" :disabled="!sortBy" slot="append">
              <option :value="false">Asc</option> <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option> <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col> -->
    </b-row>

    <!-- Main table element -->
    <b-table
      id="my-table"
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      @filtered="onFiltered"
      ref="table"
    >
 
      <template slot="isActive" slot-scope="row">
        {{ row.value ? 'Yes :)' : 'No :(' }}
      </template>

      <template slot="actions" slot-scope="row">
           <button  v-on:click="addToAntrian(row.item.id)" class="btn btn-success"><i class="fa fa-plus"> Antrian</i> </button>
       <!-- <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
          Info modal
        </b-button>
        <b-button size="sm" @click="row.toggleDetails">
          {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button> -->
      </template>

      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <!-- Info modal -->
    <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
      <pre>{{ infoModal.content }}</pre>
    </b-modal>
  </b-container>
           </div>

        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      items: null,
      fields: [
        {
          key: "NoIdentitas",
          label: "No Identitas",
          sortable: true,
          class: "text-center"
        },
        { key: "Nama", label: "Nama" },
        { key: "actions", label: "Actions" }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
      }
    };
  },

  beforeCreate() {
    axios
      .get("http://52.187.24.10:8080/api/v1/petugas/daftarpeserta")
      .then(response => (this.items = response.data));
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items

    this.totalRows = this.items.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    addToAntrian(id){
        var credentials = {
          userId: id,
          Lokasi: this.$store.state.petugas.lokasi
        }
        if(credentials.Lokasi){
       axios.post('http://52.187.24.10:8080/api/v1/petugas/antrian', credentials)
            .then((response) => {
                alert("Sukses menambahkan ke antrian")
                this.$router.push('/Users')
            })
            .catch(() =>{
                 alert("Gagal menambahkan ke antrian")
            })}else{
              alert("Masukan detail Petugas")
            }

    }
  }
};
</script>