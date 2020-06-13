<template>
  <div id="notFound">
    <img src="@/assets/logo.png" class="center-block logo">
    <br/>

    <div class="text-center col-sm-12">
      <h1 style="color:gray;">404</h1>
      <h4 style="color:gray;">Not Found</h4>
      <router-link to="/" class="vertical-5p lead">Take me home.</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotFound'
}
</script>

<style>
#notFound {
  padding: 10em;
  color: white;
}
</style>
