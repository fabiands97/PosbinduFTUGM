<template>

  <div class="box" v-show="!isEdit">
    <div class="box-header">
        <h3 class="box-title">Users list table</h3>
    </div>
    <div class="box-body">
      <div class="dataTables_wrapper form-inline dt-bootstrap">
        <div class="row"><div class="col-sm-6"></div><div class="col-sm-6"></div></div>
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-bordered table-hover dataTable">
              <thead>
                <tr role="row">
                  <th class="sorting_asc" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Rendering engine: activate to sort column descending">User ID</th>
                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Browser: activate to sort column ascending">Name</th>
                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Platform(s): activate to sort column ascending">Surname</th>
                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="Engine version: activate to sort column ascending">Email</th>
                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">Status</th>
                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">Type</th>
                  <th class="sorting" tabindex="0" aria-controls="example2" rowspan="1" colspan="1" aria-label="CSS grade: activate to sort column ascending">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr role="row" class="odd" v-for="user in users">
                  <td class="sorting_1">{{user.id}}</td>
                  <td>{{user.name}}</td>
                  <td>{{user.surname}}</td>
                  <td>{{user.email}}</td>
                  <td>{{user.status}}</td>
                  <td>{{user.type}}</td>
                  <td class="text-right">
                    <div class="btn-group">
                      <button type="button" class="btn btn-primary btn-sm" title="Edit" v-on:click="$emit('toggleEdit')"><i class="fa fa-edit"></i></button>
                      <button type="button" class="btn btn-danger btn-sm" title="Block"><i class="fa fa-times"></i></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-5">
            <div class="dataTables_info" id="example2_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div>
          </div>
          <div class="col-sm-7">
            <div class="dataTables_paginate paging_simple_numbers" id="example2_paginate">
              <ul class="pagination">
                <li class="paginate_button previous disabled" id="example2_previous">
                  <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0">Previous</a>
                </li>
                <li class="paginate_button active">
                  <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0">1</a>
                </li>
                <li class="paginate_button ">
                  <a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0">2</a>
                </li>
                <li class="paginate_button ">
                  <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0">3</a>
                </li>
                <li class="paginate_button ">
                  <a href="#" aria-controls="example2" data-dt-idx="4" tabindex="0">4</a>
                </li>
                <li class="paginate_button ">
                  <a href="#" aria-controls="example2" data-dt-idx="5" tabindex="0">5</a>
                </li>
                <li class="paginate_button ">
                  <a href="#" aria-controls="example2" data-dt-idx="6" tabindex="0">6</a>
                </li>
                <li class="paginate_button next" id="example2_next">
                  <a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'UserList',
  props: ['isEdit', 'users']

}


</script>
