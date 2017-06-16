<template>
  <div class="page containerInner">
        <header class="comHead">
            <router-link to="/" class="backTo"><i class="iconfont icon-back"></i></router-link><div class="headTitle">市场存量信息采集</div>
        </header>
        <form id="form-stock" name="formStock">
        <div class="weui-cells weui-cells_form">
            <a class="weui-cell weui-cell_access js-tempChoose" href="javascript:;" data-item="tempStock">
                <div class="weui-cell__hd km-line"><label class="weui-label ">选择模板</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 getChooseTemp">默认模板</p></div>
                <div class="weui-cell__ft">
                </div>
            </a>
            <a class="weui-cell weui-cell_access js-itemSearch" href="javascript:;" data-search="market">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易市场</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 stockText-market">关键字/市场名称</p><input type="hidden" required name="Market" class="stockVal-market" emptyTips="请选择交易市场"/></div>
                <div class="weui-cell__ft"></div>
            </a>
            <a class="weui-cell weui-cell_access js-itemSearch" href="javascript:;" data-search="medicine">
                <div class="weui-cell__hd km-line"><label class="weui-label ">药材名称</label></div>
                <div class="weui-cell__bd"><p class="c-c7c7c7 stockText-medicine">关键字/中药材名称</p><input type="hidden" required name="Medicine" class="stockVal-medicine" emptyTips="请选择药材市场"/></div>
                <div class="weui-cell__ft"></div>
            </a>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">商户名称</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="MerchantName" placeholder="请填写商户名称"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">商户地址</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="MerchantAddress" placeholder="请填写商户地址"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">联 系 人</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="ContactPerson" placeholder="请填写联系人姓名"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">联系方式</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="tel" name="Phone" placeholder="请填写联系人电话"/>
                </div>
            </div>
        </div>
        <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">年消耗量<br />(总)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" name="Consume" placeholder="" emptyTips="请输入年消耗量(总)" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">库存数量</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" required type="text" pattern="REG_NUMBER" name="Inventory" placeholder="" emptyTips="请输入库存数量" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">存量进价<br />(平均)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="InventoryCost" placeholder="" emptyTips="存量进价 (平均)" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">库存地址</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" name="InventoryAddress" placeholder="请填写库存地址"/>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line align-start"><label class="weui-label ">备注说明</label></div>
                <div class="weui-cell__bd">
                    <textarea class="weui-textarea" placeholder="请填写备注说明" name="Addition" rows="3"></textarea>
                </div>
            </div>
        </div>
        <div class="weui-panel">
            <div class="weui-panel__bd">
                <div class="weui-media-box weui-media-box_text km-media-box_text">
                    <p><span class="adLet">信 息 员：</span>{{messenger}}</p>
                    <p><span>采集地址：</span>{{location}}</p>
                    <p><span>采集时间：</span>{{inputTime}}</p>
                </div>
            </div>
        </div>
        <div class="km-page-button">
            <a href="javascript:;" class="weui-btn weui-btn_plain-default km-btn_default" id="open-temp-dialog">存为模板</a>
            <a href="javascript:;" class="weui-btn weui-btn_plain-primary km-btn_primary" id="form-stock-submit">上传</a>
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
import md5 from 'js-md5';
import store from 'store';
import Cookies from 'cookies';
import { formatDate,getPosition } from '../common/js/util';

export default {
  data () {
    return {
      messenger : '',
      location : getPosition(),
      inputTime : formatDate(new Date(),'yyyy-MM-dd hh:mm')
    }
  },
  created () {

  },
  methods: {
    getNow () {
      let now = new Date();
      return now;
    }
  }
}
</script>

<style>
.adLet{
  letter-spacing: 0px;
}
</style>
