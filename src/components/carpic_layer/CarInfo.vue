<template>
    <div class="wrap">
        <h3>
            {{$store.state.carpicStore.result.brand}}{{$store.state.carpicStore.result.series}}
        </h3>
        <h4>
            {{$store.state.carpicStore.result.price}}万元{{$store.state.carpicStore.result.km | wan}}万公里{{$store.state.carpicStore.result.color}}色{{$store.state.carpicStore.result.engine}}{{$store.state.carpicStore.result.gearbox}}
        </h4>
    </div>
</template>

<script>
    export default {};
</script>

<style scoped lang="less">
    .wrap{
        padding:10px;

        h3{
            font-size:22px;
            color:#333;
        }

        h4{
            font-size:14px;
        }
    }
</style>
