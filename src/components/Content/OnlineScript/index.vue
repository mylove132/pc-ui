<template>
    <div>
        <FileDirTree></FileDirTree>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import FileDirTree from "@/components/Content/OnlineScript/FileDirTree.vue";
import OnlineShowCode from "@/components/Content/OnlineScript/OnlineShowCode.vue";
import jmeterScriptService from '@/services/modules/jmeter-script.service';
export default defineComponent({
    name: "OnlineScript",
    components: {
        FileDirTree,
        OnlineShowCode
    },
    setup() {
        onMounted(async () => {
            const jmeterScript = await jmeterScriptService.queryJmeterScriptByIdService(1);
            console.log(JSON.stringify(jmeterScript));
        })
        
    },
})
</script>
