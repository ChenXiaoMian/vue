<template>
    <div class="innerType">
        <div class="weui-cells weui-cells_form" v-for="(item,index) in standardList">
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label adLet">规 格 {{index+1}}</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="Standard" v-model="item.Standard">
                        <option v-bind:value="ss" v-for="ss in standardArr">{{ss}}</option>
                    </select>
                </div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易数量<br />(日平均)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" placeholder="" name="TradeProduction" v-model="item.TradeProduction"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label ">交易价格<br />(日平均)</label></div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" required placeholder="" name="Price" emptyTips="请输入交易价格" v-model="item.Price"/>
                </div>
                <div class="weui-cell__dw c-c7c7c7">元/公斤</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">价格趋势</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="PriceTendency" v-model="item.PriceTendency" @change="changeIsAbled(item.PriceTendency,item)">
                        <option value="">请选择</option>
                        <option value="持平">持平</option>
                        <option value="上升">上升</option>
                        <option value="下降">下降</option>
                    </select>
                </div>
                <div class="weui-cell__bd">
                    <input class="weui-input" type="text" pattern="REG_NUMBER" notmatchtips="请输入正确的数字格式" :disabled="item.isAbled" placeholder="0" name="PriceRange" v-model="item.PriceRange"/>
                </div>
                <div class="weui-cell__dw flex-20 c-c7c7c7">%</div>
            </div>
            <div class="weui-cell">
                <div class="weui-cell__hd km-line"><label class="weui-label">市场表现</label></div>
                <div class="weui-cell__bd">
                    <select class="weui-select" name="MarketStatus" v-model="item.MarketStatus">
                        <option value="">请选择</option>
                        <option value="正常">正常</option>
                        <option value="活跃">活跃</option>
                        <option value="不活跃">不活跃</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        standardList:{
            type: Array
        },
        standardArr:{
            type: Array
        }
    },
    methods: {
        changeIsAbled (val,item) {
            item.isAbled = (val=='上升' || val=='下降') ? false : true;          
        }
    }
}
</script>

<style>

</style>
