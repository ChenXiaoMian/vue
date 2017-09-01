<template>
    <div class="tempChoose">
        <header class="comHead">
            <a class="backTo" @click="backTo"><i class="iconfont icon-back"></i></a><div class="headTitle">选择模板</div>
        </header>
        <div class="weui-cells weui-cells_radio">
          <label class="weui-cell weui-check__label" v-bind:for="'x'+index" v-for="(item,index) in tempData" @click="select(item)">
            <div class="weui-cell__bd"><p>{{item.tempTitle}}</p></div>
            <div class="weui-cell__ft"><input type="radio" class="weui-check" name="chooseTemp" v-bind:id="'x'+index" :checked="item.tempTitle==tempTitle"/><span class="weui-icon-checked c-3dbaff"></span></div>
          </label>
        </div>
        <div class="emptyContent" v-show="tempData.length==0">
          <p class="emptyTip">暂无模板</p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        tempData: {
            type: Array
        },
        tempTitle: {
            type: String
        },
        temp:{
            type: String
        }
    },
    methods: {
        backTo () {
			this.$emit('tclose');
		},
        select (item) {
            this.$store.dispatch(`${this.temp}/settemp`,item.tempTitle);
            this.$store.dispatch(`${this.temp}/setAll`,item);
            this.$emit('tclose');
        }
    }
}
</script>

<style>

</style>
