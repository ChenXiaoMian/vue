<template>
	<div class="weui-panel">
        <div class="weui-panel__bd">
            <div class="weui-media-box weui-media-box_text km-media-box_text">
                <p><span class="adLet">信 息 员：</span>{{messenger}}</p>
                <p><span>采集地址：</span>{{location}}</p>
                <p><span>采集时间：</span>{{inputTime}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import store from 'store';
import { formatDate } from '../../common/js/util';

export default {
  data () {
    return {
      messenger: store.get('userName'),
      location: this.$store.getters.getLocation,
      inputTime: formatDate(new Date(),'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style>

</style>
