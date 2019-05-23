<template>
  <div>
    <mt-cell title="登陆页面"></mt-cell>
    <div>
      <mt-field label="用户名" placeholder="请输入用户名"  :state="usernameStatus" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" :state="passwordStatus" v-model="password"></mt-field>
      <mt-button type="primary" size="normal" @click="login">登陆</mt-button>
    </div>

  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import {doLogin} from '@/api/index'
import {setToken} from '@/utils'
export default {
  data(){
    return {
      username: '',
      usernameStatus: '',
      password: '',
      passwordStatus: ''
    }
  },
  methods: {
    async login(){
      if (!/[a-zA-Z0-9]{6,10}/.test(this.username)){
        Toast('请输入正确的用户名');
        this.usernameStatus = 'error';
        return;
      }
      this.usernameStatus = 'success';

      if (!/^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[\(\)])+$)([^(0-9a-zA-Z)]|[\(\)]|[a-z]|[A-Z]|[0-9]){6,}$/.test(this.password)){
        Toast('请输入正确的密码');
        this.passwordStatus = 'error';
        return;
      }
      this.passwordStatus = 'success';

      let data = await doLogin({
        username: this.username,
        password: this.password
      })
      setToken(data.token);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
