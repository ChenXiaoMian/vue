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

export default {
  props:{
  	messenger: {
  		type: String
  	},
  	location: {
  		type: String
  	},
  	inputTime: {
  		type: String
  	}
  }
}
</script>

<style>

</style>
