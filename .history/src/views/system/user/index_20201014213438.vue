<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="user" type="success">
      <router-view />
    </el-alert>
  </div>
</template>
