<script setup lang="ts">
import { safeInject } from '../utils/injection-util'
import { toastKey } from '../injection-keys'

const toastState = safeInject(toastKey)
</script>

<template>
  <transition name="fade">
    <div v-if="toastState.show" class="toast" :class="{ 'is-visible': toastState.show }">
      {{ toastState.message }}
    </div>
  </transition>
</template>

<style scoped>
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #45a254;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

/* .fade-enter-active, */
.fade-leave-active {
  transition: opacity 0.5s ease;
}

/* .fade-enter-from, */
.fade-leave-to {
  opacity: 0;
}
</style>
