<template>
  <div id="app">
    <div class="skin-blue sidebar-mini" v-bind:class="{'sidebar-collapse':sidebarCollapse, 'sidebar-open':!sidebarCollapse }" style="height: auto;">
      <div class="wrapper" style="height: auto;">
        <adminheader v-on:toggleSidebar="sidebarCollapse = !sidebarCollapse" >
          
        </adminheader>
        <mainsidebar></mainsidebar>
        <router-view></router-view>
        <mainfooter></mainfooter>
      </div>
     <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
  </div>
</template>

<script>
import AdminHeader from './AdminHeader.vue'
import MainSidebar from './MainSidebar.vue'
import MainFooter from './MainFooter.vue'

import Dashboard from './Dashboard.vue'
import Users from './users/Users.vue'


export default {
  name: 'App',
  components: {
    'adminheader': AdminHeader,
    'mainsidebar': MainSidebar,
    'mainfooter': MainFooter,
    'dashboard': Dashboard,
    'users': Users
  },
  data() {
    return {
      sidebarCollapse:false
    }
  }
}

</script>
