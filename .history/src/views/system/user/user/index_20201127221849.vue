<template>
  <div>
    <div class="filter-container">
      <el-button class="filter-item" type="success" icon="el-icon-circle-plus" title="添加"></el-button>
    </div>
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column prop="id" label="ID" width="60" align="center"></el-table-column>
      <el-table-column prop="date" label="账号" ></el-table-column>
      <el-table-column prop="date" label="所属角色" width="100" align="center"> </el-table-column>
      <el-table-column prop="name" label="最后登录时间" width="150" align="center"> </el-table-column>
      <el-table-column prop="address" label="最后登录IP" width="150" align="center"> </el-table-column>
      <el-table-column prop="address" label="加入时间" width="150" align="center"> </el-table-column>
      <el-table-column prop="address" label="启用" width="60" align="center"> </el-table-column>

      <el-table-column label="操作" align="center"  width="120" class-name="small-padding fixed-width">
        <el-button type="warning"  icon="el-icon-edit" title="编辑" circle></el-button>
        <el-button type="primary" icon="el-icon-info" title="查看操作记录" circle></el-button>
        <!-- <el-button icon="el-icon-warning" title="草稿" circle></el-button> -->
        <!-- <el-button type="danger" icon="el-icon-delete" title="删除" circle></el-button> -->
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { fetchList } from '@/api/user'
import Pagination from '@/components/Pagination'//分页
export default {
  name: "UserList",
  data() {
    return {
      list: null,
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 1
      },
      tableData: [
        {
          id: "1",
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          id: "2",
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          id: "3",
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      console.info('进入getList')
      fetchList(this.listQuery).then(response => {
        console.log(response)
        this.list = response.data.items
        this.total = response.data.total
        this.listLoading = false
      })
    }
  }
};
</script>
