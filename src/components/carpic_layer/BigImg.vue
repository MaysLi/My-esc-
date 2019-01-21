<template>
    <div v-if="id" class="Bigimg_warp" >
        <div class="leftbtn" @click="goPrev()"></div>
        <div class="rightbtn" @click="goNext()"></div>
        <LoadingGifImages :src="`http://192.168.2.188/images/carimages/${id}/${nowAlbum}/${pic}`" :w="750" :h="500" />
    </div>
</template>

<script>
    export default {
        methods: {
            goNext () {
                this.$store.dispatch('carpicStore/goNext');
            },
            goPrev () {
                this.$store.dispatch('carpicStore/goPrev');
            }
        },
        computed: {
            id () {
                return this.$store.state.carpicStore.result.id;
            },
            pic () {
                return this.$store.state.carpicStore.result.images[this.nowAlbum][this.nowIdx];
            },
            nowAlbum () {
                return this.$store.state.carpicStore.nowAlbum;
            },
            nowIdx () {
                return this.$store.state.carpicStore.nowIdx;
            }
        }
    };
</script>

<style scoped lang="less">
    .Bigimg_warp{
        position: relative;
        width: 750px;
        height: 500px;
        .leftbtn{
            position: absolute;
            width: 50%;
            height: 500px;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 999;
            cursor: url('/images/picture-cursor-left.cur'), auto;
        }
        .rightbtn{
            position: absolute;
            width: 50%;
            height: 500px;
            position: absolute;
            right: 0;
            top: 0;
            z-index: 999;
            cursor: url('/images/picture-cursor-right.cur'), auto;
        }
    }
</style>
