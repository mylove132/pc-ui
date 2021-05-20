<template>
    <div class="about">
        <v-header />
        <v-sidebar />
        <div class="content-box" :class="{ 'content-collapse': collapse }">
            <v-tags></v-tags>
            <div class="content">
                <router-view v-slot="{ Component }">
                    <transition name="move" mode="out-in">
                        <keep-alive :include="tagsList">
                            <component :is="Component" />
                        </keep-alive>
                    </transition>
                </router-view>
                <!-- <el-backtop target=".content"></el-backtop> -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import vHeader from "@/components/Header/index.vue";
import vSidebar from "@/components/Sidebar/index.vue";
import vTags from "@/components/Tags/index.vue";
import { computed, defineComponent } from 'vue'
import { tagsModule } from "@/store/modules/tag.store";

export default defineComponent({
     components: {
        vHeader,
        vSidebar,
        vTags
    },
    setup() {
        const tagsList = computed(() => {
            return tagsModule.tagsList.map(item => item.name);
        });
        const collapse = computed(() => {
            return tagsModule.collapse;
        });
        return {
            tagsList,
            collapse
        }
    },
})
</script>