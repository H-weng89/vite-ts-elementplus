<template>
  <div class="login_wra">
      <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="userName">
      <el-input v-model="ruleForm.userName" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="密码" prop="pwd">
      <el-input
        v-model="ruleForm.pwd"
        type="pwdword"
        autocomplete="off"
      />
    </el-form-item>
   
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</el-button
      >
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>
<script lang="ts" setup>
  
import { reactive, ref,onMounted } from 'vue'
import type { FormInstance } from 'element-plus'
import {useRouter} from 'vue-router'
import { login,userInfo}from '@/api'
import {useStore} from 'vuex'

const ruleFormRef = ref<FormInstance>() 
const router = useRouter()
const store = useStore()

onMounted(()=>{
 
})

const validateuserName = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入账号'))
  } else {
    if (ruleForm.userName !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkuserNmae', () => null)
    }
    callback()
  }
}
const validatepwd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the pwdword again'))
  } else if (value !== ruleForm.pwd) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pwd: '',
  userName: '',
 
})

const rules = reactive({
  userName: [{ validator: validateuserName, trigger: 'blur'}],
  pwd: [{ validator: validatepwd, trigger: 'blur' }],
})

const submitForm =   (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const result = await login({username:ruleForm.userName,password:ruleForm.pwd})
     if(result.code==200){
      localStorage.setItem('token',result.data.tokenHead+result.data.token)

      router.push('/pms')
     

     }
    } 
   
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>