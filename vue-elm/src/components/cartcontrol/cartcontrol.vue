<template>
  <div class="cartcontrol">
    <transition name="move">
    <div class="cart-decrease icon-remove_circle_outline" v-show="food.count>0" @click="decreaseCart">
    </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart (event) {
        if(!event._constructed){
          return;
        }
        if(!this.food.count){
          Vue.set(this.food,'count',1);
        }else{
          this.food.count++;
        }
        this.$emit('addCart',event.target);
      },
      decreaseCart (event) {
        if(!event._constructed){
          return;
        }
        if(this.food.count){
          this.food.count--;
        }
      }
    }
  };
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size:0
    .cart-count
      display:inline-block
      font-size:10px
      color:rgb(147,153,159)
      text-align:center
      line-height:24px
      padding-top:6px
      width:12px
      vertical-align: top
    .cart-decrease
      display:inline-block
      padding:6px
      font-size:24px
      line-height:24px
      color:rgb(0,160,220)
      transition:all 0.4s linear
      transform:rotate(180deg)
      &.move-enter-active,&.move-leave
        opacity:1
        transform:translate3D(0,0,0)
        transform:rotate(180deg)
      &.move-enter,&.move-leave-active
        opacity: 0
        transform:translate3D(24px,0,0)
    .cart-add
      display:inline-block
      font-size:24px
      line-height:24px
      padding:6px
      color:rgb(0,160,220)
</style>
