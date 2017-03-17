import is from 'is'
const {history,location,XMLHttpRequest} = window
const getPageKey = () => {
  return is.object(history.state) ? history.state.key : location.href
}
// 异步中间件方法调用
const nextMethod = (list = [],param = {},complete = () => {}) => {
  var _list = list.map((active,index) => {
    return () => {
      const next = _list[index+1];
      if(next){
        active(param,next);
      }else{
        active(param,() => {
          complete(param);
        })
      }
    }
  });
  setTimeout(_list[0](param),0) //异步执行
}

const filter = (str) => {
  str +=''
  str = str.replace(/%/g, '%25')
  str = str.replace(/\+/g, '%2B')
  str = str.replace(/ /g, '%20')
  str = str.replace(/\//g, '%2F')
  str = str.replace(/\?/g, '%3F')
  str = str.replace(/&/g, '%26')
  str = str.replace(/=/g, '%3D')
  str = str.replace(/#/g, '%23')
  return str
}

var _startIntercept = []
var _endIntercept = []
var _win = window

var ajax = (option) => {
  const key = getPageKey();
  var setting = {
    url: _win.location.pathname,
    type: 'GET',
    data: {},
    dataType: 'json',
    success () {

    },
    error () {

    }
  }

  Object.assign(setting,option)

  nextMethod(_startIntercept,setting,() => {
    var query = [];
    Object.keys(setting.data).forEach((k) => query.push(`${k}=${filter(setting.data[k])}`));
    var xhr = new XMLHttpRequest();

    if(setting.type.toUpperCase()==='GET'){
      xhr.open('GET',setting.url + '?' + query.join('&') + '&' +new.Date().getTime(),true);
      xhr.send();
    }else{
      xhr.open(setting.type,setting.url,true);
      xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
      xhr.send(query.join('&'));
    }

    xhr.onloadend = ({ currentTarget }) = {
      var { response } = currentTarget;
      if ((/application\/json/.test(currentTarget.getAllResponseHeaders()) || setting.dataType === 'json') && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
        if (key === getPageKey()) nextMethod(_endIntercept, JSON.parse(response), setting.success)
      } else {
        if (key === getPageKey()) nextMethod(_endIntercept, null, setting.error)
      }
    }
  })
}

ajax.beforeEach = (callback) => {
  _startIntercept.push(callback);
}

ajax.afterEach = (callback) => {
  _endIntercept.push(callback);
}

export default ajax
