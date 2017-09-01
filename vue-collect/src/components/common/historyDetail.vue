<template>
    <div class="detailWrap">
        <header class="comHead">
            <a class="backTo" @click="backTo"><i class="iconfont icon-back"></i></a><div class="headTitle">{{title}}</div>
        </header>
        <div class="km-cells__title bg-eaeff3">
            <p v-show="dresult.cUserName">信息员：{{dresult.cUserName}}</p>
            <p v-show="dresult.Time">采集时间：{{dresult.Time}}</p>
            <p v-show="dresult.Address">采集地点：{{dresult.Address}}</p>
        </div>
        <div class="weui-cells">
            <div class="weui-cell fz-15">信息详情</div>
            <div class="weui-cell c-666666 align-items-left direction-column lh-24">
                <p v-show="dresult.Market">交易市场：{{dresult.Market}}</p>
                <p v-show="dresult.MerchantName">商户名称：{{dresult.MerchantName}}</p>
                <p v-show="dresult.MerchantAddress">商户地址：{{dresult.MerchantAddress}}</p>
                <p v-show="dresult.ContactPerson">联系人：{{dresult.ContactPerson}}</p>
                <p v-show="dresult.Phone">联系方式：{{dresult.Phone}}</p>
                <p v-show="dresult.Consume">年消耗量：{{dresult.Consume}} 公斤</p>
                <p v-show="dresult.Inventory">库存数量：{{dresult.Inventory}} 公斤</p>
                <p v-show="dresult.InventoryCost">存量进价：{{dresult.InventoryCost}} 元/公斤</p>
                <p v-show="dresult.InventoryAddress">库存地址：{{dresult.InventoryAddress}}</p>
                <p v-show="dresult.Product">产品类型：{{dresult.Product}}</p>
                <p v-show="dresult.ProductName">产品名称：{{dresult.ProductName}}</p>
                <p v-show="dresult.ManufacturerName">生产商：{{dresult.ManufacturerName}}</p>
                <p v-show="dresult.MedicineName">原药材：{{dresult.MedicineName}}</p>
                <p v-show="dresult.GrowerName">种植户：{{dresult.GrowerName}}</p>
                <p v-show="dresult.Area">{{temp=='Origin'?'种植面积':'产新面积'}}：{{dresult.Area}} 亩</p>
                <p v-show="dresult.PersonCost">人工成本：{{dresult.PersonCost}} 元</p>
                <p v-show="dresult.MaterialCost">物料成本：{{dresult.MaterialCost}} 元/亩</p>
                <p v-show="dresult.SeedCost">种子成本：{{dresult.SeedCost}}</p>
                <p v-show="dresult.EstimateProduction">预估产量：{{dresult.EstimateProduction}} 公斤/亩</p>
                <p v-show="dresult.UnitProduction">单位产量：{{dresult.UnitProduction}} 公斤/亩</p>
                <p v-show="dresult.ProdcutionTendency">产量趋势：{{dresult.ProdcutionTendency}} {{dresult.ProductionRange*100+'%'}}</p>
                <p v-show="dresult.Wish">种植意愿：{{dresult.Wish}}</p>
                <p v-show="dresult.PlanArea">计划面积：{{dresult.PlanArea}} 亩</p>
                <p v-show="dresult.ChangeMode">是否转产：{{dresult.ChangeMode}}</p>
                <p v-show="dresult.ChangeMedicine">转产药材：{{dresult.ChangeMedicine}}</p>
                <p v-show="dresult.ChangeArea">转产面积：{{dresult.ChangeArea}}</p>
                <p v-show="dresult.Manufacturer">生产商：{{dresult.Manufacturer}}</p>
                <p v-show="dresult.Scale">{{temp=='Pieces'?'产量规模':'经营规模'}}：{{dresult.Scale}}</p>
                <p v-show="dresult.Medicine">药材名称：{{dresult.Medicine}}</p>
                <p v-show="dresult.BaseName">产地名称：{{dresult.BaseName}}</p>
                <p v-show="dresult.Weather">天气状况：{{dresult.Weather}}</p>
                <p v-show="dresult.Disaster">灾害描述：{{dresult.Disaster}}</p>
                <p v-show="dresult.Policy">当地政策：{{dresult.Policy}}</p>
                <p v-show="dresult.Tendency">产量趋势：{{dresult.Tendency}} {{dresult.Range*100+'%'}}</p>
                <p v-show="dresult.Supplier">供应商：{{dresult.Supplier}}</p>
                <p v-show="dresult.Ratio">原药比重：{{dresult.Ratio*100+'%'}}</p>
                <p v-show="dresult.MedicineStandard">药材规格：{{dresult.MedicineStandard}}</p>
                <p v-show="dresult.QualityRequire">质量要求：{{dresult.QualityRequire}}</p>
                <p v-show="dresult.Sale">年销售额：{{dresult.Sale}} 元</p>
                <p v-show="dresult.ProductTendency">需求趋势：{{dresult.ProductTendency}}</p>
                <p v-show="dresult.MedicineType">交易类型：{{dresult.MedicineType}}</p>
                <p v-show="dresult.Standard">{{matchStandard(temp)}}：{{dresult.Standard}}</p>
                <p v-show="dresult.TradeProduction">交易数量：{{dresult.TradeProduction}} 公斤</p>
                <p v-show="dresult.Price">{{temp=='Output'?'采收价格':'交易价格'}}：{{dresult.Price}} 元/公斤</p>
                <p v-show="dresult.PriceTendency">价格趋势：{{dresult.PriceTendency}} {{dresult.PriceRange*100+'%'}}</p>
                <p v-show="dresult.MarketStatus">市场表现：{{dresult.MarketStatus}}</p>
                <p v-show="dresult.MarketTendency">市场需求：{{dresult.MarketTendency}}</p>
                <p v-show="dresult.Addition">备注说明：{{dresult.Addition}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        dresult: {
            type: Object
        },
        title: {
            type: String
        },
        temp: {
            type: String
        }
    },
    methods: {
        backTo () {
			this.$emit('dclose');
		},
        matchStandard (temp) {
            var str = '';
            switch(temp){
                case 'Output':
                    str = '采收价格';
                    break;
                case 'Trading':
                    str = '交易价格';
                    break;
                case 'Pieces':
                    str = '饮片规格';
                    break;
                default:
                    str = '';
            }
            return str;
        }
    }
}
</script>

<style>

</style>
