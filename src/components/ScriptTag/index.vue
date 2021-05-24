<template>
  <div v-if="showTags">
    <el-tag v-for="tag in scriptTagsList" :key="tag.name" @close="handleClose(tag)" closable type="info">
      {{ tag.name }}
    </el-tag>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from "vue";
import { ScriptModule } from "@/store/modules/script.store";

export default defineComponent({
  setup() {
    const scriptTagsList = computed(() => {
      return ScriptModule.scriptTagsList;
    });
    const showTags = computed(() => {
      return scriptTagsList.value.length > 0;
    });
    const handleClose = (tag: any) => {
        scriptTagsList.value.splice(scriptTagsList.value.indexOf(tag), 1);
        ScriptModule.dispatchDelScriptTagsItem({index: scriptTagsList.value.indexOf(tag)});
    }

    return {
      scriptTagsList,
      handleClose,
      showTags,
    };
  },
});
</script>
