<template>
  <div>
  <div class="shopcart">
     <div class="content" @click="toggleList">
       <div class="content-left">
         <div class="logo-wrapper">
           <div class="logo" :class="{'highlight':totalCount>0}">
             <span class="icon-shopping_cart" :class="{'highlight':totalCount>0}"></span>
           </div>
           <div class="num" v-show="totalCount>0">{{totalCount}}</div>
         </div>
         <div class="price" :class="{'highlight':totalPrice>0}">￥{{totalPrice}}</div>
         <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
       </div>
       <div class="content-right" @click.stop.prevent="pay">
         <div class="pay" :class="payClass">{{payDesc}}</div>
       </div>
     </div>
     <div class="ball-container">
        <transition-group name="ball-list" v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter" tag="div">
          <div v-for="ball in balls" v-bind:key="ball" v-show="ball.show" class="ball"></div>
        </transition-group>
     </div>
     <transition name="fold">
     <div class="shopcart-list" v-show="listShow">
        <div class="list-header">
          <h1 class="title">购物车</h1>
          <span class="empty" @click="empty">清空</span>
        </div>
        <div class="list-content" ref="listContent">
          <ul>
            <li class="food" v-for="food in selectFoods">
              <span class="name">{{food.name}}</span>
              <div class="price">
                <span>￥{{food.price*food.count}}</span>
              </div>
              <div class="cartcontrol-wrapper">
                <cartcontrol :food="food"></cartcontrol>
              </div>
            </li>
          </ul>
        </div>
     </div>
     </transition>
  </div>
  <transition name="fade">
    <div class="list-mask" @click="hideList" v-show="listShow"></div>
  </transition>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol'
export default {
  props : {
    selectFoods: {
      type: Array,
      default () {
        return [{
          price: 0,
          count: 0
        }];
      }
    },
    deliveryPrice : {
      type: Number,
      default: 0
    },
    minPrice : {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      balls : [
        {
          show : false
        },
        {
          show : false
        },
        {
          show : false
        },
        {
          show : false
        },
        {
          show : false
        }
      ],
      dropBalls : [],
      fold : true
    }
  },
  computed : {
    totalPrice () {
      let total = 0;
      this.selectFoods.forEach((food)=>{
        total += food.price * food.count;
      });
      return total;
    },
    totalCount () {
      let count = 0;
      this.selectFoods.forEach((food)=>{
        count += food.count;
      });
      return count;
    },
    payDesc () {
      if(this.totalPrice === 0){
        return `￥${this.minPrice}元起送`;
      }else if(this.totalPrice < this.minPrice){
        let diff = this.minPrice - this.totalPrice;
        return `还差￥${diff}元起送`;
      }else{
        return '去结算';
      }
    },
    payClass () {
      if(this.totalPrice < this.minPrice){
        return 'not-enough';
      }else{
        return 'enough';
      }
    },
    listShow () {
      if(!this.totalCount){
        this.fold = true;
        return false;
      }
      let show = !this.fold;
      if(show){
        this.$nextTick(() =>{
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.listContent,{
              click:true
            });
          }else{
            this.scroll.refresh();
          }
        });
      }
      return show;
    }
  },
  methods : {
    drop(el){
      for(let i=0;i<this.balls.length;i++){
        let ball = this.balls[i];
        if(!ball.show){
          ball.show = true;
          ball.el = el;
          this.dropBalls.push(ball);
          return;
        }
      }
    },
    beforeEnter:function(el){
      let count = this.balls.length;
      while (count--) {
        let ball = this.balls[count];
        if(ball.show){
          let rect = ball.el.getBoundingClientRect();
          let x = -rect.left - 32;
          let y = -rect.top - 22;
          el.style.display = '';
          el.style.webkitTransform = `translate3d(${x}px,${y}px,0)`;
          el.style.transform = `translate3d(${x}px,${y}px,0)`;
        }
      }
    },
    enter:function(el){
      let rf = el.offsetHeigth;
      this.$nextTick(() => {
        el.style.webkitTransform = 'translate3d(0,0,0)';
        el.style.transform = 'translate3d(0,0,0)';
      });
    },
    afterEnter:function(el){
      let ball = this.dropBalls.shift();
      if(ball){
        ball.show = false;
        el.style.display = 'none';
      }
    },
    toggleList () {
      if(!this.totalCount){
        return;
      }
      this.fold = !this.fold;
    },
    empty () {
      this.selectFoods.forEach((food)=>{
        food.count = 0;
      });
    },
    hideList () {
      this.fold = true;
    },
    pay () {
      if(this.totalPrice<this.minPrice){
        return;
      }
      window.alert(`支付${this.totalPrice}元`);
    }
  },
  components: {
    cartcontrol
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';
  .shopcart
    position:fixed
    left:0
    bottom:0
    z-index:50
    width:100%
    height:48px
    .content
      display:flex
      background: #141d27
      font-size:0
      .content-left
        flex:1
        .logo-wrapper
          display:inline-block
          position:relative
          top:-10px
          margin:0 12px
          padding:6px
          width:56px
          height:56px
          box-sizing:border-box
          vertical-align:top
          border-radius:50%
          background: #141d27
          .logo
            width:100%
            height:100%
            border-radius:50%
            background:#2b343c
            text-align:center
            &.highlight
              background:rgb(0,160,220)
            .icon-shopping_cart
              font-size:24px
              line-height:44px
              color:#80858a
              &.highlight
                color:#fff
          .num
            position:absolute
            top:0
            right:0
            width:24px
            height:16px
            line-height:16px
            text-align:center
            border-radius:16px
            background:#F01414
            color:#fff
            font-size:9px
            font-weight:700
            box-shadow:0 4px 8px 0 rgba(0,0,0,0.4)
        .price
          display:inline-block
          vertical-align:top
          line-height:24px
          margin-top:12px
          padding-right:12px
          box-sizing:border-box
          border-right:1px solid rgba(255,255,255,0.1)
          font-size:16px
          font-weight:700
          color:rgba(255,255,255,0.4)
          &.highlight
            color:#fff
        .desc
          display:inline-block
          vertical-align:top
          margin:12px 0 0 12px
          line-height:24px
          color:rgba(255,255,255,0.4)
          font-size:10px
      .content-right
        flex:0 0 105px
        width:105px
        background:#2B333B
        .pay
          line-height:48px
          height:48px
          text-align:center
          font-size:12px
          color:rgba(255,255,255,0.4)
          font-weight:700
          &.not-enough
            background:#2B333B
            color:#fff
          &.enough
            background:#00b43c
            color:#fff
    .ball-container
      .ball
        position:fixed
        left:32px
        bottom:22px
        z-index:200
        width:16px
        height:16px
        transition:all 0.4s linear
        border-radius:50%
        background:rgb(0,160,220)
      .ball-list-move
        transition:transform 1s
    .shopcart-list
      position:absolute
      left:0
      top:0
      z-index:-1
      width:100%
      transition:all 0.5s
      transform:translate3d(0,-100%,0)
      &.fold-enter-active,&.fold-leave-active
        transform:translate3d(0,0,0)
      .list-header
        height:40px
        background:#f3f5f7
        padding:0 18px
        border-bottom:1px solid rgba(7,17,27,0.1)
        .title
          line-height:40px
          font-size:14px
          font-weight:200
          color:rgb(7,17,27)
          float:left
        .empty
          font-size:12px
          color:rgb(0,160,220)
          line-height:40px
          color:#3EADE0
          float:right
      .list-content
        padding:0 18px
        max-height:217px
        background:#fff
        overflow: hidden
        .food
          padding:12px 0
          box-sizing:border-box
          border-1px(rgba(7,17,27,0.1))
          .name
            line-height:24px
            font-size:14px
            color:rgb(7,17,27)
          .price
            position:absolute
            right:90px
            bottom:12px
            line-height:24px
            font-size:14px
            color:rgb(240,20,20)
            font-weight:700
          .cartcontrol-wrapper
            position:absolute
            right:0
            bottom:6px
  .list-mask
    position:fixed
    top:0
    left:0
    z-index:40
    width:100%
    height:100%
    transition:all 0.3s linear
    backdrop-filter:blur(10px)
    background:rgba(7,17,27,0.6)
    &.fade-enter-active,&.fade-leave-active
      transition: opacity .5s
    &.fade-enter,&.fade-leave-active
      opacity: 0
</style>
