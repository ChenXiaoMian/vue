<template>
    <span class="icon" :class="[classMap[iconType],iconSize]"></span>
</template>
<script>
export default {
  props: {
    iconType: {
      type: Number
    },
    size:{
      type: Number
    }
  },
  computed: {
    iconSize () {
      return 'type-' + this.size;
    }
  },
  created () {
    this.classMap = ['decrease','discount','special','invoice','guarantee'];
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixin';
.icon
  display:inline-block
  vertical-align:top
  width:12px
  height:12px
  margin-right:4px
  background-size:12px 12px
  background-repeat:no-repeat
  &.decrease.type-1
    bg-image('decrease_1')
  &.discount.type-1
    bg-image('discount_1')
  &.guarantee.type-1
    bg-image('guarantee_1')
  &.invoice.type-1
    bg-image('invoice_1')
  &.special.type-1
    bg-image('special_1')
  &.decrease.type-2
    bg-image('decrease_2')
  &.discount.type-2
    bg-image('discount_2')
  &.guarantee.type-2
    bg-image('guarantee_2')
  &.invoice.type-2
    bg-image('invoice_2')
  &.special.type-2
    bg-image('special_2')
  &.decrease.type-3
    bg-image('decrease_3')
  &.discount.type-3
    bg-image('discount_3')
  &.guarantee.type-3
    bg-image('guarantee_3')
  &.invoice.type-3
    bg-image('invoice_3')
  &.special.type-3
    bg-image('special_3')
  &.decrease.type-4
    bg-image('decrease_4')
  &.discount.type-4
    bg-image('discount_4')
  &.guarantee.type-4
    bg-image('guarantee_4')
  &.invoice.type-4
    bg-image('invoice_4')
  &.special.type-4
    bg-image('special_4')
</style>
