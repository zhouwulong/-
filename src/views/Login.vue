<template>
<div class="login-container">
    <div class="login-box">
         <el-form :model="ruleForm" :rules="rules" class="demo-ruleForm">
            <el-form-item prop="name">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="primary" @click="JumpHome">登录</el-button>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    JumpHome () {
      this.$router.push({ path: '/home', query: { aaa: 12222, bbb: 2 } })
    }
  }
}

</script>

<style lang="less" scoped>
.login-container{
 height: 100%;
 background-color: #c4c4c4;
 position: relative;
    .login-box{
        height: 100%;
        width: 500px;
        height: 400px;
        position: absolute;
        top:50%;
        left: 50%;
        border: 1px solid #000;
        transform: translate(-50%,-50%);
        background-color: #fff;
        }
}

</style>
