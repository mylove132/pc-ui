<template>
  <div class="card">
    <div class="header">
      <h1>{{ name }}</h1>
    </div>

    <div class="container">
      <el-row>
        <el-col :span="5">{{ desc }}</el-col>
        <el-col :span="11"></el-col>
        <el-col :span="4"
          ><i @click="addRunScript" class="el-icon-plus"></i
        ></el-col>
        <el-col :span="4"
          ><i @click="fullScreen" class="el-icon-full-screen"></i
        ></el-col>
      </el-row>
      <!-- <CodeDialog v-if="state.isShowCodeDialog" :title="name" :isShowCodeDialog="state.isShowCodeDialog"></CodeDialog> -->
    </div>
    <el-dialog fullscreen :title="name" v-model="isShowCodeDialog">
      <el-row class="code-item">
        <el-col :span="9">
          <v-ace-editor
            :value="param"
            lang="json"
            theme="nord_dark"
            :options="editorOptions"
            style="height: 500px; width: 100%; margin: auto"
          />
        </el-col>
        <el-divider direction="vertical"
          ><i class="el-icon-mobile-phone"></i
        ></el-divider>
        <el-col :span="14">
          <v-ace-editor
            :value="code"
            lang="java"
            theme="dracula"
            readonly
            :options="editorOptions"
            style="height: 500px; width: 100%; margin: auto"
          />
        </el-col>
      </el-row>
      <el-row class="btn-config">
        <el-row style="width: 100%">
            <select v-model="role" class="role-item">
          <option v-for="item in roleList" :value="item.value">{{ item.label }}</option>
        </select>
        </el-row>
        <el-row style="width: 100%">
           <button class="run-script">运行脚本</button>
        </el-row>
      </el-row>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs } from "vue";
import { VAceEditor } from "vue3-ace-editor";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/theme-nord_dark";
import { javaCode } from "@/api/data";
import { jsonData } from "@/api/data";
import { ScriptModule } from "@/store/modules/script.store";

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
      default: javaCode,
    },
    param: {
      type: String,
      default: JSON.stringify(jsonData, null, "\t"),
    },
  },
  setup(prop) {
    const state = reactive({
      isShowCodeDialog: false,
      role: "doctor",
      roleList: [
        { value: "doctor", label: "医生" },
        { value: "assistant", label: "医助" },
        { value: "steward", label: "管家" },
      ],
      editorOptions: {
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
        enableAutoIndent: true,
        tabSize: 2,
        fontSize: 16,
        useWrapMode: true,
        showPrintMargin: false, //去除编辑器里的竖线
      },
    });
    const fullScreen = () => {
      state.isShowCodeDialog = true;
    };
    const addRunScript = () => {
      ScriptModule.dispatchSetScriptTagItem({name: prop.name});
    };

    return {
      ...toRefs(state),
      addRunScript,
      fullScreen,
    };
  },
});
</script>


<style scoped>
::v-deep .el-dialog {
  background: rgb(21,32,54);
}
::v-deep .el-dialog__header {
  background-color: rgb(27, 42, 71);
}
::v-deep .el-dialog__close {
  color: #fff;
}
::v-deep .el-dialog__title {
  font-size: 30px;
  color: #fff;
}

.el-icon-full-screen {
  color: rgb(21, 193, 216);
}
.el-icon-plus {
  color: rgb(25, 155, 138);
}
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
/* ::v-deep .el-input {
   width: 90%;
  height: 50px;
  background-color: rgb(33, 33, 33);
} */
.role-item {
  width: 97%;
  height: 50px;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgb(236, 230, 230);
  margin-top: 15px;
  background-color: rgb(21,32,54);
  color: yellow;
  font-weight: 900;
   text-align: center;
    text-align-last: center;
}

.run-script {
  width: 97%;
  height: 50px;
  border-radius: 5px;
  background-color: rgb(21,32,54);
  color: yellow;
  font-weight: 900;
  margin-top: 15px;
 box-shadow: 3px 3px 3px rgb(236, 230, 230);
}
.btn-config {
  margin: auto;
  margin-top: 20px;
}
</style>
