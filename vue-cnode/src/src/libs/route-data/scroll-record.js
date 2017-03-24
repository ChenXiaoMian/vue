import RouterStore from './store'

const store = new RouterStore()

const scrollTop = (el,value) => {
  const hasScrollTop = 'scrollTop' in el
  if (value === undefined) return hasScrollTop ? el.scrollTop : el.pageYOffect
  if (hasScrollTop) {
    el.scrollTop = value
  }else{
    el.scrollTo(el.scrollX, value)
  }
}

const scroll = () => {
  var { target: { __url } } = event
  if(__url){
    var top = scrollTop(event.target)
    store.setItem(__url,top)
  }
}

export default {
  inserted(el, binding, vnode){
    const init = (to) => {
      var __url = el.__url = store.getUrl(to)
      el.addEventListener('scroll',scroll,false)
      var top = store.getItem(__url);
      if(top){
        scrollTop(el,top)
      }
      init(vnode.context.$route)
      vnode.context.$watch('$route',init)
    }
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('scroll',scroll,false)
  }
}
