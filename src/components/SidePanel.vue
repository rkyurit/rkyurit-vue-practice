<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ isOpen: boolean; width?: number }>(), { width: 300 })
const open = ref(false)

watch(
  () => props.isOpen,
  (isOpen) => {
    open.value = isOpen
  }
)

onMounted(async () => {
  // props.isOpenがtrueの場合もスライドアニメーションを実行させるため
  // 1フレーム待ってからopenを変更する
  await nextTick()
  setTimeout(() => {
    open.value = props.isOpen
  }, 10)
})
</script>

<template>
  <div class="slide-panel" :class="{ 'is-open': open }">
    <Suspense>
      <slot></slot>
      <template #fallback>検索中...</template>
    </Suspense>
  </div>
</template>

<style scoped>
.slide-panel {
  width: v-bind('`${props.width}px`');
  height: 100%;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  right: v-bind('`${-(props.width + 20 *2)}px`');
  transition: right 0.5s;
}

.slide-panel.is-open {
  right: 0; /* パネルを開く */
}
</style>
