<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

:root {
  --brand-color: #90ee90;
  --brand-color-light: #e0f2e9;
  --brand-color-dark: #76c893;

  --text-color: #333333;
  --text-color-light: #ffffff;

  --background-color: #ffffff;
  --background-color-dark: #b5b1b188;

  --hover-color: #f0f0f0;
}
</style>
