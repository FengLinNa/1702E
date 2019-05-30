<template>
   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="id">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="className"
      label="班级">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  computed: {
    ...mapState({
      tableData: state=>state.user.list
    })
  },
  methods: {
    ...mapActions({
      getUserList: 'user/getUserList'
    })
  },
  created(){
    this.getUserList();
  }
}
</script>
