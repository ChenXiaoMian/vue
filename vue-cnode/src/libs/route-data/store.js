export default class Store {
  constructor () {
    this.data = {}
    this.changeList = []
  }
  setItem (url,data) {
    this.changeList.forEach((fn) => fn(data,this.data[url],url))
    this.data[url] = data
  }
  getItem (url){
    if(url){
      return this.data[url]
    }else{
      return this.data
    }
  }
  change (fn){
    this.changeList.push(fn)
  }
  getUrl ({ path, query }) {
    var q = []
    Object.keys(query).forEach((v) => q.push(`${v}=${query[v]}`))
    return [path,q.join('&')].join('?')
  }
}
