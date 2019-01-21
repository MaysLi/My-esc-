<template>
	<div class="imaegs_warp" :style="{'width': w+'px', 'heigth': h+'px'}">
		<img ref="pic" :src="src" alt="" :style="{'width': w+'px', 'heigth': h+'px', 'display': 'none'}">
		<b ref="loading"></b>
	</div>
</template>

<script>
	export default {
		props: ['src', 'w', 'h'],
		beforeUpdate () {
			this.$refs.loading.style.display = 'block';
			this.init();
		},
		mounted () {
			this.init();
		},
		methods: {
			init () {
				const img = new Image();
				img.src = this.src;
				const self = this;
				img.onload = function () {
					self.$refs.pic.style.display = 'block';
					self.$refs.loading.style.display = 'none';
				}
			}
		}
	}
</script>

<style scoped lang='less'>
	.imaegs_warp{
		position: relative;
		b{
			position: absolute;
			background: url('../../public/images/loading.svg');
			width: 60px;
			height: 60px;
			left: 50%;
			top: 50%;
			margin-left: -30px;
			margin-top: -30px;
		}
	}
</style>
