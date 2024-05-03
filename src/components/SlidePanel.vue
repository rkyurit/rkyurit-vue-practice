<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'

const props = withDefaults(defineProps<{ isOpen: boolean; width?: number }>(), { width: 300 })
const emit = defineEmits<{
  'click:close': [void]
}>()

const open = ref(false)

const panelWidth = computed(() => Math.max(50, props.width + extraWidth.value))
const extraWidth = ref(0)
const initialX = ref<number>()
const initialY = ref<number>()
const isSliding = ref(false)

watch(
  () => props.isOpen,
  (isOpen) => {
    open.value = isOpen
  }
)

const onSlideDragStart = (e: any) => {
  isSliding.value = true
  if (initialX.value === undefined || initialY.value === undefined) {
    initialX.value = e.clientX
    initialY.value = e.clientY
  }
  document.addEventListener('mousemove', onSlideDrag)
  document.addEventListener('mouseup', onSlideDragEnd)
}

const onSlideDrag = (e: any) => {
  if (initialX.value) {
    extraWidth.value = initialX.value - e.clientX
  }
}
const onSlideDragEnd = (e: any) => {
  if (initialX.value) {
    extraWidth.value = initialX.value - e.clientX
  }
  isSliding.value = false
  document.removeEventListener('mousemove', onSlideDrag)
  document.removeEventListener('mouseup', onSlideDragEnd)
}

onMounted(async () => {
  // props.isOpenがtrueの場合もスライドアニメーションを実行させるため
  // hide状態の描画をまつ
  await nextTick()
  setTimeout(() => {
    open.value = props.isOpen
  }, 10)
})
</script>

<template>
  <div class="slide-panel" :class="{ 'is-open': open }">
    <button class="close-btn" type="button" @click="emit('click:close')">X</button>
    <div class="slide-panel-content-wrapper">
      <div class="bar">
        <button
          id="slide-button"
          type="button"
          @mousedown="onSlideDragStart"
          @mousemove="isSliding ? onSlideDrag($event) : undefined"
          @mouseup="onSlideDragEnd"
        >
          <!-- @dragstart="onSlideDragStart"
          @drag="onSlideDrag"
          @dragend="onSlideDragEnd"
          draggable="true"
        > -->
          ::
        </button>
      </div>
      <div class="content">
        <Suspense>
          <slot></slot>
          <template #fallback>検索中...</template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-panel {
  width: v-bind('`${panelWidth}px`');
  height: 100%;
  padding: 0;
  background-color: #f8f8f8;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0; /* ヘッダーの高さ */
  right: v-bind('`${-panelWidth}px`');
  transition: right 0.5s;

  /* position: relative; */
  .close-btn {
    position: absolute;
    top: 5px;
    right: 10px;
  }

  .slide-panel-content-wrapper {
    display: flex;
    height: 100%;
    padding-right: 20px;
    .bar {
      display: grid;
      place-items: center;

      width: 10px;
      /* border: 1px solid #000; */
      margin-right: 10px;
    }
    .content {
      margin-top: 20px;
      flex-grow: 1;
    }
  }
}

.slide-panel.is-open {
  right: 0; /* パネルを開く */
}
</style>
