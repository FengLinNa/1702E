<template>
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <p>用户：1702E班某某某</p>
      </el-row>
    </el-header>
    <el-container>
      <el-aside>
        <el-menu
          default-active="1"
          class="menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>用户管理</span>
            </template>
            <el-menu-item>
              <router-link to="/user/list" tag="p">
                用户列表
              </router-link>
            </el-menu-item>
            <el-menu-item>
              <router-link to="/user/add" tag="p">
                添加用户
              </router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main></el-main>
    </el-container>
  </el-container>
</template>


<style>
  .container{
    height: 100%;
  }
  .header{
    background-color: coral;
  }
  .menu{
    height: 100%;
  }
  .router-link-active{
    color: lightskyblue;
  }
</style>
