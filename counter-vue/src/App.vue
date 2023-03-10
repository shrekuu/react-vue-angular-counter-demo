<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)

function increment() {
  count.value++
  }

  function decrement() {
    count.value--
  }
</script>

<template>
  <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
      </div>
      <h1>Vite + React</h1>
      <div>{{count}}</div>
      <div className="card">
        <button @click="increment"> + </button>
        <button @click="decrement"> - </button>
      </div>
    </div>
</template>























<style scoped>
#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.card button {
  margin: 10px;
}

.read-the-docs {
  color: #888;
}
</style>
