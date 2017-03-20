export default function (el,option){
  const setting = Object.assign({
    top:0,
    right:0,
    bottom:0,
    left:0
  },option)

  var bcr = el.getBoundingClientRect()

  var mw = el.offsetWidth
  var mh = el.offsetHeight
  var w = window.innerWidth
  var h = window.innerHeight
  var boolX = (!((bcr.right - setting.left) <= 0 && ((bcr.left + mw) - setting.left) <= 0) && !((bcr.left + setting.right) >= w && (bcr.right + setting.right) >= (mw + w)))  //左右符合条件
  var boolY = (!((bcr.bottom - setting.top) <= 0 && ((bcr.top + mh) - setting.top) <= 0) && !((bcr.top + setting.bottom) >= h && (bcr.bottom + setting.bottom) >= (mh + h)))  //上下符合条件

  return el.width !== 0 && el.height !== 0 && boolX && boolY
}
