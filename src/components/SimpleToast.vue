<script setup lang="ts">
import { safeInject } from '../utils/injection-util'
import { toastKey } from '../injection-keys'

const props = withDefaults(
  defineProps<{
    xAxis?: 'right' | 'left'
    yAxis?: 'top' | 'bottom'
  }>(),
  {
    xAxis: 'right',
    yAxis: 'bottom'
  }
)

const toastState = safeInject(toastKey)
</script>

<template>
  <transition name="fade">
    <div
      v-if="toastState.show"
      class="toast"
      :class="{
        'is-visible': toastState.show,
        'right-bottom': props.xAxis === 'right' && props.yAxis === 'bottom',
        'right-top': props.xAxis === 'right' && props.yAxis === 'top',
        'left-bottom': props.xAxis === 'left' && props.yAxis === 'bottom',
        'left-top': props.xAxis === 'left' && props.yAxis === 'top'
      }"
    >
      {{ toastState.message }}
    </div>
  </transition>
</template>

<style scoped>
.toast {
  /* position: fixed;
  bottom: 20px;
  right: 20px; */
  padding: 10px 20px;
  background-color: #45a254;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

.right-bottom {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.right-top {
  position: fixed;
  top: 20px;
  right: 20px;
}

.left-bottom {
  position: fixed;
  bottom: 20px;
  left: 20px;
}

.left-top {
  position: fixed;
  top: 20px;
  left: 20px;
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
