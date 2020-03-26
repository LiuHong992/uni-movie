<template>
	<view class="model-content">
		<!-- 最左边的封面图 -->
		<view class="left-cover">
			<image :src="likemodel.cover"></image>
		</view>
		<!-- 中间内容层 -->
		<view class="center-content">
			<!-- 电影名 -->
			<view class="movie-name">
				{{likemodel.name}}
			</view>
			<!-- 评分 -->
			<view class="rates">
				<!-- 设置评分数 -->
				<view class="rates-content">
					<uni-rate :value="(likemodel.score/2).toFixed(1)" disabled="true" :size="18"></uni-rate>
				</view>
			</view>
			<!-- 影片描述 -->
			<view class="movie-desc">
				{{likemodel.basicInfo}}
			</view>
			<!-- 上映时间 -->
			<view class="movie-publish">
				{{likemodel.releaseDate.split('(')[0]}}
			</view>
		</view>
		<!-- 竖线 -->
		<view class="ver-line">
		</view>
		<!-- 最右边赞一下 -->
		<view class="right-support">
			<!-- 点赞内容层 -->
			<view class="support-content" @click.stop="supports">
				<!-- 点赞icon -->
				<view class="support-icon">
					<image src="../../static/support.png"></image>
				</view>
				<!-- 赞一下文字 -->
				<view class="support-text">
					赞一下
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../uni-ui/uni-rate/uni-rate.vue';
	export default {
		name: "",
		components: {
			uniRate
		},
		props: {
			likemodel: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		},
		methods: {
			supports() {
				uni.showToast({
					title: '点赞成功!'
				});
			}
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
	.model-content {
		display: flex;

		.left-cover {
			width: 26.65vw;
			height: 135px;
			border-radius: 5px;

			image {
				width: 100%;
				height: 100%;
				border-radius: 5px;
			}
		}

		.center-content {
			box-sizing: border-box;
			max-width: 50.63vw;
			padding: 5px 15px 0 10px;

			.movie-name {
				font-size: 22px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			.rates {
				.rates-content {
					margin-top: 12px;
				}
			}

			.movie-desc,
			.movie-publish {
				margin-top: 8px;
				font-size: 14px;
			}
		}

		// 竖线
		.ver-line {
			width: 0;
			border: 1px dashed #DBDBDA;
		}

		.right-support {
			display: flex;
			width: 16.8vw;
			// justify-content: center;
			align-items: center;

			.support-content {
				margin: 0 auto;

				.support-icon {
					width: 24px;
					height: 24px;
					margin: 0 auto 5px;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.support-text {
					font-size: 15px;
					color: #FFC133;
				}
			}
		}
	}
</style>
