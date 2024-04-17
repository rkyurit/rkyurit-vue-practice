<script setup lang="ts">
import SidePanel from '../components/SidePanel.vue'
import SimpleToast from '../components/SimpleToast.vue'
import { useSimpleToast } from '../composables/simple-toast'
import { ref } from 'vue'

const { showToast } = useSimpleToast()
const isOpen = ref(false)

const toggleSidePanel = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="page1">This is a page1</div>
  <div class="button-group">
    <button type="button" @click="toggleSidePanel">show side panel</button>
    <button type="button" @click="showToast('this is simple toast')">show toast</button>
  </div>
  <SidePanel :is-open="isOpen" :width="300">
    <div>SidePanel Content</div>
  </SidePanel>
  <SimpleToast />
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 10px;
}
</style>
