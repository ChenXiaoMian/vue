<template>
    <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <div class="weui-cells weui-cells_form" id="tempType">
            <router-link to="tempStock" class="weui-cell weui-cell_access"><div class="weui-cell__bd">市场存量信息采集</div><div class="weui-cell__ft"></div></router-link>
            <router-link to="tempOrigin" class="weui-cell weui-cell_access"><div class="weui-cell__bd">产地信息采集</div><div class="weui-cell__ft"></div></router-link>
            <router-link to="tempOutput" class="weui-cell weui-cell_access"><div class="weui-cell__bd">产出信息采集</div><div class="weui-cell__ft"></div></router-link>
            <router-link to="tempEnvi" class="weui-cell weui-cell_access"><div class="weui-cell__bd">环境信息采集</div><div class="weui-cell__ft"></div></router-link>
            <router-link to="tempPieces" class="weui-cell weui-cell_access"><div class="weui-cell__bd">饮片信息采集</div><div class="weui-cell__ft"></div></router-link>
            <router-link to="tempPro" class="weui-cell weui-cell_access"><div class="weui-cell__bd">产品信息采集</div><div class="weui-cell__ft"></div></router-link>
            <router-link to="tempTrading" class="weui-cell weui-cell_access"><div class="weui-cell__bd">贸易信息采集</div><div class="weui-cell__ft"></div></router-link>
        </div>
    </div>
</template>

<script>
import comHead from './common/comHead';
export default {
  data () {
    return {
      pageTitle: '选择类型'
    }
  },
  components:{
      comHead
  }
}
</script>

<style>

</style>
