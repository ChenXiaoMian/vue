<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
