<template>
    <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <div class="weui-cells weui-cells_radio" v-show="tempDate">
          <label class="weui-cell weui-check__label cTitem" for="x1" data-id="'+item.tid+'" data-name="'+item.tempTitle+'">
            <div class="weui-cell__bd"><p>111</p></div>
            <div class="weui-cell__ft"><input type="radio" class="weui-check" name="chooseTemp" id="x1" checked="checked"/><span class="weui-icon-checked c-3dbaff"></span></div>
          </label>
        </div>
        <div class="emptyContent" v-show="tempDate">
          <p class="emptyTip">暂无模板</p>
        </div>
    </div>
</template>

<script>
import weui from 'weui.js';
import store from 'store';
import { formatDate } from '../common/js/util';
import comHead from './common/comHead';

export default {
    data () {
        return {
          pageTitle: '选择模板',
          messenger : store.get('userName'),
          location : this.$store.getters.getLocation,
          inputTime : formatDate(new Date(),'yyyy-MM-dd hh:mm'),
          tempDate : false
        }
    },
    components: {
        comHead
    }
}
</script>

<style>

</style>
