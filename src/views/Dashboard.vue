<template>
    <code-card name="login" desc="登录"></code-card>
    <script-tag class="script-tag"></script-tag>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CodeCard from "@/components/CodeCard/index.vue";
import ScriptTag from "@/components/ScriptTag/index.vue";

export default defineComponent({
    components: {
        CodeCard,
        ScriptTag
    },
    setup() {
        
    },
})
</script>

<style scoped>
.script-tag {
    margin-top: 200px;
    widows: 100%;
    height: 100px;
    background-color: rgb(36, 29, 29);
}
</style>
