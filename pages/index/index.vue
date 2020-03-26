<template>
	<view class="bg">
		<!-- 轮播图 -->
		<view class="banner-item">
			<banner :bannerArr="bannerArr"></banner>
		</view>
		<!-- 热门超英 -->
		<view class="hot-superhero">
			<!-- 标题公共组件 -->
			<indextitle iconsrc="superhero" titles="热门超英"></indextitle>
			<!-- 内容层 -->
			<view class="scroll-content">
				<scroll-view class="scroll-view_H" scroll-x="true">
					<view class="scroll-view-item_H" v-for="(item,index) in superArr" :key="index" @click="$goToDetail('../moviedetail/moviedetail',item.id)">
						<supermodel :superOne="item"></supermodel>
					</view>
				</scroll-view>
			</view>
		</view>
		<!-- 热门预告 -->
		<view class="hot-notice">
			<!-- 标题公共组件 -->
			<indextitle iconsrc="notice" titles="热门预告"></indextitle>
			<!-- 预告内容层 -->
			<view class="notice-content">
				<view class="video-item" v-for="(item,index) in noticeArr" :key="index">
					<video v-if="item.id" :id="item.id" :src="item.trailer" :poster="item.cover" :title="item.name" @play="startPlay(item.id)">
					</video>
				</view>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<view class="guesslike">
			<!-- 猜你喜欢模板 -->
			<view class="guess-item" v-for="(item,index) in guessArr" :key="index" @click="$goToDetail('../moviedetail/moviedetail',item.id)">
				<guessmodel :likemodel="item"></guessmodel>
			</view>
		</view>
	</view>
</template>

<script>
	import banner from '../../components/index/banner.vue'
	import indextitle from '../../components/common/indextitle.vue'
	import supermodel from '../../components/common/supermodel.vue'
	import guessmodel from '../../components/common/guessmodel.vue'
	export default {
		name: "",
		components: {
			banner,
			indextitle,
			supermodel,
			guessmodel
		},
		props: {},
		data() {
			return {
				// 接收请求到的轮播图数据
				bannerArr: [],
				// 接收请求到的热门超英的数据
				superArr: [],
				// 接收请求到的热门预告的数据
				noticeArr: [],
				// 接收请求到的猜你喜欢的数据
				guessArr: []
			}
		},
		methods: {
			// 获取首页轮播图数据
			getBanners() {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: this.$api.getBanner(),
					method: 'POST',
					data: {
						type: 'superhero'
					},
					success: res => {
						this.bannerArr = res.data.data
					},
					fail: () => {},
					complete: () => {
						uni.hideLoading()
					}
				});
			},
			// 请求热门超英的数据
			getSuper(type) {
				uni.request({
					url: this.$api.getHot(),
					method: 'POST',
					data: {
						type: type
					},
					header: {
						"content-type": 'application/x-www-form-urlencoded'
					},
					success: res => {
						if (type === 'superhero') {
							this.superArr = res.data.data
						} else {
							this.noticeArr = res.data.data
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 获取猜你喜欢的数据
			getLikes() {
				uni.request({
					url: this.$api.getLike(),
					method: 'POST',
					data: {},
					success: res => {
						this.guessArr = res.data.data
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 播放按钮
			startPlay(ids) {
				this.noticeArr.map(item => {
					if (item.id != ids) {
						uni.createVideoContext(item.id).pause()
					}
				})

			}
		},
		mounted() {
			this.getBanners()
			this.getSuper('superhero')
			this.getSuper('trailer')
			this.getLikes()
		},
		onLoad() {

		},
		onPullDownRefresh() {
			this.getLikes()
			setTimeout(() => {
				uni.showToast({
					title: '刷新成功'
				});
				uni.stopPullDownRefresh();
			}, 1200)
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
	.bg {
		overflow: hidden;
		background-color: #F7F7F7;

		.hot-superhero,
		.hot-notice {
			margin: 10px 0;
			padding: 10px 0;
			background-color: #fff;

			.scroll-content {
				width: 100%;

				.scroll-view_H {
					white-space: nowrap; //横向滚动关键

					.scroll-view-item_H {
						display: inline-block;
						width: 95px;
						margin: 0 5px;

						&:first-child {
							margin-left: 10px;
						}

						&:last-child {
							margin-right: 10px;
						}
					}
				}
			}
		}

		.hot-notice {
			.notice-content {
				display: flex;
				flex-wrap: wrap;

				.video-item {
					width: 45%;
					height: 210px;
					margin: 7px;

					video {
						width: 100%;
						height: 100%;
					}
				}
			}
		}

		.guesslike {
			.guess-item {
				padding: 15px 10px;
				background-color: #fff;
			}
		}
	}
</style>
