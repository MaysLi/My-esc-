<template>
    <div>
        <h1>我是大表选车</h1>
        <FilterBox />
        <BigTable />
        <Page :total="store.total" :page-size="store.pagesize" show-total show-sizer show-elevator @on-change="changePage" @on-page-size-change="changePagesize" :page-size-opts="[5, 10, 20]" />
    </div>
</template>

<script>
    import FilterBox from './components/FilterBox';
    import BigTable from './components/BigTable';
    export default {
        components: {
            FilterBox,
            BigTable
        },
        methods: {
            showLayer (id) {
                this.$bus.emit('showShowCarpicLayer', { 'id': id });
            },
            changePage (page) {
                this.$store.dispatch('LargeTableStore/changePage', { page })
            },
            changePagesize (pagesize) {
                this.$store.dispatch('LargeTableStore/changePagesize', { pagesize })
            }
        },
        computed: {
            store () {
                return this.$store.state.LargeTableStore;
            }

        }
    };
</script>

<style scoped>

</style>
