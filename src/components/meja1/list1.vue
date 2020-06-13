<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
       Meja 2 : Wawancara
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
      <font color="red">Panduan Antrian pada Meja 2</font>
      <ul>
        <li>Ketikkan nama atau identitas peserta yang akan diwawancarai</li>
        <li>Pilih tombol
        <font color="#00A65A"><b><i>'Input'</i></b></font>
          jika ingin memasukkan data peserta</li>
        <li>Pilih tombol 
        <font color="#3C8DBC"><b><i>'Next'</i></b></font>
         jika peserta ingin tidak ingin melakukan pemeriksaan di Meja 2</li>
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
            <b-form-input style='width:100%' v-model="filter" placeholder="Ketik untuk mencari"></b-form-input>
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
      </b-col> -->

      <!-- <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Sort direction" class="mb-0">
          <b-input-group>
            <b-form-select v-model="sortDirection" slot="append">
              <option value="asc">Asc</option> <option value="desc">Desc</option>
              <option value="last">Last</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col> -->

      <!-- <b-col md="6" class="my-1">
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
        <router-link :to="{name: 'Input1', params: {user: row.item, nim : row.item['user.NoIdentitas']}}" class="btn btn-success"><i class="fa fa-edit">Input</i> </router-link>
           <b-button @click="nextMeja(row.item.userId)" class="btn btn-primary">
          <i class="fa fa-arrow-right">Next</i>
        </b-button>
   
     <!--   <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
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
      lokasi: null,
      items: null,
      fields: [
        {
          key: "user.NoIdentitas",
          label: "No Identitas",
          sortable: true,
          class: "text-center"
        },
        { key: "user.Nama", label: "Nama",
          sortable: true },
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
    //this.nama = this.$store.state.petugas.nama,
      this.lokasi = this.$store.state.petugas.lokasi
    if(this.lokasi){
    axios
      .get("http://52.187.24.10:8080/api/v1/petugas/antrian/meja2/"+this.lokasi)
      .then(response => (this.items = response.data));}else{
        alert("Silahkan pilih lokasi!")
        this.$router.push({path: '/petugas'});
      }
    
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
    nextMeja(userid){
            var user = {
              userId : userid
            }
             axios.post('http://52.187.24.10:8080/api/v1/petugas/antrian/meja2/next', user)
            .then(() => {
                this.$router.push('/list1')
                alert("Melanjutkan antrian peserta ke Meja 3")
                this.fetchAntrian()
                
            })
            .catch((e) =>{
              console.log(e)
                 alert("Gagal menambahkan ke antrian")
            })

    },
    fetchAntrian(){
      this.lokasi = this.$store.state.petugas.lokasi
    if(this.lokasi){
    axios
      .get("http://52.187.24.10:8080/api/v1/petugas/antrian/meja2/"+this.lokasi)
      .then(response => (this.items = response.data));}else{
        alert("Silahkan pilih lokasi!")
        this.$router.push({path: '/petugas'});
      }
    }
  }
};
</script>