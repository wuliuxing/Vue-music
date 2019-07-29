<template>
    <div>
        <Header title="网易云music" />
        <Title/>
        <Banner/>
        <RecommendList/>
        <Recommend/>
        
        <!-- <text/> -->
    </div>
</template>

<script>
import Header from '@/components/Header';
import Title from '@/components/Title';
import Banner from '@/components/Recommend/banner';
import Recommend from '@/components/Recommend/recommend-index';
import RecommendList from '@/components/Recommend/list';
// import text from '@/components/Recommend/text';
export default {
    name : 'recommend',
    components:{
        Header,
        Title,
        Banner,
        Recommend,
        RecommendList
        // text
    }
}
</script>

<style>

</style>
