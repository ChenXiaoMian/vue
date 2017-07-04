<template>
    <div class="containerInner">
        <comHead :pageTitle="pageTitle"></comHead>
        <div class="emptyContent" v-show="isEmpty">
            <p class="emptyTip">没有您的采集记录</p>
        </div>
        <div class="content">
            <div class="weui-cells" v-for="item in result.Stock">
                <router-link :to="{path:'/historyDetail',query:{temp:'Stock',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">交易市场：{{item.Market}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>药材名称：{{item.Medicine}}</p>
                    <p>商户名称：{{item.MerchantName}}</p>
                    <p>联 系 人：{{item.ContactPerson}}</p>
                    <p>年消耗量：{{item.Consume}}公斤</p>
                    <p>库存数量：{{item.Inventory}}公斤</p>
                    <p>存量进价：{{item.InventoryCost}}</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
            <div class="weui-cells" v-for="item in result.Origin">
                <router-link :to="{path:'/historyDetail',query:{temp:'Origin',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">产地名称：{{item.BaseName}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>药材名称：{{item.Medicine}}</p>
                    <p>种 植 户：{{item.GrowerName}}</p>
                    <p>种植面积：{{item.Area}}亩</p>
                    <p>人工成本：{{item.PersonCost}}元/亩</p>
                    <p>物流成本：{{item.MaterialCost}}元/亩</p>
                    <p>种子成本：{{item.SeedCost}}元/亩</p>
                    <p>预估产量：{{item.EstimateProduction}}公斤/亩</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
            <div class="weui-cells" v-for="item in result.Output">
                <router-link :to="{path:'/historyDetail',query:{temp:'Output',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">产地名称：{{item.BaseName}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>药材名称：{{item.Medicine}}</p>
                    <p>种 植 户：{{item.GrowerName}}</p>
                    <p>产新面积：{{item.Area}}亩</p>
                    <p>单位产量：{{item.UnitProduction}}公斤/亩</p>
                    <p>产量趋势：{{item.ProdcutionTendency}}</p>
                    <p>采收价格：{{item.Price}}元/公斤</p>
                    <p>价格趋势：{{item.PriceTendency}}</p>
                    <p>种植意愿：{{item.Wish}}</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
            <div class="weui-cells" v-for="item in result.Envi">
                <router-link :to="{path:'/historyDetail',query:{temp:'Envi',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">产地名称：{{item.BaseName}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>天气状况：{{item.Weather}}</p>
                    <p>灾害描述：{{item.Disaster}}</p>
                    <p>当地政策：{{item.Policy}}</p>
                    <p>产量趋势：{{item.Tendency}}</p>
                    <p>趋势范围：{{item.Range}}%</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
            <div class="weui-cells" v-for="item in result.Pieces">
                <router-link :to="{path:'/historyDetail',query:{temp:'Pieces',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">生产商：{{item.Manufacturer}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>药材名称：{{item.Medicine}}</p>
                    <p>产地名称：{{item.BaseName}}</p>
                    <p>产量规模：{{item.Scale}}</p>
                    <p>饮片规格：{{item.Standard}}</p>
                    <p>市场表现：{{item.MarketStatus}}</p>
                    <p>市场需求：{{item.MarketTendency}}</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
            <div class="weui-cells" v-for="item in result.Pro">
                <router-link :to="{path:'/historyDetail',query:{temp:'Pro',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">产品名称：{{item.ProductName}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>生 产 商：{{item.ManufacturerName}}</p>
                    <p>原 药 材：{{item.MedicineName}}</p>
                    <p>供 应 商：{{item.Supplier}}</p>
                    <p>年销售额：{{item.Sale}}</p>
                    <p>需求趋势：{{item.ProductTendency}}</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
            <div class="weui-cells" v-for="item in result.Trading">
                <router-link :to="{path:'/historyDetail',query:{temp:'Trading',id:item.hid}}" class="c-222222">
                <div class="weui-cell fz-15">交易市场：{{item.Market}}</div>
                <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                    <p>商户名称：{{item.MerchantName}}</p>
                    <p>经营规模：{{item.Scale}}</p>
                    <p>药材名称：{{item.Medicine}}</p>
                    <p>产地名称：{{item.BaseName}}</p>
                    <p>交易类型：{{item.MedicineType}}</p>
                    <p>备　　注：{{item.Addition}}</p>
                    <p>采集时间：{{item.Time}}</p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import store from 'store';

import comHead from './common/comHead';

export default {
    data () {
        return {
            pageTitle: '历史记录',
            result: {
                Stock: [],
                Origin: [],
                Output: [],
                Envi: [],
                Pieces: [],
                Pro: [],
                Trading: []
            },
            isEmpty: false
        }
    },
    created () {
        var temp = this.$route.query.temp,
            dataStr = store.get(`hist${temp}`) ? store.get(`hist${temp}`) : '';
        if(dataStr!='undefined' && dataStr!=''){
            // console.log(dataStr);
            var data = JSON.parse(dataStr).data;
            if(data.length>0){
                this.result[temp] = data;
            }else{
                this.isEmpty = true;
            }
        }else{
            this.isEmpty = true;
        }
    },
    components:{
        comHead
    }
}
</script>

<style>

</style>
