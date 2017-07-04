<template>
  <div class="containerInner">
    <comHead :pageTitle="pageTitle"></comHead>
    <form id="form-pieces" name="formPieces" autocomplete="off">
    <div class="weui-cells weui-cells_form">
        <router-link class="weui-cell weui-cell_access js-tempChoose" :to="{path:'/chooseTemp',query:{num:1}}">
            <div class="weui-cell__hd km-line"><label class="weui-label ">选择模板</label></div>
            <div class="weui-cell__bd"><p class="c-3dbaff getChooseTemp">默认模板</p></div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'pieces',key:'manufacturer'}}">
            <div class="weui-cell__hd km-line"><label class="weui-label adLet">生 产 商</label></div>
            <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isManu,'c-c7c7c7':!isManu}">{{pieces.Manufacturer}}</p></div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'pieces',key:'medicine'}}">
            <div class="weui-cell__hd km-line"><label class="weui-label adLet">药材名称</label></div>
            <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isMedicine,'c-c7c7c7':!isMedicine}">{{pieces.Medicine}}</p></div>
            <div class="weui-cell__ft"></div>
        </router-link>
        <router-link class="weui-cell weui-cell_access js-itemSearch" :to="{path:'/searchItem',query:{temp:'pieces',key:'base'}}">
            <div class="weui-cell__hd km-line"><label class="weui-label">产地名称</label></div>
            <div class="weui-cell__bd"><p v-bind:class="{'c-3dbaff':isBase,'c-c7c7c7':!isBase}">{{pieces.BaseName}}</p></div>
            <div class="weui-cell__ft"></div>
        </router-link>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">产量规模<br>(加工量)</label></div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="Scale" v-model="pieces.Scale">
                    <option value="">请选择</option>
                    <option>持平</option>
                    <option>增加</option>
                    <option>减少</option>
                </select>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">饮片规格</label></div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="Standard" v-model="pieces.Standard">
                    <option value="">请选择</option>
                    <option>统货</option>
                    <option>一等货</option>
                    <option>二等货</option>
                    <option>特等货</option>
                </select>
            </div>
        </div>
    </div>
    <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">供 应 商<br>(原材料)</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请填写原材料供应商名称" name="Supplier" v-model="pieces.Supplier">
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">市场表现<br>(饮片)</label></div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="MarketStatus" v-model="pieces.MarketStatus">
                    <option value="">请选择</option>
                    <option>正常</option>
                    <option>活跃</option>
                    <option>不活跃</option>
                </select>
            </div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line"><label class="weui-label ">市场需求<br>(饮片)</label></div>
            <div class="weui-cell__bd">
                <input class="weui-input" type="text" placeholder="请填写饮片市场需求" name="MarketTendency" v-model="pieces.MarketTendency">
            </div>
            <div class="weui-cell__ft"></div>
        </div>
        <div class="weui-cell">
            <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
            <div class="weui-cell__bd">
                <textarea class="weui-textarea" name="Addition" placeholder="请填写备注说明" rows="3" v-model="pieces.Addition"></textarea>
            </div>
        </div>
    </div>
    <baseInfo></baseInfo>
    <div class="km-page-button">
        <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" @click="reset">存为模板</a>
        <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" @click="submit">上传</a>
    </div>
    <!-- 保存弹出框 -->
    <div class="js_dialog" style="display: none;">
        <div class="weui-mask"></div>
        <div class="weui-dialog">
            <div class="weui-dialog__hd pt-15"><strong class="weui-dialog__title c-000000">提示</strong></div>
            <div class="weui-dialog__bd"><input class="weui-input" name="tempName" type="text" placeholder="填写模板名称" emptyTips="请填写模板名称"></div>
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
      pageTitle: '饮片信息采集',
      regexp: this.$store.getters.getRegexp,
      pieces: {
        Manufacturer: '',
        Medicine: '',
        BaseName: '',
        Scale: '',
        Standard: '',
        Supplier: '',
        MarketStatus: '',
        MarketTendency: '',
        Addition: ''
      },
      isManu: false,
      isMedicine: false,
      isBase: false
    }
  },
  created (){
    var manu = this.$store.getters['pieces/getManu'],
    	medicine = this.$store.getters['pieces/getMedicine'],
        baseName = this.$store.getters['pieces/getBaseName'];
    this.pieces.Manufacturer = manu || '关键字/生产商名称';
    this.pieces.Medicine = medicine || '关键字/中药材名称';
    this.pieces.BaseName = baseName || '关键字/产地名称';
    if(manu!='') this.isManu = true;
    if(medicine!='') this.isMedicine = true;
    if(baseName!='') this.isBase = true;
  },
  updated (){
    weui.form.checkIfBlur('#form-pieces', this.regexp);
  },
  methods: {
    init () {
    	this.pieces.Manufacturer = '关键字/生产商名称';
    	this.pieces.Medicine = '关键字/中药材名称';
        this.pieces.BaseName = '关键字/产地名称';
        this.isManu = false;
        this.isMedicine = false;
        this.isBase = false;
    },
    submit () {
        var _this = this;
        if(!this.isManu){
            weui.topTips('请选择生产商名称');
            return false;
        }
        if(!this.isMedicine){
            weui.topTips('请选择中药材名称');
            return false;
        }
        if(!this.isBase){
            weui.topTips('请选择产地名称');
            return false;
        }
        weui.form.validate('#form-pieces', function(error){
            if(!error){
                var jsonData = {};
                jsonData.UserName = store.get('loginName');
                Object.assign(jsonData,_this.pieces); //es6
                jsonData.Address = _this.$store.getters.getLocation;
                jsonData.Time = formatDate(new Date(),'yyyy-MM-dd hh:mm');
                //过滤选择设置内容
                if(_this.isBase == false) jsonData.BaseName = '';
                // console.log(jsonData);
                var loading = weui.loading('上传中...');
                _this.$http.jsonp(_this.$store.getters.getUrl+'/saveManufactureSliceJSONP',{
                  params : {"parms":JSON.stringify(jsonData)},
                  jsonp : 'jsoncallback'
                }).then(function(res){
                    loading.hide();
                    weui.toast('上传成功', 2000);
                    jsonData.hid = new Date().getTime();
                    jsonData.cUserName = store.get('userName');
                    if(store.get('histPieces') && store.get('histPieces')!=''){
                        // 更新
                        var histPieces = JSON.parse(store.get('histPieces'));
                        histPieces.data.unshift(jsonData);
                        store.remove('histPieces');
                        store.set('histPieces',JSON.stringify(histPieces));
                    }else{
                        // 新建
                        var historyData = {data : []};
                        historyData.data.unshift(jsonData);
                        store.set('histPieces',JSON.stringify(historyData));
                    }
                    _this.reset();
                },function(err){
                  loading.hide();
                  weui.alert('上传失败');
                });
            }
        },this.regexp);
    },
    reset () {
        this.$store.dispatch('pieces/setmanufacturer','');
        this.$store.dispatch('pieces/setmedicine','');
        this.$store.dispatch('pieces/setbase','');
        document.formPieces.reset();
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
