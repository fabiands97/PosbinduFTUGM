module.exports = [
   {
        path: '/login',
        component: require('./components/Login.vue').default
    },
    {
      path: '/logout',
      component: require('./components/Logout.vue').default,
      name: 'Logout',
    },
    
          {
            path: '/petugas',
            component: require('./components/Petugas.vue').default,
            name: 'Petugas',
          },
    {
        path: '/',
        component: require('./components/DashMain.vue').default,
        meta: {
          requiresAuth: true
      },
        children: [
          {
            path: 'dashboard',
            component: require('./components/Dashboard.vue').default,
            name: 'Dashboard',
            alias: '',
            meta: {description: 'Overview of environment',requiresAuth: true}
          }, {
            path: 'users',
            component: require('./components/Table.vue').default,
            name: 'Tables',
            meta: {description: 'Simple and advance table in CoPilot',requiresAuth: true}
          },
          {
            path: 'input1',
            component: require('./components/meja1/input1.vue').default,
            name: 'Input1',
            meta: {description: 'Input Pemeriksaan Meja 1',requiresAuth: true}
          },
          {
            path: 'list1',
            component: require('./components/meja1/list1.vue').default,
            name: 'List1',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 1',requiresAuth: true}
          },
          {
            path: 'input2',
            component: require('./components/meja2/input2.vue').default,
            name: 'Input2',
            meta: {description: 'Input Pemeriksaan Meja 2',requiresAuth: true}
          },
          {
            path: 'list2',
            component: require('./components/meja2/list2.vue').default,
            name: 'List2',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 2',requiresAuth: true}
          },
          {
            path: 'input3',
            component: require('./components/meja3/input3.vue').default,
            name: 'Input3',
            meta: {description: 'Input Pemeriksaan Meja 3',requiresAuth: true}
          },
          {
            path: 'list3',
            component: require('./components/meja3/list3.vue').default,
            name: 'List3',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 3',requiresAuth: true}
          },
          {
            path: 'input4',
            component: require('./components/meja4/input4.vue').default,
            name: 'Input4',
            meta: {description: 'Input Pemeriksaan Meja 4',requiresAuth: true}
          },
          {
            path: 'list4',
            component: require('./components/meja4/list4.vue').default,
            name: 'List4',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 4',requiresAuth: true}
          },
          {
            path: 'daftaruser',
            component: require('./components/DaftarUser.vue').default,
            name: 'Daftar',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 1',requiresAuth: true}
          },
          {
            path: 'addpetugas',
            component: require('./components/petugas/Add.vue').default,
            name: 'Tambah Petugas',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 1',requiresAuth: true}
          },
          {
            path: 'listpetugas',
            component: require('./components/petugas/List.vue').default,
            name: 'List Petugas',
            meta: {description: 'Daftar Antrian Pemeriksaan Meja 1',requiresAuth: true}
          },
          {
            path: 'imt',
            component: require('./components/manajer/imt.vue').default,
            name: 'Dashboard IMT',
            meta: {description: 'Dashboard IMT',requiresAuth: true}
          },
          {
            path: 'asamurat',
            component: require('./components/manajer/asamurat.vue').default,
            name: 'Dashboard Asam Urat',
            meta: {description: 'Dashboard Asam Urat',requiresAuth: true}
          }
          ,
          {
            path: 'guladarah',
            component: require('./components/manajer/guladarah.vue').default,
            name: 'Dashboard Gula Darah',
            meta: {description: 'Dashboard Gula Darah',requiresAuth: true}
          }
          ,
          {
            path: 'kolesterol',
            component: require('./components/manajer/kolesterol.vue').default,
            name: 'Dashboard Kolesterol',
            meta: {description: 'Dashboard Kolesterol',requiresAuth: true}
          }
          ,
          {
            path: 'peserta',
            component: require('./components/manajer/peserta.vue').default,
            name: 'Dashboard Peserta',
            meta: {description: 'Dashboard Peserta',requiresAuth: true}
          }
          ,
          {
            path: 'tekanandarah',
            component: require('./components/manajer/tekanandarah.vue').default,
            name: 'Dashboard tekanandarah',
            meta: {description: 'Dashboard Tekanan Darah',requiresAuth: true}
          }


          /*{
            path: 'Schedule',
            component: require('./components/Schedule.vue').default,
            name: 'Schedule',
            meta: {description: 'Penjadwalan',requiresAuth: true}
          }*/

        ]
      }, {
        // not found handler
        path: '*',
        component: require('./components/404.vue').default
      }
  

];
