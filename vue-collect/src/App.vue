<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
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
