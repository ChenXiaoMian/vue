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
                Vue.$store.dispatch('setLocation',res.body.result.formatted_address);
              });
            }
        }else{
            alert('failed'+this.getStatus());
        }
    },{enableHighAccuracy: true});
  }
}
