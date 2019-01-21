<template>
    <div>
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
                <Menu v-if="$store.state.routerStore.isShowSide" :active-name="$store.state.routerStore.scolumn" theme="light" width="auto" @on-select="changeMenuHandler">
                    <MenuItem v-for="item in getTheOne.children" :key="item.en" :name="item.en">
                        {{item.cn}}
                    </MenuItem>
                </Menu>
            </Sider>
            <Layout :style="{padding: '0 24px 24px'}">
                <Breadcrumb :style="{margin: '24px 0'}">
                    <BreadcrumbItem>
                        <router-link to="/index/index">首页</router-link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <router-link :to="'/index/' + getTheOne.columnEnglish">
                            {{getTheOne.columnChinese}}
                        </router-link>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        {{$store.state.routerStore.scolumnc}}
                    </BreadcrumbItem>
                </Breadcrumb>
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>

<script>
    import buyroute from '../routes/buyroute';
    import transferroute from '../routes/transferroute';

    // 路由对象
    const o = {
        buy: buyroute,
        transfer: transferroute
    };

    export default {
        created () {
            // 让sidemenu上树，这是为了解决cur类不变化的问题
            this.$store.commit('routerStore/changeIsShowSide', { 'isShowSide': true });
        },
        updated () {
            // 让sidemenu上树，这是为了解决cur类不变化的问题
            this.$store.commit('routerStore/changeIsShowSide', { 'isShowSide': true });
        },
        // 计算后
        computed: {
            // 得到当前栏目的路由对象
            getTheOne () {
                return o[this.$store.state.routerStore.column];
            }
        },
        methods: {
            // 点击侧边栏
            changeMenuHandler (v) {
                this.$router.push({ 'name': v });
            }
        }
    };
</script>
