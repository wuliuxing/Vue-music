<template>
    <div class="main">
        <!-- <p class="title">
           <span>推荐歌单</span>
        </p>
        <ul>
            <li v-for="item in todoss" :key="item.id">
                <p class="img">
                    <router-link :to="{path:'/detail',query:{id:item.id}}"> 
                        <img :src="item.img" alt="">
                    </router-link>
                </p>
                    
                <p class="txt">
                   {{item.text}}
                </p>
            </li>
        </ul> -->
        aa
    </div>
</template>

<script>
    export default {
        name:'recommend-index',
        data(){
            return{
                
            }
        },
        computed:{
            todoss(){
                return this.$store.state.musicArray
            }
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
