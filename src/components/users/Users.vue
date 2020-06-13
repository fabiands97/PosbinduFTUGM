<template>
  <div class="content-wrapper" style="min-height: 836px;">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Users
        <small>Peserta Terdaftar</small>
      </h1>
      <ol class="breadcrumb">
        <li>
          <router-link to="/" exact>
            <i class="fa fa-home"></i>
            Dashboard
          </router-link>
          <p id="txt" style="font-size:25px" align="right"></p>
        </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <userlist v-bind:isEdit="isEdit" v-bind:users="users" v-on:toggleEdit="isEdit = true"></userlist>
          <useredit v-bind:isEdit="isEdit" v-on:toggleEdit="isEdit = false"></useredit>
        </div>
      </div>
    </section>
    <!-- /.content -->
  </div>

</template>
<script>

import UserList from './UserList.vue'
import UserEdit from './UserEdit.vue'

  export default {
    name: 'Users',
    components: {
      'userlist': UserList,
      'useredit': UserEdit
    },
    data() {
      return {
        isEdit: false,
        users: [
          {
            id: 1,
            name: 'Mirko',
            surname: 'Mirkovic',
            email: 'mirko-mirkovic@mrk.com',
            status: 'Active',
            type: 'User'
          },
          {
            id: 2,
            name: 'Mirko',
            surname: 'Mirkovic',
            email: 'mirko-mirkovic@mrk.com',
            status: 'Active',
            type: 'User'
          },
          {
            id: 3,
            name: 'Mirko',
            surname: 'Mirkovic',
            email: 'mirko-mirkovic@mrk.com',
            status: 'Active',
            type: 'User'
          }
        ]
      }
    }
  }
</script>
