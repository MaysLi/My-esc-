<template>
  <div>
    <router-view></router-view>

    <!-- 下面是所有的弹出层、抽屉聚集地 -->
    <CarpicLayer v-if="isShowCarpicLayer" :carpicLayerId="carpicLayerId"></CarpicLayer>
  </div>
</template>

<script>
    import CarpicLayer from './components/carpic_layer/Index.vue';
    export default {
        data () {
            return {
                // 汽车图片弹出层是否展示
                isShowCarpicLayer: false,
                carpicLayerId: 1000088
            };
        },
        components: {
            CarpicLayer
        },
        // 上树
        mounted () {
            const self = this;
            // 监听，通过bus显示弹出层
            this.$bus.on('showShowCarpicLayer', function ({ id }) {
                self.isShowCarpicLayer = true;
                self.carpicLayerId = id;
            });

            // 监听，通过bus隐藏弹出层
            this.$bus.on('hideShowCarpicLayer', function () {
                self.isShowCarpicLayer = false;
            });
        }
    };
</script>
