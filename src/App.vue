<template>
    <div id="app">
        <home-page/>
    </div>
</template>

<script>
import HomePage from './components/AppHome.vue'

export default {
    name: 'App',
    components: {
    HomePage
    }
}
</script>

<style lang="scss">
html {
    box-sizing: border-box;
}
html, body, #app {
    height: 100%;
}
*, *::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
</style>
