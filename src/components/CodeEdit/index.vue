<template>
    <div>
        <el-row>
            <el-col :span="8">
                <FileDir></FileDir>
            </el-col>
            <el-col :span="12">
                Test
            </el-col>
        </el-row>
    </div>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FileDir from "@/components/CodeEdit/FileDir.vue";

export default defineComponent({
    components: {
        FileDir
    },
    setup() {
        
    },
})
</script>
