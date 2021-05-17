<template>
  <div class="file-tree">
    <vue3-router-tree :items="filetreeData">
      <template #item="{ item }">
        <icon :name="`${item.type || 'file'}`" />
        <span> {{ item.name }}</span>
        <span v-if="item.info" :style="{ color: colors[item.info] }">{{
          item.info
        }}</span>
      </template>
    </vue3-router-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Vue3RouterTree from "vue3-router-tree";
import Icon from "@/components/common/icons/Icon.vue";

export default defineComponent({
  name: "FileDirTree",
  setup() {
    return {
      filetreeData: [
        {
          name: ".git",
          type: "folder",
        },
        {
          name: "node_modules",
          type: "folder",
        },
        {
          name: "public",
          type: "folder",

          children: [
            {
              name: "static",
              type: "folder",

              children: [
                {
                  name: "logo.png",
                  file: "png",
                  info: "U",
                },
              ],
            },
            {
              name: "favicon.ico",
              file: "png",
            },
            {
              name: "index.html",
              file: "html",
            },
          ],
        },
        {
          name: ".gitignore",
          file: "txt",
        },
        {
          name: "babel.config.js",
          file: "js",
          info: "M",
        },
        {
          name: "package.json",
          file: "json",
          info: "M",
        },
        {
          name: "README.md",
          file: "md",
          info: "U",
        },
        {
          name: "vue.config.js",
          file: "js",
          info: "C",
        },
        {
          name: "yarn.lock",
          file: "txt",
        },
      ],
      colors: {
        U: "#44ee44",
        A: "#1222dd",
        M: "#ee2245",
        C: "#4425ff",
      },
    };
  },
  components: {
    Vue3RouterTree,
    Icon,
  },
});
</script>

<style lang="scss">

</style>
