<template>
    <div class="wrap" v-if="id">
        <div class="inner">
            <div class="unit" :style="{'left': nowPage * -230 + 'px'}" @mouseleave="setPage()">
                <ul v-for="i in totalPage" :key="i">
                    <li v-for="j in 6" :key="j" @click="changeNowIdx((i-1)*6+(j-1))" :class="{'cur': nowIdx == (i-1)*6+(j-1)}" v-show="(i-1)*6+(j-1)<totalPagesize">
                        <LoadingGifImages v-if="getThePic(i, j)" :src="`http://192.168.2.188/images/carimages_small/${id}/${nowAlbum}/${getThePic(i, j)}`" :w="105" :h="70" />
                    </li>
                </ul>
            </div>
            <div class="box" v-if="totalPage != 1">
                <span v-for="i in totalPage" :key="i" :style="{'width': getW() + 'px'}" :class="{'cur': nowPage == (i - 1)}" @mouseenter="getPage(i - 1)"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        // 改当前page值  不改全局   写在data中
        data () {
            return {
                nowPage: 0
            };
        },
        methods: {
            getThePic (i, j) {
                return this.$store.state.carpicStore.result.images[this.nowAlbum][(i - 1) * 6 + (j - 1)];
            },
            getW () {
                return (220 - 5 * (this.totalPage - 1)) / this.totalPage;
            },
            getPage (page) {
                this.nowPage = page;
            },
            setPage () {
                this.nowPage = parseInt(this.nowIdx / 6);
            },
            changeNowIdx (nowIdx) {
                this.$store.commit('carpicStore/changeNowIdx', { nowIdx });
            }
        },
        computed: {
            // 总页数
            totalPage () {
                return Math.ceil(this.$store.state.carpicStore.result.images[this.nowAlbum].length / 6);
            },
            totalPagesize () {
                return this.$store.state.carpicStore.result.images[this.nowAlbum].length;
            },
            id () {
                return this.$store.state.carpicStore.result.id;
            },
            nowAlbum () {
                return this.$store.state.carpicStore.nowAlbum;
            },
            nowIdx () {
                return this.$store.state.carpicStore.nowIdx;
            }
        },
        watch: {
            nowIdx () {
                this.nowPage = parseInt(this.nowIdx / 6);
            }
        }
    };
</script>

<style scoped lang="less">
    .wrap{
        padding:10px;
        .inner{
            overflow:hidden;
        }
    }
    .unit{
        width:3000px;
        position: relative;
        transition: left 0.4s ease 0s;
        ul{
            list-style: none;
            float: left;
            width:230px;
            li{
                float: left;
                width:105px;
                height: 70px;
                margin-bottom: 5px;
                margin-right:10px;
                position: relative;
                cursor: pointer;
                &::before{
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,.6);
                    transition: all 0.5s ease 0s;
                    z-index: 232323;
                }
                &.cur::before{
                    opacity: 0;
                }
                img{
                    width:100%;
                }
            }
        }
    }
    .box{
        clear: both;
        span{
            display: inline-block;
            height: 8px;
            background: #ccc;
            margin-right: 5px;
            &:last-child{
                margin-right: 0px;
            }
            &.cur{
                background: orange;
            }
        }
    }
</style>
