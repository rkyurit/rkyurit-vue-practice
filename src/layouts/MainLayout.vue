<script setup lang="ts"></script>

<template>
  <div class="container">
    <nav class="sidebar">
      <div class="logo">
        <span>Sample</span>
      </div>
      <ul>
        <li><router-link to="/">page1</router-link></li>
        <li><router-link to="/page2">page2</router-link></li>
      </ul>
    </nav>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.sidebar .logo {
  margin-bottom: 20px;
  text-align: center;
  padding: 10px;
}

.sidebar .logo img {
  max-width: 100%;
  height: auto;
}

.sidebar .logo span {
  display: block;
  font-weight: bold;
}
.container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 20%;
  min-width: 200px;
  height: 100%;
  background-color: var(--background-color);
  color: var(--text-color);
  padding: 0 10px;
  overflow-y: auto;
  border-right: 2px solid var(--background-color-dark);
}

.sidebar .logo {
  /* margin-bottom: 20px; */
  text-align: center;
}

.sidebar .logo img {
  max-width: 100%;
  height: auto;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li a {
  display: block;
  padding: 8px;
  text-decoration: none;
  color: var(--text-color);
  padding: 8px;
  padding-left: 5px;
  transition: background-color 0.3s;
}

.sidebar ul li a:hover {
  background-color: var(--brand-color-light);
}

.content {
  width: 80%;
  padding: 10px;
  background-color: var(--background-color);
}
</style>
