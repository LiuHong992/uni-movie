<template>
	<view class="scroll-item">
		<!-- 电影封面 -->
		<view class="cover-image">
			<image :src="superOne.cover" mode=""></image>
		</view>
		<!-- 电影名字 -->
		<view class="movie-title">
			{{superOne.name}}
		</view>



		<!-- 评分 -->
		<view class="rates">
			<!-- 设置评分数 -->
			<view class="rates-content">
				<!-- 空白盒子 -->
				<view class="empty"> </view>
				<uni-rate :value="(superOne.score/2).toFixed(1)" disabled="true" :size="14"></uni-rate>
			</view>
			<!-- 评分详情 -->
			<view class="rates-text">
				{{superOne.score}}
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../uni-ui/uni-rate/uni-rate.vue'
	export default {
		name: "",
		components: {
			uniRate
		},
		props: {
			superOne: {
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
	.scroll-item {
		.cover-image {
			width: 100%;
			height: 95px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.movie-title {
			font-size: 14px;
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}

		.rates {
			display: flex;
			font-size: 14px;

			.rates-content {
				.empty {
					height: 18rpx;
				}
			}

			// .uni-rate {
			// 	margin-top: 18rpx !important;
			// }

			// 微信小程序端改变评分的margin-top
			// /* #ifdef MP-WEIXIN */
			// .rates {
			// 	/deep/ .uni-rate {
			// 		margin-top: 18rpx !important;
			// 	}
			// }

			// /* #endif */

			.rates-text {
				margin-left: 3px;
			}
		}
	}
</style>
