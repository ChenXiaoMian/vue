<template>
    <transition name="move">
    <div v-show="showFlag" class="food" ref="foodWrapper">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
          <div class="back" @click="hide"><i class="icon-arrow_lift"></i></div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food"></cartcontrol>
          </div>
          <transition name="fade">
          <div @click.stop.prevent="addFirst" class="buy" v-show="!food.count || food.count===0">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品信息</h1>
          <p class="text">{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
          <ratingSelect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings" @on-result-change="onResultChange" @change-only-content="changeOnlyContent"></ratingSelect>
          <div class="rating-wrapper">
            <ul v-show="food.ratings && food.ratings.length">
              <li v-show="needShow(rating.rateType,rating.text)" v-for="rating in food.ratings" class="rating-item border-1px">
                <div class="user">
                  <span class="name">{{rating.username}}</span>
                  <img class="avatar" width="12" height="12" alt="" :src="rating.avatar">
                </div>
                <div class="time">{{rating.rateTime | formatDate}}</div>
                <p class="text">
                  <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
                </p>
              </li>
            </ul>
            <div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
          </div>
        </div>
      </div>
    </div>
    </transition>
</template>
<script>
import BScroll from 'better-scroll'
import cartcontrol from '../cartcontrol/cartcontrol'
import ratingSelect from '../ratingselect/rating-select'
import split from '../split/split'
import Vue from 'vue'
import {formatDate} from 'common/js/date'

const ALL = 2;

export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFlag : false,
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this._initScroll();
    });
  },
  methods : {
    _initScroll () {
      if(!this.foodscroll){
        this.foodscroll = new BScroll(this.$refs.foodWrapper,{
          click:true
        });
      }else{
        this.foodscroll.refresh();
      }
    },
    show () {
      this.showFlag = true;
      this.selectType = ALL;
      this.onlyContent = false;

    },
    hide () {
      this.showFlag = false;
    },
    addFirst (event) {
      if(!event._constructed){
        return;
      }
      this.$emit('addCart',event.target);
      Vue.set(this.food,'count',1);
    },
    onResultChange(val){
      this.selectType = val;
      this.$nextTick(() => {
        this.foodscroll.refresh();
      });
    },
    changeOnlyContent(){
      this.onlyContent = !this.onlyContent;
      this.$nextTick(() => {
        this.foodscroll.refresh();
      });
    },
    needShow(type,text){
      if(this.onlyContent && !text){
        return false;
      }
      if(this.selectType === ALL){
        return true;
      }else{
        return type === this.selectType;
      }
    }
  },
  filters: {
    formatDate(time){
      let date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm');
    }
  },
  components : {
    cartcontrol,
    ratingSelect,
    split
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';
  .food
    position:fixed
    left:0
    top:0
    bottom:48px
    z-index:30
    width:100%
    background:#fff
    transition:all 0.3s linear
    transform: translate3d(0,0,0)
    height:100%
    &.move-enter-active,&.move-leave-active
      transform: translate3d(100%,0,0)
    &.move-enter,&.move-leave
      transform: translate3d(100%,0,0)
    .image-header
      position:relative
      width:100%
      height:0
      padding-top:100%
      img
        position:absolute
        top:0
        left:0
        width:100%
        height:100%
      .back
        position:absolute
        top:10px
        left:0
        .icon-arrow_lift
          display:block
          padding:10px
          color:#fff
          font-size:20px
    .content
      padding:18px
      position:relative
      .title
        font-size:14px
        font-weight:700
        color:rgb(7,17,27)
        line-height:14px
        margin-bottom:8px
        color:rgb(7,17,27)
      .detail
        margin-bottom:18px
        font-size:0px
        line-height:10px
        height:10px
        .sell-count,.rating
          font-size:10px
          line-height:10px
          color:rgb(147,153,159)
        .sell-count
          margin-right:12px
      .price
        font-weight:700
        line-height:24px
        .now
          margin-right: 8px
          font-size: 14px
          color: rgb(240,20,20)
        .old
          text-decoration:line-through
          font-size:10px
          color:rgb(147,153,159)
      .cartcontrol-wrapper
        position:absolute
        right:12px
        bottom:12px
      .buy
        position:absolute
        right:18px
        bottom:18px
        z-index:10
        height:24px
        line-height:24px
        padding:0 12px
        box-sizing:border-box
        border-radius:12px
        font-size:10px
        color:#fff
        background:rgb(0,160,220)
        transition: all 0.4s linear
        opacity:1
        &.fade-enter-active,&.fade-leave-active
          opacity:0
        &.fade-enter,&.fade-leave
          opacity:0
    .info
      padding:18px
      .title
        line-height:14px
        margin-bottom:6px
        font-size:14px
        color:rgb(7,17,27)
      .text
        font-size:12px
        font-weight:200
        line-height:24px
        padding:0 8px
        color:rgb(77,85,93)
    .rating
      padding-top:18px
      .title
        line-height:14px
        margin-left:18px
        font-size:14px
        color:rgb(7,17,27)
      .rating-wrapper
        padding:0 18px
        .rating-item
          position:relative
          padding:16px 0
          border-1px(rgba(7,17,27,0.1))
          .user
            position:absolute
            top:16px
            right:0
            line-height:12px
            font-size:0
            .name
              display:inline-block
              vertical-align: top
              font-size:10px
              margin-right:6px
              color:rgb(147,153,159)
            .avatar
              border-radius:50%
          .time
            margin-bottom:6px
            line-height:12px
            font-size:10px
            color:rgb(147,153,159)
          .text
            line-height:16px
            font-size:12px
            color:rgb(7,17,27)
            .icon-thumb_up,.icon-thumb_down
              line-height:16px
              margin-right:4px
              color:rgb(147,153,159)
              font-size:12px
            .icon-thumb_up
              color:rgb(0,160,220)
            .icon-thumb_down
              color:rgb(147,153,159)
        .no-rating
         padding:16px 0
         font-size:12px
         color:rgb(147,153,159)
</style>
