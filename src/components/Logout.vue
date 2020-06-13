<template>
  <div></div>
</template>



<script>
export default {
  name: "logout",
  data() {
    return {};
  },
  created: function() {
    this.$store.commit("logout");
    this.$router.push("/login");
  }
};
</script>