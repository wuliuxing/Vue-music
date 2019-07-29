<template>
    <div>
        <Header />
        <Title/>
        <Singer/>
    </div>
</template>

<script>
import Header from '@/components/Header';
import Title from '@/components/Title';
import Singer from '@/components/Singer';
export default {
    name : 'singer',
    components:{
        Header,
        Title,
        Singer
    }
}
</script>

<style>

</style>
