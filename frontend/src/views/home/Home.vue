<template>
  <div class="home">
    <div class="carousel-box">
      <mu-carousel hide-controls hide-indicators>
        <mu-carousel-item v-for="(item, index) in imgs" :key="index">
          <img :src="item.path">
        </mu-carousel-item>
      </mu-carousel>
    </div>
    <div class="add-box">
      <ul>
        <li v-for="(item, index) in addList" :key="index" @click="goTo(item.path)">
          <mu-icon value="add_circle_outline" size="40" :color="item.color"></mu-icon>
          <span>{{item.name}}</span>
        </li>
      </ul>
    </div>
    <mu-container ref="container" class="demo-loadmore-content" style="padding: 0;">
      <mu-load-more @refresh="refresh" :refreshing="refreshing" :loading="loading" @load="load">
        <div class="artical-box">
          <ul>
            <li v-for="(item, index) in articalList" :key="index">
              <div class="title-box">
                <p class="title">{{item.title}}</p>
                <span class="created-time">{{item.createdTime}}</span>
              </div>
              <div class="content">{{item.content}}</div>
              <mu-button class="show-more" flat color="primary" @click="goTo('/note-detail', {id: item.id})">More<mu-icon value="forward" size="18"></mu-icon></mu-button>
            </li>
          </ul>
        </div>
      </mu-load-more>
    </mu-container>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      imgs: [
        { path: require('@/assets/images/carousel-1.jpg') },
        { path: require('@/assets/images/carousel-2.jpeg') },
        { path: require('@/assets/images/carousel-3.jpeg') },
        { path: require('@/assets/images/carousel-4.jpg') }
      ],
      addList: [
        { name: 'Class', path: '/class', color: 'red' },
        { name: 'Student', path: '/class', color: 'orange' },
        { name: 'Note', path: '/note', color: 'green' },
        { name: 'Document', path: '/document', color: 'purple' },
        { name: 'Activities', path: '/activities', color: 'blue' }
      ],
      refreshing: false,
      loading: false,
      articalList: [
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 1 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 2 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 3 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 4 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 5 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 6 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 7 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 8 },
        { title: 'First class metting', createdTime: '2019-11-30', content: 'First metting, first of all class master introduce class...', id: 9 }
      ]
    }
  },
  created () {
  },
  mounted () {},
  methods: {
    goTo (path, query) {
      const obj = { path: path }
      query && (obj.query = query)
      this.$router.push(obj)
    },
    refresh () {
      this.refreshing = true
      this.$refs.container.scrollTop = 0
      setTimeout(() => {
        this.refreshing = false
        this.text = this.text === 'List' ? 'Menu' : 'List'
        this.num = 10
      }, 2000)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.num += 10
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    font-size: 14px;
  }
  %box-shadow-card {
    box-shadow: 0 2px 12px rgb(102, 102, 102);
  }
  .carousel-box {
    width: 100%;
    height: 240px;
    padding: 16px;
    .mu-carousel {
      height: 100%;
      border-radius: 3px;
      overflow: hidden;
      @extend %box-shadow-card;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .add-box {
    padding: 0 16px;
    ul {
      display: flex;
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-top: 16px;
      background: #F5F5FE;
      border-radius: 5px;
      @extend %box-shadow-card;
      li {
        width: 33%;
        height: 85px;
        .mu-icon {
          font-size: 40px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 5px 5px 5px #666;
        }
        span {
          display: block;
          font-weight: 500;
          margin-top: 3px;
        }
      }
    }
  }
  .artical-box {
    padding: 16px;
    li {
      height: 200px;
      background: #fff;
      padding: 16px;
      padding-bottom: 36px;
      border-radius: 5px;
      text-align: left;
      position: relative;
      @extend %box-shadow-card;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      .title-box {
        display: flex;
        height: 36px;
        line-height: 36px;
        .title {
          flex: 1;
          font-weight: 600;
          font-size: 16px;
        }
        .created-time {
          flex: 1;
          color: #999;
          text-align: right;
          font-size: 12px;
        }
      }
      .content {
        padding: 10px 0;
        text-indent: 20px;
      }
      .show-more {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
</style>
