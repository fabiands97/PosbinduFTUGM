<template>

  <div class="box box-primary" v-if="isEdit">
    <div class="box-header with-border">
      <h3 class="box-title">User Edit</h3>
      <div class="box-tools pull-right">
            <button type="button" class="btn btn-box-tool" v-on:click="$emit('toggleEdit')" title="Close" ><i class="fa fa-remove"></i></button>
      </div>
    </div>
    <form role="form">
      <div class="box-body">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div class="form-group">
          <label for="exampleInputFile">File input</label>
          <input type="file" id="exampleInputFile">

          <p class="help-block">Example block-level help text here.</p>
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox"> Check me out
          </label>
        </div>
      </div>
    <!-- /.box-body -->

    <div class="box-footer">
      <button type="button" class="btn btn-primary" v-on:click="$emit('toggleEdit')">Submit</button>
    </div>
  </form>
</div>


</template>

<script>

export default {
  name: 'UserEdit',
  props: ['isEdit']

}


</script>
