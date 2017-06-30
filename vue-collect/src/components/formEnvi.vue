<template>
  <div class="containerInner">
    <comHead :pageTitle="pageTitle"></comHead>
    <form id="form-envi" name="formEnvi" autocomplete="off">
    <div class="weui-cells weui-cells_form">
        <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
            <div class="weui-cell__hd km-line"><label class="weui-label ">选择模板</label></div>
            <div class="weui-cell__bd"><p class="c-3dbaff getChooseTemp">默认模板</p></div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'envi',key:'base'}}">
            <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
            <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}"{{envi.BaseName}}</p></div>
            <div class="weui-cell__ft"></div>
        </router-link>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label">天气状况</label></div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="Weather" v-model="envi.Weather">
                    <option value="">请选择</option>
                    <option>正常</option>
                    <option>多雨</option>
                    <option>少雨</option>
                </select>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label">灾害描述</label></div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="Disaster" v-model="envi.Disaster">
                    <option value="">请选择</option>
                    <option>正常</option>
                    <option>干旱</option>
                    <option>洪涝</option>
                    <option>地震</option>
                    <option>风沙</option>
                    <option>台风</option>
                    <option>虫灾</option>
                    <option>污染</option>
                    <option>暴雨</option>
                    <option>阴雨</option>
                    <option>寒潮</option>
                    <option>高温</option>
                    <option>冰雹</option>
                    <option>雪灾</option>
                    <option>霜冻</option>
                    <option>雨雪</option>
                    <option>酸雨</option>
                    <option>火灾</option>
                    <option>风雹</option>
                    <option>冷害</option>
                    <option>冻害</option>
                </select>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">当地政策<br />(关键词)</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请填写关键词" name="Policy" v-model="envi.Policy"/>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">产量趋势</label></div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="Tendency" v-model="envi.Tendency">
                    <option value="">请选择</option>
                    <option>持平</option>
                    <option>上升</option>
                    <option>下降</option>
                </select>
            </div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" :disabled="rangeAbled" placeholder="0" name="Range" v-model="envi.Range"/>
            </div>
            <div class="weui-cell__dw flex-20 c-c7c7c7">%</div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3" v-model="envi.Addition"></textarea>
            </div>
        </div>
    </div>
    <baseInfo :messenger="baseInfo.messenger" :location="baseInfo.location" :inputTime="baseInfo.inputTime"></baseInfo>
    <div class="km-page-button">
        <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" @click="reset">存为模板</a>
        <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" @click="submit">上传</a>
    </div>
    <!-- 保存弹出框 -->
    <div class="js_dialog" style="display: none;">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd pt-15"><strong class="weui-dialog__title c-000000">提示</strong></div>
            <div class="weui-dialog__bd"><input class="weui-input" name="tempName" type="text" placeholder="填写模板名称" emptyTips="请填写模板名称"/></div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default">取消</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary c-3dbaff" id="save-for-temp">保存</a>
            </div>
        </div>
    </div>
    </form>
  </div>
</template>

<script>
import weui from 'weui.js';
import store from 'store';
import { formatDate } from '../common/js/util';

import comHead from './common/comHead';
import baseInfo from './common/baseInfo';
export default {
  data () {
	    return {
	      pageTitle: '环境信息采集',
	      regexp: this.$store.getters.getRegexp,
	      baseInfo:{
	        messenger: store.get('userName'),
	        location: this.$store.getters.getLocation,
	        inputTime: formatDate(new Date(),'yyyy-MM-dd hh:mm')
	      },
	      envi: {
	        BaseName: '',
	        Weather: '',
	        Disaster: '',
	        Policy: '',
	        Tendency: '',
	        Range: '',
	        Addition: ''
	      },
	      isBase: false,
        rangeAbled: true
	    }
	},
  created (){
    var baseName = this.$store.getters['envi/getBaseName'];
    this.envi.BaseName = baseName || '关键字/产地名称';
    if(baseName!='') this.isBase = true;
  },
  updated (){

  },
  methods: {
    submit () {
        var _this = this;
        if(!this.isBase){
            weui.topTips('请选择产地名称');
            return false;
        }
        if(!this.isGrower){
            weui.topTips('请选择种植户');
            return false;
        }
        if(!this.isMedicine){
            weui.topTips('请选择中药材名称');
            return false;
        }

        weui.form.validate('#form-output', function(error){
            if(!error){
                var jsonData = {};
                jsonData.UserName = store.get('loginName');
                Object.assign(jsonData,_this.output); //es6
                jsonData.Address = _this.baseInfo.location;
                jsonData.Time = _this.baseInfo.inputTime;
                //过滤选择设置内容
                if(_this.isBase == false) jsonData.BaseName = '';
                if(_this.isGrower == false) jsonData.GrowerName = '';
                if(_this.isMedicine == false) jsonData.Medicine = '';
                if(_this.isCMedicine == false) jsonData.ChangeMedicine = '';
                console.log(jsonData);
                // var loading = weui.loading('上传中...');
                // _this.$http.jsonp(_this.$store.getters.getUrl+'/saveGrowOutputJSONP',{
                //   params : {"parms":JSON.stringify(jsonData)},
                //   jsonp : 'jsoncallback'
                // }).then(function(res){
                //     loading.hide();
                //     weui.toast('上传成功', 2000);
                //     jsonData.hid = new Date().getTime();
                //     jsonData.cUserName = store.get('userName');
                //     if(store.get('histOutput') && store.get('histOutput')!=''){
                //         // 更新
                //         var histOutput = JSON.parse(store.get('histOutput'));
                //         histOutput.data.unshift(jsonData);
                //         store.remove('histOutput');
                //         store.set('histOutput',JSON.stringify(histOutput));
                //     }else{
                //         // 新建
                //         var historyData = {data : []};
                //         historyData.data.unshift(jsonData);
                //         store.set('histOutput',JSON.stringify(historyData));
                //     }
                //     _this.reset();
                // },function(err){
                //   loading.hide();
                //   weui.alert('上传失败');
                // });
            }
        },this.regexp);
    },
    reset () {
        this.$store.dispatch('output/setbase','');
        this.$store.dispatch('output/setgrower','');
        this.$store.dispatch('output/setmedicine','');
        this.$store.dispatch('output/setcmedicine','');
        document.formOutput.reset();
        this.init();
    }
  },
  components: {
    	comHead,
    	baseInfo
	}
}
</script>

<style>

</style>
