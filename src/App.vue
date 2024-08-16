<template>
  <div id="App">
    <router-view />
  </div>
</template>
<script>
import { computed, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    // 使用计算属性返回当前路由的名称
    const currentRoute = computed(() => route.name || route.path);
    console.log("currentRoute", currentRoute);

    // 监听路由变化
    watch(
      () => route.path,
      (newPath) => {
        console.log("路由变化了:", newPath);
      }
    );

    return {
      currentRoute,
    };
  },
};
</script>
<style scoped>
</style>
