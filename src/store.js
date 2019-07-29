import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// import axios from "@/axios";

export default new Vuex.Store({
  state: {
    musicArray: [
      {
        id: 1,
        name: 'GIAO',
        text: '这首可能不是最好听的，但一定是最嗨的',
        artist: 'giao哥',
        url: require('./assets/music/m1.mp3'),
        img: require('./assets/music/m1.jpg'),
        cover: 'bbbbbbbbbbb', // prettier-ignore
        lrc: 'aaaaaaaaaaaaaa'
      },
      {
        id: 2,
        name: '天空之城',
        artist: '李志',
        text: '曾经有一个原声放在我面前，我没有珍惜。',
        img: require('./assets/music/m2.jpg'),
        url: require('./assets/music/m2.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 3,
        name: '历历万乡',
        artist: '孟大宝',
        text: '十七岁鲜衣怒马，不与平凡。三十岁岁颓败蹉跎，苟且偷生。',
        img: require('./assets/music/m3.jpg'),
        url: require('./assets/music/m3.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 4,
        name: '女儿情',
        artist: '万晓利',
        text: '薄酒可以忘忧，丑妻可以白头，徐行不必驷马，称身不必狐裘',
        img: require('./assets/music/m4.jpg'),
        url: require('./assets/music/m4.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 5,
        name: '北方的女王',
        artist: '尧十三',
        text: '你和我一样 ，都是说谎的人 ，拥抱城市的灰尘',
        img: require('./assets/music/m5.jpg'),
        url: require('./assets/music/m5.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 6,
        name: '春歌',
        artist: '周云蓬',
        text: '酒入豪肠 ，三分化作剑气 ，剩下七分 ，秀口一吐 ，就是半个盛唐。',
        img: require('./assets/music/m6.jpg'),
        url: require('./assets/music/m6.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 7,
        name: '我想我想',
        artist: '洪启',
        text: '我想吻的人不在我身旁 , 我想唱的歌不在我心房 , 我想种棵树但没有土壤',
        img: require('./assets/music/m7.jpg'),
        url: require('./assets/music/m7.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 8,
        name: '竹枝词',
        artist: '双笙',
        text: '谁藏身杨柳青青江水边 烟雨朦胧渐浮现。',
        img: require('./assets/music/m8.jpg'),
        url: require('./assets/music/m8.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      },
      {
        id: 9,
        name: '有何不可',
        artist: '许嵩',
        text: '谁藏身杨柳青青江水边 烟雨朦胧渐浮现。',
        img: require('./assets/music/m9.jpg'),
        url: require('./assets/music/m9.mp3'),
        cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thing.lrc'
      }
    ],
    list1: [
      {
        id: 1,
        name: '有何不可',
        artist: '许嵩',
        url: require('./assets/music/m9.mp3')
      },
      {
        id: 2,
        name: '庐州月',
        artist: '许嵩',
        url: require('./assets/music/m12.mp3')
      },
      {
        id: 3,
        name: '千百度',
        artist: '许嵩',
        url: require('./assets/music/m13.mp3')
      }
    ],
    list2: [
      {
        id: 1,
        name: 'Palace Memories',
        artist: '神思者',
        url: require('./assets/music/m10.mp3')
      },
      {
        id: 2,
        name: '二泉映月',
        artist: '阿炳',
        url: require('./assets/music/m11.mp3')
      }
    ]
  }
  // eslint-disable-next-line no-dupe-keys
})
