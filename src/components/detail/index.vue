
<template>
    <div class="app">
         <div class="main">
            <div>
              <div class="header">
                          <!-- <button @click="aaa" v-for="item in todoss" :key="item.id"> {{item.name}} </button> -->
                      <router-link tag="i" to="/recommend" class="to_bottom">
                        ∨ 
                      </router-link>
                        <div class="titDiv" >
                            <p class="title" :v-model="nowMusic">{{nowmusic.name}}</p>
                            <p class="name">{{nowmusic.artist}} </p>
                        </div>
                    </div>
                    <div class="middle">
                        <div class="img">
                            <img :src="nowmusic.img" alt="" :audio="todoss">
                        </div>
                </div>
          </div>
            <div class="aplyer">
              <aplayer @click="next" :audio="todoss[ID-1]" mini :lrcType="3" @canplay="palymusic" ref="aplayer"   :listMaxHeight= '500' :listFolded="false"/>
           
           </div>
            <div class="btnDiv">
                <p  @click="next" class="next btn el-icon-arrow-left"></p>
                <p @click="toggle" class="btn play el-icon-video-play" :class="{'el-icon-video-pause':isChoose}"></p>
                <p  @click="prev" class="prev btn el-icon-arrow-right"></p>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import Aplayer from '@moefe/vue-aplayer';

import { globalBus } from '@/components/globalBus';
Vue.use(Aplayer);
export default {
 name:'Aaplayer',
  computed:{
      todoss(){
          return this.$store.state.musicArray
      }
  },
  data() {
    return {
      ID: '',
      nowmusic: [],
      isChoose:false
    }
  },
  mounted(){
    this.ID = parseInt(this.$route.query.id);
    this.nowMusic();
    this.total();
  },
  methods:{
     palymusic(){
      this.$refs.aplayer.play();
      this.isChoose = true
    },
    next:function(){
         this.$refs.aplayer.skipForward();
         this.$refs.aplayer.play();
         let index1 = this.ID--;
         this.nowMusic();
         this.isChoose = true;
          if(index1 == 1){
            this.ID = this.todoss.length
        }
    },
    prev:function(){
        this.$refs.aplayer.skipBack();
         this.$refs.aplayer.play();
         let index1 = this.ID++;
         this.nowMusic();
         this.isChoose = true;
          if(index1 > this.todoss.length-1){
            this.ID = 1
        }
    },
    toggle:function(){
         this.$refs.aplayer.toggle();
         this.isChoose = !this.isChoose;
    },
    nowMusic:function(){
       this.nowmusic = this.$refs.aplayer.currentMusic;
    },
    total() {
        globalBus.$on('countNumber', () => {
          // this.ID = parseInt(this.$route.query.id);
        //  this.$refs.aplayer.switch(this.ID);
        // this.$refs.aplayer.play();
        // this.isChoose = true;
        this.palymusic()
      })
    }
  },
  created() {
    
    console.log(this.APlayer)
  },
}
</script>

<style scoped>
.aplyer{
  position: fixed;
  bottom: 0
}
.app{
    position: fixed;
    top: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.aplayer-miniswitcher{display: none!important}
.btnDiv{
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 90px;
}
.btn{
  display: inline-block;
  color: #fff;
  font-size: 2.0rem;
}
.next{
  left: 60px;
  float: left;
  position: relative;
}
.prev{
  right: 60px;
  position: relative;
  float: right;
}
.row{
  text-align: center;
  width: 100%;
}
.schedule{
  width: 62%;
  display: inline-block;
  height: auto;
  vertical-align: top;
  padding-left: 12px;
}
.time{
  width: 26%;
  display: inline-block;
  vertical-align: top;
  color: #fff;
  font-size: 0.9rem;
  height: auto;
  line-height: 36px;
}

.main{
    width: 100%;
    height: 100%;
    background: #444;
    
}
 .to_bottom {
    padding: 5px 9px;
    font-size: 35px;
    color: #f1f1f1;
    display: inline-block;
    position: absolute;
    z-index: 99999;
}
.header .titDiv{
    padding-right: 16px;
    width: 86%;
    text-align: center;
    z-index: 99999;
    position: relative;
    top: 12px;
    color: #fff;
    float: right;
}

.header .title{
    font-size: 1.1rem;
    font-weight: 600;
}
.header .name{
    font-size: 0.9rem
}
.middle{
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    position: fixed;
    width: 100%;
    top: 80px;
    bottom: 170px;
    white-space: nowrap;
    font-size: 0;
}
.middle .img{
    width: 100%;
    display: inline-block;
    text-align: center;
}
.middle img{
    width: 70%;
    height: 70%;
    border: 14px solid #666;
    border-radius:250px;
    line-height: 200px;
}
.bottom{
    position: absolute;
    bottom: 50px;
    width: 100%;
}
</style>
