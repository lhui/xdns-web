<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="800px"
    max-height="100%"
  >
    <el-table-column fixed prop="dns_name" label="域名" width="300">
    </el-table-column>
    <el-table-column prop="dns_type" label="类型" width="120">
    </el-table-column>
    <el-table-column prop="dns_content" label="内容" width="120">
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="scope">
        <el-button
          @click.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small"
        >
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "DNSList",
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    const item = {
      dns_name: "demo.example.com",
      dns_type: "A",
      dns_content: "1.1.1.1",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>

<style>
.el-header {
  background-color: #409eff;
  color: var(--el-text-color-primary);
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
}
</style>
<style>
</style>