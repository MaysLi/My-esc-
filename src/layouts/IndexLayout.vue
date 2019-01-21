<template>
    <div>
        <Header>
            <Menu mode="horizontal" theme="dark" :active-name="$store.state.routerStore.column" @on-select="changeMenuHandler"
            >
                <div class="layout-logo">
                    <img src="/images/logo.png" alt="">
                </div>
                <div class="layout-nav">
                    <MenuItem name="index">
                        <Icon type="ios-navigate"></Icon>
                        首页
                    </MenuItem>
                    <MenuItem name="buy">
                        <Icon type="ios-keypad"></Icon>
                        买车
                    </MenuItem>
                    <MenuItem name="sale">
                        <Icon type="ios-analytics"></Icon>
                        卖车
                    </MenuItem>
                    <MenuItem name="transfer">
                        <Icon type="ios-paper"></Icon>
                        过户
                    </MenuItem>
                    <MenuItem name="insurance">
                        <Icon type="ios-paper"></Icon>
                        保险
                    </MenuItem>
                    <MenuItem name="parking">
                        <Icon type="ios-paper"></Icon>
                        停车场
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        methods: {
            changeMenuHandler (v) {
                this.$router.push({ 'name': v });
            }
        }
    };
</script>

<style scoped lang='less'>
    .layout{
        border: 1px solid #d7dde4;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    @c : -webkit-linear-gradient(left top, #137dba, #77cbd7b0 20%, #5a6ce3);
    .ivu-layout-header{
        background: @c;
    }
    .ivu-menu-dark{
        background: transparent;
    }
    .layout-logo{
        width: 300px;
        height: 52px;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 7px;
        left: 20px;
    }
    .layout-nav{
        width: 766px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item-active{
        background-color: gold;
    }
    .ivu-menu-item{
        font-size:20px;
    }
    .ivu-menu-dark.ivu-menu-horizontal .ivu-menu-item{
        color:white;
    }
</style>
