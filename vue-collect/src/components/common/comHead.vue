<template>
  <header class="comHead">
      <a class="backTo" @click="backTo"><i class="iconfont icon-back"></i></a><div class="headTitle">{{pageTitle}}</div>
  </header>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String
    }
  },
  methods: {
    backTo: function(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>

</style>
