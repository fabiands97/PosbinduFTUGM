<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="/img/temp/Logo UGM.png" class="img-circle" alt="User Image" />
          <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        </div>
        <div class="pull-left info">
          <p>{{nama}}</p>
          <!-- Status -->
          <a>
            <i class="fa fa-circle text-success"></i>
            {{lokasi}}
          </a>
          <router-link to="/petugas"> 
          <a>
            <i class="fa fa-edit text-success"></i> Edit Petugas
          </a>
          </router-link>
        </div>
      </div>

      <!-- search form (Optional)
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat">
              <i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>-->
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li class="header">
          <b>MENU</b>
        </li>
        <!-- Optionally, you can add icons to the links -->
        <!-- <router-link
          v-if="role === 'admin'"
          tag="li"
          to="/"
          exact
          v-on:click="toggleTree(sidebarMenu.dashboard)"
        > -->
        <li
          class="treeview"
          v-bind:class="{ 'active': sidebarMenu.lnk6.isActive }"
          v-on:click="toggleTree(sidebarMenu.lnk6) "
          v-if="role === 'admin'"
        >

          <a>
            <i class="fa fa-bar-chart"></i>
            <span>Grafik Kesehatan</span>
            <span class="pull-right-container">
              <i
                class="fa fa-angle-left pull-right"
                v-bind:class="{ 'treeview-arrow': sidebarMenu.lnk5.treeOpen }"
              ></i>
            </span>
          </a>
        <!-- </router-link> -->
        <ul class="treeview-menu" v-bind:class="{ 'menu-open': sidebarMenu.lnk6.treeOpen }">
            <router-link tag="li" to="/imt" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-child"></i>
                <span>IMT</span>
              </a>
            </router-link>

           <!--- <router-link tag="li" to="/asamurat" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-child"></i>
                <span>Asam Urat</span>
              </a>
            </router-link> -->
            <router-link tag="li" to="/guladarah" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-adjust"></i>
                <span>Gula Darah</span>
              </a>
            </router-link>
            <router-link tag="li" to="/kolesterol" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-cutlery"></i>
                <span>Kolesterol</span>
              </a>
            </router-link>
            <router-link tag="li" to="/tekanandarah" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-stethoscope"></i>
                <span>Tekanan Darah</span>
              </a>
            </router-link>
            <router-link tag="li" to="/peserta" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-line-chart"></i>
                <span>Statistik Peserta</span>
              </a>
            </router-link>
          </ul>
        </li>


        <li
          class="treeview"
          v-bind:class="{ 'active': sidebarMenu.lnk5.isActive }"
          v-on:click="toggleTree(sidebarMenu.lnk5) "
          v-if="role === 'petugas'"
        >
          <a href="#">
            <i class="fa fa-link"></i>
            <span>Meja 1 Registrasi</span>
            <span class="pull-right-container">
              <i
                class="fa fa-angle-left pull-right"
                v-bind:class="{ 'treeview-arrow': sidebarMenu.lnk5.treeOpen }"
              ></i>
            </span>
          </a>
          <ul class="treeview-menu" v-bind:class="{ 'menu-open': sidebarMenu.lnk5.treeOpen }">
            <router-link tag="li" to="/Users" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-users"></i>
                <span>Pengguna Terdaftar</span>
              </a>
            </router-link>

            <router-link tag="li" to="/daftaruser" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-child"></i>
                <span>Registrasi Baru</span>
              </a>
            </router-link>
          </ul>
        </li>

        <router-link
          v-if="role === 'petugas'"
          tag="li"
          to="/list1"
          exact
          v-on:click="toggleTree(sidebarMenu.users)"
        >
          <a>
            <i class="fa fa-clipboard"></i>
            <span>Meja 2 Wawancara</span>
          </a>
        </router-link>

        <router-link
          v-if="role === 'petugas'"
          tag="li"
          to="/list2"
          exact
          v-on:click="toggleTree(sidebarMenu.users)"
        >
          <a>
            <i class="fa fa-stethoscope"></i>
            <span>Meja 3 Pengukuran Dasar</span>
          </a>
        </router-link>

        <router-link
          v-if="role === 'petugas'"
          tag="li"
          to="/list3"
          exact
          v-on:click="toggleTree(sidebarMenu.users)"
        >
          <a>
            <i class="fa fa-plus-square"></i>
            <span>Meja 4 Pengecekan Darah</span>
          </a>
        </router-link>
        <router-link
          tag="li"
          to="/list4"
          exact
          v-on:click="toggleTree(sidebarMenu.users)"
          v-if="role === 'petugas'"
        >
          <a>
            <i class="fa fa-user-md"></i>
            <span>Meja 5 Analisis</span>
          </a>
        </router-link>
        <li
          v-if="role === 'admin'"
          class="treeview"
          v-bind:class="{ 'active': sidebarMenu.lnk4.isActive }"
          v-on:click="toggleTree(sidebarMenu.lnk4) "
        >
          <a href="#">
            <i class="fa fa-link"></i>
            <span>Manajemen Petugas</span>
            <span class="pull-right-container">
              <i
                class="fa fa-angle-left pull-right"
                v-bind:class="{ 'treeview-arrow': sidebarMenu.lnk4.treeOpen }"
              ></i>
            </span>
          </a>
          <ul class="treeview-menu" v-bind:class="{ 'menu-open': sidebarMenu.lnk4.treeOpen }">
            <router-link
              tag="li"
              to="/listpetugas"
              exact
              v-on:click="toggleTree(sidebarMenu.users)"
            >
              <a>
                <i class="fa fa-book"></i>
                <span>List Petugas</span>
              </a>
            </router-link>
            <router-link tag="li" to="/addpetugas" exact v-on:click="toggleTree(sidebarMenu.users)">
              <a>
                <i class="fa fa-plus"></i>
                <span>Add Petugas</span>
              </a>
            </router-link>
          </ul>
        </li>

        <router-link tag="li" to="/logout" exact v-on:click="toggleTree(sidebarMenu.users)">
          <a>
            <i class="fa fa-sign-out"></i>
            <span>Logout</span>
          </a>
        </router-link>
        <!--  <li class="treeview" v-bind:class="{ 'active': sidebarMenu.lnk3.isActive }" v-on:click="toggleTree(sidebarMenu.lnk3)" >
            <a href="#"><i class="fa fa-link"></i> <span>Meja 1</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right" v-bind:class="{ 'treeview-arrow': sidebarMenu.lnk3.treeOpen }"></i>
              </span>
            </a>
            <ul class="treeview-menu" v-bind:class="{ 'menu-open': sidebarMenu.lnk3.treeOpen }">
              <router-link tag="li" to="/list1" exact v-on:click="toggleTree(sidebarMenu.users)">
            <a><span>Antrian</span></a>
          </router-link>
              <li><a href="#">Link in level 2</a></li>
            </ul>
          </li>
          <li class="treeview" v-bind:class="{ 'active': sidebarMenu.lnk4.isActive }" v-on:click="toggleTree(sidebarMenu.lnk4)" >
            <a href="#"><i class="fa fa-link"></i> <span>Multilevel</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right" v-bind:class="{ 'treeview-arrow': sidebarMenu.lnk4.treeOpen }" ></i>
              </span>
            </a>
            <ul class="treeview-menu" v-bind:class="{ 'menu-open': sidebarMenu.lnk4.treeOpen }" >
              <li><a href="#">Link in level 2</a></li>
              <li><a href="#">Link in level 2</a></li>
            </ul>
          </li>
          <li v-bind:class="{ active: sidebarMenu.lnk5.isActive }" v-on:click="toggleTree(sidebarMenu.lnk5)"><a href="#"><i class="fa fa-link"></i> <span>Link</span></a></li>
        -->
      </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "MainSidebar",
  data() {
    return {
      sidebarMenu: {
        dashboard: {
          isActive: true,
          treeOpen: false
        },
        users: {
          isActive: false,
          treeOpen: false
        },
        lnk3: {
          isActive: false,
          treeOpen: false
        },
        lnk4: {
          isActive: false,
          treeOpen: false
        },
        lnk5: {
          isActive: false,
          treeOpen: false
        },
        lnk6: {
          isActive: false,
          treeOpen: false
        }
      },
      nama: null,
      lokasi: null,
      role: null
    };
  },
  created() {
    (this.role = this.$store.state.currentUser.role);
    if(this.role === "petugas"){
      (this.nama = this.$store.state.petugas.nama),
      (this.lokasi = this.$store.state.petugas.lokasi)
    }else if(this.role === "admin"){
      (this.nama = "Admin"),
      (this.lokasi = "KPFT")
    }
    
  },
  methods: {
    toggleTree: function(lnk) {
      let treeTemp = lnk.treeOpen;
      Object.keys(this.sidebarMenu).forEach(item => {
        this.sidebarMenu[item].isActive = false;
      });
      lnk.isActive = true;
      lnk.treeOpen = !treeTemp;
    }
  }
};
</script>
