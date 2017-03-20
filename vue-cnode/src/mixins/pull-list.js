import is from 'is'
import util from 'util'
import routeData from 'route-data'
const { history,location } = window //window.history,window.location
const getPageKey = () => {
  return is.object(history.state) ? history.state.key : location.href
}

export default {
  mixins: [routeData],
  routeData () {
    return {
      complete: false, // 数据是否加载完成
      loading: false, // 是否在请求中
      page: 1, // 当前请求的页数
      list: [] // 列表的数据
    }
  },
  mounted () {
    this.loading = false;
  },
  created () {
    if(getPageKey() !== this.list.key){
      if(this.page === 1){
        this.pullList()
        this.list.key = getPageKey()
      }else{
        Object.assign(this.$data,this.$options.routeData());
        this.$nextTick(() => {
            this.list.key = getPageKey();
            this.pullList();
        });
      }
    }else{
      this.loading = false;
    }
  },
  watch: {
    $route () {
      if(getPageKey() !== this.list.key){
        Object.assign(this.$data,this.$options.routeData());
        this.$nextTick(() => {
          this.list.key = getPageKey();
          this.pullList();
        });
      }else{

      }
    }
  },
  methods: {
    pullList () {
      // 请求未完成，数据未加载完
      if(this.complete || this.loading) return;
      this.loading = true;
      var url = this._pullList().url;
      var data = this._pullList().data;
      // var { url,data = {} } = this._pullList();
      util.get(url,data,({ data }) => {
        if(data.length>0){
          data.forEach((item) => this.list.push(item));
        }else{
          this.complete = true;
        }
        this.page++;
        this.loading = false;
      });
    },
    seeing () {
      if(this.page === 1) return
      this.pullList()
    }
  }
}
