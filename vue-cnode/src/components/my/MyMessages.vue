<template>
  <div>
    <v-header title="消息"></v-header>
    <v-content>
      <div class="msg-box" v-if="list.length">
        <ul class="list">
          <li flex="box:first" v-for="(item,$index) in list">
            <router-link class="user" :to="'/user/'+item.author.loginname">
              <div class="user-headimg" :style="{backgroundImage: 'url(' + item.author.avatar_url +')'}"></div>
            </router-link>
            <div>
              <div class="name">{{ item.author.loginname }}
                <time>{{ item.create_at | formatDate }}</time>
              </div>
              <div v-if="item.type == 'at'">
                在话题
                <router-link :to="'/topic/'+item.topic.id">{{item.topic.title}}</router-link>中 @了你
              </div>
              <div v-if="item.type == 'reply'">
                回复你了的话题
                <router-link :to="'/topic/'+item.topic.id">{{ item.topic.title }}</router-link>
              </div>
              <div class="markdown-body" v-html="item.reply.content"></div>
            </div>
            <div class="weidu">
              <i class="iconfont icon-weidu"></i>
            </div>
          </li>
        </ul>
      </div>
      <v-data-null v-if="!list.length"></v-data-null>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import util from 'util'
  import routeData from 'route-data'

  export default {
    mixins: [routeData],
    computed: mapState({ user: (state) => state.user }),
    routeData () {
      return {
        list : []
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        var { accesstoken } = this.user
        if(!accesstoken) return false
        util.get('messages',{mdrender:true},({ data }) => {
          Array.prototype.push.apply(data.hasnot_read_messages,data.has_read_messages)
          this.list = data.hasnot_read_messages
        })
        util.post('message/mark_all')
      }
    }
  }
</script>
