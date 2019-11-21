<template>
   <div class="tal-box">
      <el-card class="box-card">
        <el-row :gutter="10">
          <el-col :span="8"><el-input v-model="input" placeholder="请输入内容"></el-input></el-col>
          <el-col :span="2"><el-button type="primary">查询</el-button></el-col>
          <el-col :span="2"><el-button type="primary">查询</el-button></el-col>
          <el-button @click="addClick(scope.row)" type="text" size="small">新增</el-button>
        </el-row>
         <!-- 表格开始 -->
        <el-table
            :data="indexData"
            border
            style="width: 100%">
            <el-table-column type="index" label="编号" width="50">
            </el-table-column>
            <el-table-column
              prop="username"
              label="姓名">
            </el-table-column>
            <el-table-column
              prop="sex"
              label="年龄">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
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
          <!-- 表格结束 -->
      </el-card>
      <!-- 弹框 -->
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消123</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 弹框 -->
  </div>
</template>
<script>

export default {
  data () {
    return {
      input: '',
      indexData: [],
      dialogFormVisible: false
    }
  },
  methods: {
    initialData () {
      this.axios.get('/api/user/list').then(res => {
        if (res.status === 200) {
          this.indexData = res.data
        }
      })
    },
    handleClick: Srow => {
      console.log(Srow)
    },
    addClick: function (Srow) {
      console.log(Srow)
    }
  },
  mounted () {
    // var _this = this
    // console.log(this)
    this.initialData()
  }
}
</script>
<style lang="less" scoped>
.tal-box{
  height: 100%;
  width: 100%;
}
.box-card{
  width: 100%;
  height: 100%;
}
.el-table__header{
  widows: 100% !important;
}
</style>
