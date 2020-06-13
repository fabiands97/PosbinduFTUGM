<template>
  <div class="login-box" style=".center{margin:0 auto};">
    <div class="login-logo">
      Selamat datang di
      <!-- <router-link to="/">Selamat datang di -->
        <br>
        <div class="login-text">Posbindu PHSS FT UGM</div>
        <br>
        <img src="/img/temp/logo.png" width="170" height="170">
          
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Login menggunakan akun Petugas atau Admin</p>
      <form v-on:submit.prevent="authenticate">
        <!--<div v-if="!success && messages != ''">
          <div class="alert alert-danger"> 
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            {{ messages }}
          </div>
        </div>

        <div v-if="success && messages != ''">
          <div class="alert alert-success"> 
            <a href="#" class="close" data-dismiss="alert">&times;</a>
            {{ messages }}
          </div>
        </div> -->

        <div class="form-group has-feedback">
          <input class="form-control" placeholder="Email" v-model="form.email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>

        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password" v-model="form.password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>

        <div class="row">
          <!-- /.col -->
          <div class="col-md-12">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Login</button>
          </div>
          <!-- /.col -->
        </div>
        
      </form>
    </div> 
  </div>   
</template>

<script>

 import {login} from '../helper/auth';
    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: '',
                    password: '',
                },
                error: null
            };
        },
        methods: {
            authenticate() {
                this.$store.dispatch('login');
                  login(this.$data.form)
                    .then((res) => {
                      this.$store.commit("loginSuccess", res);

                        if(res.role === "petugas"){
                          this.$router.push({path: '/petugas'});
                        }
                        else if(res.role === "admin"){
                          this.$router.push({path: '/'});
                        }
                    })
                    .catch((error) => {
                        this.$store.commit("loginFailed", {error});
                        alert("Username atau Password anda salah !");
                        
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters.authError;
            }
        }
    }

//import store from '../../store/store';
/*import axios from "axios";
export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: '',
        messages: '',
        success: false,
        body_class: 'hold-transition login-page',
      }
    },
    computed: {
    },
    methods: {
      loginSubmit() {
        this.$parent.$data.login = false;
        this.$parent.$data.body_class = 'sidebar-mini skin-blue-light';
        alert(this.email+this.password)
        axios.post('http://52.187.24.10:8080/api/v1/users/login', {
        email: this.email, password: this.password
      })
      .then(response => {
        alert("Login Success"+response.data.token);
       // store.commit('updateAccessToken', response.data.token);
        //this.$http.defaults.headers.common['x-access-token'] =  response.data.token;
        this.$router.push('/')
      })
      .catch(error => {
        //store.commit('loginStop', error.response.data.error);
       // store.commit('updateAccessToken', null);
        alert("Please Check Your Credential!"+error)
      })
      }
    }
  }*/
</script>