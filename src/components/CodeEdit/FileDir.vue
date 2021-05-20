<template>
  <el-input
    placeholder="输入关键字进行搜索"
    v-model="filterText"
    style="margin-bottom: 5px"
  >
  </el-input>
  <div class="code-dir">
    <el-tree
    :data="data"
    default-expand-all
    node-key="id"
    ref="tree"
    @node-click="nodeClick"
    :props="defaultProps"
    highlight-current
    :expand-on-click-node="false"
    style="height:100%; margin-top:30px; background-color:#FFF;"
>
    <span class="custom-tree-node" slot-scope="{ node, data }">
       <i v-if="node.icon" class="node.icon"></i>
        <span>{{ node.label}}</span>
    </span>
</el-tree>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, watch } from "vue";

export default defineComponent({
  name: "FileDir",
  setup() {
    const filterText = ref<string>("");
    const tree = ref<any>(null);
    const state = reactive({
      data: [
        {
          id: 1,
          label: "一级 1",
          icon: "el-icon-success",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                  icon: "el-icon-info",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
    });

    watch(filterText, (val) => {
      tree.value.filter(val);
    });

    const filterNode = (value: any, data: any) => {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    };

    return {
      filterText,
      tree,
      ...toRefs(state),
      filterNode,
    };
  },
});
</script>


<style>
.el-tree {
  background-color: rgb(20, 5, 44);
  color: #fff;
}
.el-tree-node:focus > .el-tree-node__content {
  background-color: #5d1df1 !important;
}
.el-tree-node__content:hover {
  background-color: rgb(0, 0, 0, 0);
}
.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
  background-color: #5d1df1;
}
.code-dir {
  width: 100%;
  height: 500px;
  border-radius: 5px;
  background-color: rgb(20, 5, 44);
}
</style>
 
