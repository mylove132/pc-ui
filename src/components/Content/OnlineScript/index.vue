<template>
    <div>
        <FileDirTree></FileDirTree>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FileDirTree from "@/components/Content/OnlineScript/FileDirTree.vue";
import OnlineShowCode from "@/components/Content/OnlineScript/OnlineShowCode.vue";
export default defineComponent({
    name: "OnlineScript",
    components: {
        FileDirTree,
        OnlineShowCode
    },
    setup() {
        
    },
})
</script>
