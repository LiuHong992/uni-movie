<template>
	<view class="swiper-wrap" v-if="bannerArr.length>0">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="500">
			<swiper-item v-for="(item,index) in bannerArr" :key="index" @click="$goToDetail('../../pages/moviedetail/moviedetail',item.movieId)">
				<image class="swiper-image" :src="item.image"></image>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			bannerArr: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {}
		},
		methods: {},
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
	.swiper-wrap {
		height: 250px;

		.swiper {
			height: 100%;

			.swiper-image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
