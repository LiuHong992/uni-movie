<template>
	<view class="search-model" v-if="searchmodels.id">
		<!-- 封面图 -->
		<view class="search-cover">
			<image :src="searchmodels.cover"></image>
		</view>
		<!-- 电影名字 -->
		<view class="search-name">
			{{searchmodels.name}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			searchmodels: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		},
		methods: {

		},
		mounted() {

		},
		onLoad() {

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
	.search-model {
		width: 100%;

		.search-cover {
			width: 100%;
			height: 150px;

			image {
				width: 100%;
				height: 100%;
			}
		}
		.search-name{
			font-size: 14px;
			margin-top: 5px;
		}
	}
</style>
