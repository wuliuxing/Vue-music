<template>
    <div class="main">
        <p class="title">
           <span>推荐歌曲</span>
        </p>

        <ul>
            <li v-for="item in todoss" :key="item.id">
                <p class="img">
                    <!-- {path:'/detail',query:{id:item.id}} -->
                    <router-link :to="{path:'/detail',query:{id:item.id}}" ref="riguser"> 
                        <img :src="item.img" alt="" @click="clickCount">
                    </router-link>
                </p>
                    
                <p class="txt">
                   {{item.text}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import Aplayer from '@moefe/vue-aplayer';
import { globalBus } from '@/components/globalBus';
Vue.use(Aplayer);
    export default {
        name:'recommend-index',
        data(){
            return{
               
            }
        },
        mounted(){
        },
        computed:{
            todoss(){
                return this.$store.state.musicArray
            }
        },
        methods:{
             clickCount() {
                    globalBus.$emit('countNumber');
                },
        },
        created(){
            
            
        }
    }
</script>

<style scoped>
.main{
    width: 100%;
    height: 100%;
}
.title{
    padding: 20px 6px;
}
.title span{
    font-size: 1.0rem;
    font-weight: 600;
}
.main ul li{
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    width: 33%;
    padding: 0 1%;
    vertical-align: top;
}
.main .img{
    width: 100%;
    height: 1100%;
}
.main .img img{
    width: 100%;
    height: 100%;
}
.main .txt{
    font-size: 0.7rem;
    padding: 2px;
    color: #333
}
</style>
