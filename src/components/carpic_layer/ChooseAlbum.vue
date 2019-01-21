<template>
    <div class="choosealbum" v-if="$store.state.carpicStore.id != 0">
        <ul>
            <li :class="{'cur':$store.state.carpicStore.nowAlbum == 'view'}" @click="changeNowAlbum($event, 'view')"
            >外观<br>（{{$store.state.carpicStore.result.images.view.length}}）</li>
            <li :class="{'cur':$store.state.carpicStore.nowAlbum == 'inner'}" @click="changeNowAlbum($event, 'inner')"
            >内饰<br>（{{$store.state.carpicStore.result.images.inner.length}}）</li>
            <li :class="{'cur':$store.state.carpicStore.nowAlbum == 'engine'}" @click="changeNowAlbum($event, 'engine')"
            >结构和发动机<br>（{{$store.state.carpicStore.result.images.engine.length}}）</li>
            <li :class="{'cur':$store.state.carpicStore.nowAlbum == 'more'}" @click="changeNowAlbum($event, 'more')"
            >更多细节<br>（{{$store.state.carpicStore.result.images.more.length}}）</li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            changeNowAlbum (event, str) {
                // 阻止默认事件
                event.preventDefault();
                this.$store.dispatch('carpicStore/changeNowAlbum', { 'nowAlbum': str });
                // 阻止默认事件
                return false;
            }
        }
    };
</script>

<style scoped lang="less">
    .choosealbum{
        padding:10px;
        ul{
            list-style: none;
            li{
                float: left;
                width:105px;
                margin-right:10px;
                height:50px;
                border:1px solid #ccc;
                text-align: left;
                margin-bottom:10px;
                padding-top:4px;
                font-size:15px;
                text-align: center;
                line-height: 20px;
                cursor: pointer;
                &.cur{
                    background-color: gold;
                    color:white;
                    text-shadow: 1px 1px 1px black;
                }
            }
        }
    }
</style>
