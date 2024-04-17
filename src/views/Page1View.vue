<script setup lang="ts">
import SidePanel from '../components/SidePanel.vue'
import SimpleToast from '../components/SimpleToast.vue'
import { useSimpleToast } from '../composables/simple-toast'
import { ref } from 'vue'

const { showToast, showDangerToast, showWarningToast, showInfoToast, showSuccessToast } =
  useSimpleToast()
const isOpen = ref(false)

const toggleSidePanel = () => {
  isOpen.value = !isOpen.value
}
const toastXaxis = ref<'right' | 'left'>('right')
const toastYaxis = ref<'top' | 'bottom'>('bottom')
const onShowToastClick = (xAxis: 'right' | 'left', yAxis: 'top' | 'bottom') => {
  toastXaxis.value = xAxis
  toastYaxis.value = yAxis
  showToast(`this is ${xAxis}-${yAxis} toast`)
}
const onShowColorToastClick = (showToast: (msg: string) => void) => {
  toastXaxis.value = 'right'
  toastYaxis.value = 'top'
  showToast('this is color toast')
}
</script>

<template>
  <div class="page1">This is a page1</div>
  <div class="button-group">
    <button type="button" @click="toggleSidePanel">
      {{ `${isOpen ? 'hide' : 'show'} side panel` }}
    </button>
  </div>
  <div class="button-group">
    <button type="button" @click="onShowToastClick('right', 'bottom')">
      show right-bottom toast
    </button>
    <button type="button" @click="onShowToastClick('right', 'top')">show right-top toast</button>
    <button type="button" @click="onShowToastClick('left', 'bottom')">
      show left-bottom toast
    </button>
    <button type="button" @click="onShowToastClick('left', 'top')">show left-top toast</button>
  </div>
  <div class="button-group">
    <button type="button" @click="onShowColorToastClick(showDangerToast)">show danger toast</button>
    <button type="button" @click="onShowColorToastClick(showWarningToast)">
      show warning toast
    </button>
    <button type="button" @click="onShowColorToastClick(showInfoToast)">show info toast</button>
    <button type="button" @click="onShowColorToastClick(showSuccessToast)">
      show success toast
    </button>
  </div>
  <SidePanel :is-open="isOpen" :width="300">
    <div>SidePanel Content</div>
  </SidePanel>
  <SimpleToast :x-axis="toastXaxis" :y-axis="toastYaxis" />
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
  padding: 10px;
}
</style>
