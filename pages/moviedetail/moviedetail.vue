<template>
	<view class="bg" v-if="movieObj.id">
		<!-- 顶部是一个video标签 -->
		<view class="movie-video">
			<video :id="movieObj.id" :src="movieObj.trailer" :poster="movieObj.cover" controls></video>
		</view>
		<!-- 电影介绍 -->
		<view class="movie-infos">
			<!-- 左边的封面图 -->
			<view class="movie-cover" @click="goToCover(movieObj.cover)">
				<image :src="movieObj.cover"></image>
			</view>
			<!-- 右边具体内容层 -->
			<view class="right-mores">
				<!-- 电影名 -->
				<view class="movie-name">
					{{movieObj.name}}
				</view>
				<!-- 电影描述 -->
				<view class="movie-desc">
					{{movieObj.basicInfo}}
				</view>
				<!-- 原名 -->
				<view class="originame">
					{{movieObj.originalName}}
				</view>
				<!-- 上映时间 -->
				<view class="publish-name">
					{{movieObj.releaseDate}}
				</view>
				<!-- 综合评分盒子 -->
				<view class="rate-box">
					<!-- 左边的综合评分 -->
					<view class="total-score">
						<view class="total-text">
							综合评分
						</view>
						<view class="score-num">
							{{movieObj.score}}
						</view>
					</view>
					<!-- 右边的评分组件 -->
					<view class="rate-component">
						<!-- 空盒子撑高度 -->
						<view class="empty">

						</view>
						<!-- 评分组件 -->
						<uni-rate :disabled="false" :value="(movieObj.score/2).toFixed(1)" size="14"></uni-rate>
						<!-- 点赞数 -->
						<view class="support-num">
							{{movieObj.prisedCounts}}人点赞
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 剧情介绍 -->
		<view class="movie-plot">
			<!-- 标题 -->
			<view class="plot-title">
				剧情介绍：
			</view>
			<!-- 简介内容 -->
			<view class="plot-content">
				{{movieObj.plotDesc}}
			</view>
		</view>
		<!-- 演职人员 -->
		<view class="artists-item">
			<!-- 标题 -->
			<view class="plot-title">
				演职人员：
			</view>
			<!-- 演员的内容层(scroll-view) -->
			<scroll-view class="scroll-view_H" scroll-x="true" v-if="actorArr.length>0">
				<view id="demo1" class="scroll-view-item_H" v-for="(item,index) in actorArr" :key="index">
					<artistmodel :artistmodel="item"></artistmodel>
				</view>
			</scroll-view>
		</view>
		<!-- 剧照 -->
		<view class="movie-photos">
			<!-- 标题 -->
			<view class="plot-title">
				剧照：
			</view>
			<!-- 照片内容层 -->
			<view class="images-content">
				<view class="image-item" v-for="(item,index) in photosArr" :key="index">
					<image :src="item"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniRate from '../../components/uni-ui/uni-rate/uni-rate.vue'
	import artistmodel from '../../components/moviedetail/artistmodel.vue'
	export default {
		name: "",
		components: {
			uniRate,
			artistmodel
		},
		props: {},
		data() {
			return {
				// 接收传过来的id值
				movieId: '',
				// 接收请求出来的数据
				movieObj: {},
				// 接收请求出来的导演数据
				directorArr: [],
				// 接收请求出来的演员数据
				actorArr: [],
				// 将剧照从请求出来的电影数据中取出来
				photosArr: []
			}
		},
		methods: {
			getMovieDetail() {
				uni.request({
					url: this.$api.goToDetail(this.movieId),
					method: 'POST',
					data: {},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success: res => {
						this.movieObj = res.data.data
						this.photosArr = JSON.parse(res.data.data.plotPics)
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 请求导演数据和演员数据
			getArtists(types) {
				uni.request({
					url: this.$api.getArtist(this.movieId, types),
					method: 'POST',
					data: {},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					success: res => {
						if (types === 1) {
							this.directorArr = res.data.data
						} else {
							this.actorArr = this.directorArr.concat(res.data.data)
						}
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转图片预览
			goToCover(src) {
				uni.previewImage({
					urls: [src],
					longPressActions: {
						itemList: ['保存图片到本地', '取消'],
						success: function(data) {
							console.log(data);
							// if() {

							// }
							console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
						},
						fail: function(err) {
							console.log(err.errMsg);
						}
					}
				})
			}
		},
		mounted() {
			if (this.movieId !== '') {
				this.getMovieDetail()
				this.getArtists(1)
				setTimeout(() => {
					this.getArtists(2)
				}, 100)
			}
		},
		onLoad(option) {
			this.movieId = option.id
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

		.movie-video {
			video {
				width: 100%;
				height: 250px;
			}
		}

		// 电影介绍
		.movie-infos {
			display: flex;
			justify-content: space-around;
			padding: 50px 10px;

			.movie-cover {
				width: 34%;
				height: 200px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.right-mores {
				position: relative;
				max-width: 58%;

				.movie-name {
					font-size: 18px;
					font-weight: 700;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.movie-desc,
				.originame,
				.publish-name,
				.support-num {
					margin-top: 5px;
					font-size: 14px;
					color: #ccc;
				}

				.publish-name {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}

				.rate-box {
					position: absolute;
					right: 0;
					bottom: 0;
					box-sizing: border-box;
					display: flex;
					width: 100%;
					justify-content: space-between;
					padding: 10px;
					background-color: #fff;
					text-align: center;

					.score-num {
						color: #FFCA3E;
					}

					.rate-component {
						width: 50%;

						.empty {
							height: 15px;
						}

						.support-num {
							text-align: left;
						}
					}
				}
			}
		}

		// 剧情介绍
		.movie-plot,
		.artists-item,
		.movie-photos {
			margin: 0 15px;
			border-top: 1px solid #D7D7D7;
			font-size: 14px;

			.plot-title {
				padding: 10px 0;
				color: #ccc;
			}

			.plot-content {
				padding: 0 0 15px;
			}
		}

		.artists-item {
			scroll-view {
				white-space: nowrap;
				padding: 10px 0;

				.scroll-view-item_H {
					display: inline-block;
					width: 22%;
					margin: 0 10px;
				}
			}
		}

		.movie-photos {
			.images-content {
				display: flex;
				flex-wrap: wrap;
				// justify-content: space-between;

				.image-item {
					width: 30%;
					height: 150px;
					margin: 0 10px 10px 0;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
