<template>
  <div class="ratings" ref="ratingsWrapper">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <star :size="36" :score="seller.serviceScore"></star>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <star :size="36" :score="seller.foodScore"></star>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}</span>
          </div>
        </div>
      </div>
      <split></split>
      <ratingSelect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="ratings" @on-result-change="onResultChange" @change-only-content="changeOnlyContent"></ratingSelect>
      <div class="rating-wrapper">
        <ul>
          <li v-for="rating in ratings" class="rating-item">
            <div class="avatar">
              <img :src="rating.avatar" width="28" height="28">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend" v-show="rating.recommend && rating.recommend.length">
                <span class="icon-thumb_up"></span>
                <span v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime | formatDate}}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import star from '../star/star'
import ratingSelect from '../ratingselect/rating-select'
import split from '../split/split'
import {formatDate} from 'common/js/date'

const ALL = 2;

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      ratings: [],
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
    this.axios.get('/api/ratings').then((response) => {
      if(response.data.error===0){
        this.ratings = response.data.data;
        this.$nextTick(() => {
          this._initScroll();
        });
      }
    });
  },
  methods:{
    _initScroll () {
      if(!this.ratingscroll){
        this.ratingscroll = new BScroll(this.$refs.ratingsWrapper,{
          click:true
        });
      }else{
        this.ratingscroll.refresh();
      }
    },
    onResultChange(val){
      this.selectType = val;
    },
    changeOnlyContent(){
      this.onlyContent = !this.onlyContent;
    },

  },
  filters: {
    formatDate(time){
      let date = new Date(time);
      return formatDate(date,'yyyy-MM-dd hh:mm');
    }
  },
  components: {
    star,
    ratingSelect,
    split
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .ratings
    position: absolute
    top: 174px
    bottom: 0
    left: 0
    width: 100%
    overflow: hidden
    .overview
      display: flex
      padding: 18px 0
      .overview-left
        flex: 0 0 137px
        width: 137px
        border-right: 1px solid rgba(7,17,27,0.1)
        text-align: center
        padding:6px 0
        @media only screen and (max-width:320px)
          flex: 0 0 120px
          width: 120px
        .score
          font-size: 24px
          line-height: 28px
          color: rgb(255,153,0)
          margin-bottom:6px
        .title
          font-size:12px
          color:rgb(7,17,27)
          line-height:12px
          margin-bottom:8px
          font-weight:bold
        .rank
          font-size:10px
          color:rgb(7,17,27)
          line-height:10px
      .overview-right
        flex:1
        padding:6px 0 6px 24px
        @media only screen and (max-width:320px)
          padding-left:6px
        .score-wrapper
          margin-bottom:8px
          font-size:0
          .title
            display:inline-block
            vertical-align:top
            font-size:12px
            color:rgb(7,17,27)
            line-height:18px
          .star
            display:inline-block
            vertical-align:top
            margin:0 12px
          .score
            display:inline-block
            vertical-align:top
            font-size:12px
            color: rgb(255,153,0)
            line-height:18px
        .delivery-wrapper
          font-size:0
          .title
            font-size:12px
            color:rgb(7,17,27)
            line-height:18px
          .delivery
            margin-left:12px
            font-size:12px
            color:rgb(147,153,159)
            line-height:18px
</style>
