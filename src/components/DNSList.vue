
<template>
<el-container style="height: 100%; border: 1px solid #eee">
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <template #dropdown>
          <el-dropdown-menu>
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>

    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="dns_address" label="网址" width="200">
        </el-table-column>
        <el-table-column prop="dns_type" label="记录类型" width="120">
        </el-table-column>
        <el-table-column prop="dns_content" label="内容">
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
       name: "DNSList",
    data() {
      const item = {
        dns_address: 'demo.example.com',
        dns_type: 'A',
        dns_content: '1.1.1.1'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
.el-header {
    background-color: #409EFF;
    color: var(--el-text-color-primary);
    line-height: 60px;
  }

  .el-aside {
    color: var(--el-text-color-primary);
  }
</style>
<style>
</style>