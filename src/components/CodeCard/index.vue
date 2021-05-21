<template>
  <div class="card">
    <div class="header">
      <h1>{{ name }}</h1>
    </div>

    <div class="container">
      <el-row>
        <el-col :span="5">{{ desc }}</el-col>
        <el-col :span="15"></el-col>
        <el-col :span="4"
          ><i @click="fullScreen" class="el-icon-full-screen"></i
        ></el-col>
      </el-row>
      <!-- <CodeDialog v-if="state.isShowCodeDialog" :title="name" :isShowCodeDialog="state.isShowCodeDialog"></CodeDialog> -->
    </div>
    <el-dialog :title="name" v-model="isShowCodeDialog">
      <el-row>
        <el-select v-model="theme" placeholder="请选择">
          <el-option
            v-for="item in themeList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-row>
      <el-row>
        <v-ace-editor
          v-model:value="code"
          lang="java"
          v-model:theme="theme"
          :options="editorOptions"
          style="height: 500px; width: 100%"
        />
      </el-row>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { VAceEditor } from "vue3-ace-editor";

export default defineComponent({
  components: {
    VAceEditor,
  },
  props: {
    name: {
      type: String,
      default: "Test",
    },
    desc: {
      type: String,
      default: "测试",
    },
    code: {
      type: String,
      default: "public",
    },
  },
  setup() {
    const theme = ref<string>("cobalt");
    const state = reactive({
      isShowCodeDialog: false,
      themeList: [
        {
          value: "chrome",
          label: "chrome",
        },
        {
          value: "cobalt",
          label: "cobalt",
        },
        {
          value: "ambiance",
          label: "ambiance",
        },
        {
          value: "chaos",
          label: "chaos",
        },
        {
          value: "clouds",
          label: "clouds",
        },
        {
          value: "clouds_midnight",
          label: "clouds_midnight",
        },
        {
          value: "crimson_editor",
          label: "crimson_editor",
        },
        {
          value: "dawn",
          label: "dawn",
        },
        {
          value: "dracula",
          label: "dracula",
        },
        {
          value: "dreamweaver",
          label: "dreamweaver",
        },
        {
          value: "eclipse",
          label: "eclipse",
        },
        {
          value: "github",
          label: "github",
        },
        {
          value: "god",
          label: "god",
        },
        {
          value: "gruvbox",
          label: "gruvbox",
        },
        {
          value: "idle_fingers",
          label: "idle_fingers",
        },
        {
          value: "iplastic",
          label: "iplastic",
        },
        {
          value: "katzenmilch",
          label: "katzenmilch",
        },
        {
          value: "kr_theme",
          label: "kr_theme",
        },
        {
          value: "kuroir",
          label: "kuroir",
        },
        {
          value: "merbivore",
          label: "merbivore",
        },
        {
          value: "merbivore_soft",
          label: "merbivore_soft",
        },
        {
          value: "mono_industrial",
          label: "mono_industrial",
        },
        {
          value: "monokai",
          label: "monokai",
        },
        {
          value: "nord_dark",
          label: "nord_dark",
        },
        {
          value: "one_dark",
          label: "one_dark",
        },
        {
          value: "tomorrow_night_eighties",
          label: "tomorrow_night_eighties",
        },
      ],
      editorOptions: {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableAutoIndent: true,
        tabSize: 2,
        fontSize: 16,
        showPrintMargin: false, //去除编辑器里的竖线
      },
    });
    const fullScreen = () => {
      state.isShowCodeDialog = true;
    };

    return {
      ...toRefs(state),
      theme,
      fullScreen,
    };
  },
});
</script>


<style scoped>
.card {
  width: 250px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  display: inline-block;
  background-color: #fff;
}
.header {
  background-color: rgb(54, 0, 44);
  color: white;
  padding: 10px;
  font-size: 40px;
}
.container {
  padding: 10px;
}
</style>
