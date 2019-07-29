<template>
    <div>
        <Header />
        <Title/>
        <Ranking/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Title from '@/components/Title';
import Ranking from '@/components/Ranking/index';
export default {
    name : 'ranking',
    components:{
        Header,
        Title,
        Ranking
    }
}
</script>

<style>

</style>
