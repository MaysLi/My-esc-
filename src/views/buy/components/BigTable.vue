<template>
	<div class="bigtable_warp" ref="bigtable_warp" @click="clickHandler($event)">
		<Table border :columns="columns" :data="store.results"></Table>
	</div>
</template>

<script>
	import columns from './columns';

	export default {
		data () {
			return {
				columns
			}
		},
		created () {
			this.$store.dispatch('LargeTableStore/init');
		},
		computed: {
			store () {
				return this.$store.state.LargeTableStore;
			}
		},
		methods: {
			clickHandler (event) {
				if (event.target.nodeName.toLowerCase() === 'img') {
					if (event.target.parentNode.parentNode.hasAttribute('data-id')) {
						this.$bus.emit('showShowCarpicLayer', { 'id': event.target.parentNode.parentNode.getAttribute('data-id') });
					}
				}
			}
		}
	}
</script>

<style scoped lang='less'>
	div[data-id]{
		cursor: pointer;
	}
</style>