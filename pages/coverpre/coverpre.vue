<template>
	<view class="image-preview">
		<image :src="imageSrc"></image>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {},
		data() {
			return {
				imageSrc: ''
			}
		},
		methods: {
		},
		mounted() {

		},
		onLoad(option) {
			this.imageSrc = option.src
			console.log(option);
		},
		filters: {

		},
		computed: {

		},
		watch: {

		},
		directives: {

		}
	}
</script>

<style scoped lang="scss">
	.image-preview {
		width: 100vw;
		height: 100vh;

		image {
			width: 100%;
			height: 100%;
		}
	}
</style>
