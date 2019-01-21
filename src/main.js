// 引用npm上下载的东西
import Vue from 'vue';
import Vuex from 'vuex';
import iView from 'iview';
import VueRouter from 'vue-router';
import VueBus from 'vue-bus';

// 引用我们自己的东西
import App from './App';
import storeConfig from './store';
import routeConfig from './routes';
import LoadingGifImages from './components/LoadingGifImages';

// 配置插件
Vue.use(Vuex);
Vue.use(iView);
Vue.use(VueRouter);
Vue.use(VueBus);

// 实例化路由
const router = new VueRouter(routeConfig);
// 实例化store
const store = new Vuex.Store(storeConfig);

// 路由守卫
router.afterEach((to, from) => {
    // 让side的menu小时
    store.commit('routerStore/changeIsShowSide', { 'changeIsShowSide': true });
    // 告诉store我换了
    store.commit('routerStore/changeColumn', { 'column': to.meta.column, 'scolumn': to.meta.scolumn, 'scolumnc': to.meta.scolumnc });
});

// 定义过滤器
Vue.filter('wan', function (str) {
    return Math.round(str / 10000);
});

// 定义全局组件
Vue.component('LoadingGifImages', LoadingGifImages);

// 起步
new Vue({
    // 挂载
    el: '#app',
    // 渲染
    render (h) {
    return h(App);
    },
    // store
    store,
    // 路由
    router
});
