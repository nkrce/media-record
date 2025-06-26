<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div
    class="bg-gradient-to-b from-violet-900 to-emerald-600 text-white p-8 min-h-screen overflow-hidden"
  >
    <div class="max-w-7xl mx-auto">
      <RouterView v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  filter: blur(16px);
}
</style>
