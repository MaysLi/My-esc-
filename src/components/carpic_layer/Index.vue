<template>
    <div>
        <div class="mask" @click="hideShowCarpicLayer">
            <div class="inner" @click.stop="">
                <a class="closeBtn" href="javascipt:void()" @click="hideShowCarpicLayer">
                    ×
                </a>
                <div class="bigimgbox">
                    <BigImg />
                </div>
                <div class="rightPart">
                    <CarInfo />
                    <ChooseAlbum />
                    <div class="clfix"></div>
                    <SmallPicNav />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BigImg from './BigImg';
    import CarInfo from './CarInfo';
    import ChooseAlbum from './ChooseAlbum';
    import SmallPicNav from './SmallPicNav';
    export default {
        props: ['carpicLayerId'],
        // 已经就绪
        created () {
            this.$store.dispatch('carpicStore/init', { 'id': this.carpicLayerId });
        },
        components: {
            BigImg,
            CarInfo,
            ChooseAlbum,
            SmallPicNav
        },
        methods: {
            hideShowCarpicLayer () {
                this.$bus.emit('hideShowCarpicLayer');
            }
        }
    };
</script>

<style scoped lang="less">
    .clfix{
        clear:both;
    }
    .mask{
        position: fixed;
        width: 100%;
        height:100%;
        top:0;
        left:0;
        background-color: rgba(0,0,0,.67);
        z-index: 99999;

        .inner{
            width: 1000px;
            position: absolute;
            top:50%;
            left:50%;
            height:500px;
            background-color: white;
            margin-top: -250px;
            margin-left: -500px;

            .closeBtn{
                position: absolute;
                width: 36px;
                height:36px;
                background-color: orange;
                right:-18px;
                top:-18px;
                border-radius: 50%;
                text-align: center;
                line-height: 34px;
                text-decoration: none;
                font-size: 38px;
                color:white;
                border:2px solid white;
                font-family: "times new roman";
            }

            .bigimgbox{
                float: left;
                width: 750px;

                img{
                    width: 750px;
                }
            }

            .rightPart{
                float: left;
                width: 250px;;
            }
        }
    }
</style>
