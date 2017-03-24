import RouterStore from './store'

const store = new RouterStore()

const init = function($route){
  if(typeof this.$options.routeData !== 'function'){
    return new Error('必须是以方法返回对象')
  }
  this.$options.routeData._url = store.getUrl($route)
  var keepAlive = store.getItem(this.$options.routeData._url)
  if(keepAlive){
    return keepAlive
  }
  return this.$options.routeData.call(this)
}

const saveData = function() {
  var data = this.$options.routeData()
  var newData = {}
  Object.keys(data).forEach((k) => (newData[k] = this.$data[k]))
  store.setItem(this.$options.routeData._url,newData)
}

export default {
  data () {
    return init.call(this,this.$route)
  },
  destroyed () {
    saveData.call(this)
  },
  watch: {
    $route (to,from) {
      saveData.call(this)
      Object.assign(this.$data,init.call(this,to))
    }
  }
}
