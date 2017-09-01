// 时间格式转换
export function formatDate(date,fmt){
    if(/(y+)/.test(fmt)){
      fmt = fmt.replace(RegExp.$1,(date.getFullYear()+''.substr(4-RegExp.$1.length)));
    }
    let o = {
      'M+': date.getMonth()+1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };

    for(let k in o){
      if(new RegExp(`(${k})`).test(fmt)){
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?str:padLeftZero(str));
      }
    }

    return fmt;
}
function padLeftZero(str){
  return ('00'+str).substr(str.length);
}

// 获取地址
export function getPosition(BMap,Vue){
  if(BMap&&BMap!='undefined'){
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            var url = 'http://api.map.baidu.com/geocoder/v2/?ak=oN5ln95bD6YRawbMzfavu3GE&callback=?&location=' + r.point.lat + ',' + r.point.lng + '&output=json&pois=1',
                location = Vue.$store.getters.getLocation;
            if(location==''){
              Vue.$http.jsonp(url,{}).then(function(res){
                Vue.$store.dispatch('setlocation',res.body.result.formatted_address);
              });
            }
        }else{
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true});
  }
}

//将对象元素转换成字符串以作比较
function obj2key(obj, keys){
  var n = keys.length,
      key = [];
  while(n--){
      key.push(obj[keys[n]]);
  }
  return key.join('|');
}

//去重操作
export function uniqeByKeys(array,keys){
  var arr = [];
  var hash = {};
  for (var i = 0, j = array.length; i < j; i++) {
      var k = obj2key(array[i], keys);
      if (!(k in hash)) {
          hash[k] = true;
          arr.push(array[i]);
      }
  }
  return arr ;
}

//去除空格  type 1-所有空格  2-前后空格  3-前空格 4-后空格
export function trim(str,type){
  switch (type){
      case 1:return str.replace(/\s+/g,"");
      case 2:return str.replace(/(^\s*)|(\s*$)/g, "");
      case 3:return str.replace(/(^\s*)/g, "");
      case 4:return str.replace(/(\s*$)/g, "");
      default:return str;
  }
}