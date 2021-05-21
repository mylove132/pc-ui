<template>
    <el-dialog :fullscreen="isfullscreen" :title="title" v-model="isShowCodeDialog" fullscreen>
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    props: {
        isShowCodeDialog: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ""
        }
    },
    setup() {
        const isfullscreen = ref<Boolean>(true);
        return {
            isfullscreen
        }
    },
})
</script>
