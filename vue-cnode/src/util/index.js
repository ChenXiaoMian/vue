import ajax from './ajax' //引入ajax
import stores from 'stores'  //常用工具方法
import configs from 'configs'  //加载配置


ajax.beforeEach((res, next) => {
  res.url = configs.target + 'api/v1/' + res.url
  var { accesstoken } = stores.state.user
  if (accesstoken) {
    res.data.accesstoken = accesstoken
  }

  next()
})

ajax.afterEach((res, next) => {
  if (res) {
    next()
  } else {
    exports.default.toast('加载失败')
  }
})

export default {
  get (url, data = {}, success = () => { }, error = () => { }) {
    ajax({ url, data, success, error, type: 'GET' })
  },
  post (url, data = {}, success = () => { }, error = () => { }) {
    ajax({ url, data, success, error, type: 'POST' })
  },
  /**
   * 消息消失框
   */
  toast (msg = '', time = 1500) {
    var toast = document.createElement('div')
    toast.className = 'common-toast common-toast-show'
    toast.innerHTML = msg
    document.body.appendChild(toast)
    toast.style.display = 'block'
    toast.style.margin = `-${toast.offsetHeight / 2}px 0 0 -${toast.offsetWidth / 2}px`
    var timer = setTimeout(() => {
      toast.className = 'common-toast common-toast-hide'
      clearTimeout(timer)
      var timer2 = setTimeout(() => {
        document.body.removeChild(toast)
        clearTimeout(timer2)
      }, 200)
    }, time)
  }
}
