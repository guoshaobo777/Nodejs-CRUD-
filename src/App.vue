<template>
  <div id="app">
    <div id="nav">
      <el-button type="primary" @click="addListVisible()">添加数据</el-button>
      <div>
        <el-dialog title="添加数据" :visible.sync="dialogVisible" @close=addReset()     width="30%">
          <el-form
            :model="addForm"
            :rules="addFormRules"
            ref="addFormRef"
            label-width="100px"
          >
            <el-form-item label="name" prop="name">
              <el-input v-model="addForm.name"></el-input>
            </el-form-item>
            <el-form-item label="url" prop="url">
              <el-input v-model="addForm.url"></el-input>
            </el-form-item>
            <el-form-item label="alexa" prop="alexa">
              <el-input v-model="addForm.alexa"></el-input>
            </el-form-item>
            <el-form-item label="country" prop="country">
              <el-input v-model="addForm.country"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addList()">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="name"> </el-table-column>
        <el-table-column prop="url" label="url"> </el-table-column>
        <el-table-column prop="alexa" label="alexa"> </el-table-column>
        <el-table-column prop="country" label="country"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="showEditVisible(scope.row.id)" type="primary" icon="el-icon-share"></el-button>
            <el-button
              @click="deleteList(scope.row.id)"
              type="primary"
              icon="el-icon-delete"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 编辑信息对话框 -->
      <el-dialog title="编辑数据" :visible.sync="editVisible" width="30%">
          <el-form
            :model="editForm"
            :rules="addFormRules"
            ref="editFormRef"
            label-width="100px"
          >
            <el-form-item label="name" prop="name">
              <el-input v-model="editForm.name"></el-input>
            </el-form-item>
            <el-form-item label="url" prop="url">
              <el-input v-model="editForm.url"></el-input>
            </el-form-item>
            <el-form-item label="alexa" prop="alexa">
              <el-input v-model="editForm.alexa"></el-input>
            </el-form-item>
            <el-form-item label="country" prop="country">
              <el-input v-model="editForm.country"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
            <el-button @click="editVisible = false">取 消</el-button>
            <el-button @click="editList()" type="primary" >确 定</el-button>
          </span>
        </el-dialog>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      addForm: {
        name: '',
        url: '',
        alexa: '',
        country: ''
      },
      dialogVisible: false,
      addFormRules: {
        name: [{}]
      },
      tableData: [

      ],
      editForm: {
        name: '',
        url: '',
        alexa: '',
        country: ''
      },
      editVisible: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 获取数据库中的数据
    async getList () {
      const { data: res } = await this.$http.get('showStu')
      console.log(res)
      this.tableData = res.allData
    },
    // 向数据库中添加数据
    addListVisible () {
      this.dialogVisible = true
    },
    async addList () {
      const { data: res } = await this.$http.post('addStu', this.addForm)
      console.log(res)
      this.dialogVisible = false
      this.getList()
    },
    addReset () {
      this.$refs.addFormRef.resetFields()
    },
    // 删除数据
    async deleteList (id) {
      const { data: res } = await this.$http.post('/delStu', { id })
      console.log(res)
      this.getList()
    },
    // 显示编辑信息对话框并根据id获取信息
    async showEditVisible (id) {
      this.editVisible = true
      const { data: res } = await this.$http.get('showStu/' + id)
      console.log(res)
      this.editForm = res.oneData[0]
    },
    // 编辑信息
    async editList () {
      const { data: res } = await this.$http.post('updateStu', this.editForm)
      console.log(res)
      this.editVisible = false
      this.getList()
    }
  }
}
</script>

<style lang="less">
</style>
