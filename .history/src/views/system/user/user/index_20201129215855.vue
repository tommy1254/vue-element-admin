<template>
  <div>
    <div class="filter-container">
      <el-button
        class="filter-item"
        type="success"
        icon="el-icon-circle-plus"
        title="添加"
      ></el-button>
    </div>
    <el-table :data="list" border fit highlight-current-row style="width: 100%">
      <el-table-column
        prop="admin_id"
        label="ID"
        width="60"
        align="center"
      ></el-table-column>
      <el-table-column prop="user_name" label="账号"></el-table-column>
      <el-table-column
        prop="admin_role.role_name"
        label="所属角色"
        width="100"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="last_login"
        label="最后登录时间"
        width="160"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="last_ip"
        label="最后登录IP"
        width="150"
        align="center"
      >
      </el-table-column>
      <el-table-column
        prop="add_time"
        label="加入时间"
        width="160"
        align="center"
      >
      </el-table-column>
      <el-table-column prop="disable" label="启用" width="60" align="center">
        <template scope="{row}" >
          <p v-if="row.admin_id != '1'">
          <el-link type="success" :underline="false" v-if="row.disable == '1'" @click.stop="{{changeDisable(row)}}"
            ><i class="el-icon-check"></i
          ></el-link>
          <el-link type="danger" :underline="false" v-if="row.disable == '2'" @click.stop="{{changeDisable(row)}}"
            ><i class="el-icon-close"></i
          ></el-link>
          </p>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="120"
        class-name="small-padding fixed-width"
      >
        <el-button
        
          type="warning"
          icon="el-icon-edit"
          title="编辑"
          circle
        ></el-button>
        <el-button
          type="primary"
          icon="el-icon-info"
          title="查看操作记录"
          circle
        ></el-button>
        <!-- <el-button icon="el-icon-warning" title="草稿" circle></el-button> -->
        <!-- <el-button type="danger" icon="el-icon-delete" title="删除" circle></el-button> -->
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>
<script>
import { fetchList } from "@/api/user";
import Pagination from "@/components/Pagination"; //分页
export default {
  name: "UserList",
  components: { Pagination },

  filters: {},
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 1,
      },
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.listLoading = true;
      fetchList(this.listQuery).then((response) => {
        console.log(response);
        this.list = response.data.data;
        this.total = response.data.total;
        this.listLoading = false;
      });
    },
    changeDisable(data){
      var disable=data.disable==1?2:1
      var where={
        disable:disable,
        admin_id:data.admin_id
      }
      update(where).then((res)=>{

      })
    }
  },
};
</script>
