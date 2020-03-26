<template>
	<view class="pic-container">
		<image class="pic-view" v-if="picUrl" :src="picUrl" mode=""></image>
		<view v-else class="pic-msg">
			* 请从相册中选择等比宽高的照片噢~
		</view>
		<view class="pic-bottom">
			<view @click="chooseImage">重新选择</view>
			<view @click="updatePic">确认上传</view>
		</view>
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
				picUrl: null,
				user: null
			}
		},
		methods: {
			// 选择图片
			chooseImage() {
				uni.chooseImage({
					count: 1, //默认9
					sourceType: ['album'], //从相册选择
					success: (res) => {
						console.log(res);
						this.picUrl = res.tempFiles[0].path
					},
					fail: (err) => {
						console.log(err);
					}
				});
			},
			// 上传图片
			updatePic() {
				if (!this.user || !this.picUrl) {
					uni.showToast({
						icon: "none",
						title: "图片不存在或信息不完整",
						duration: 800
					})
					return
				}
				uni.showLoading({
					title: '上传中...'
				});
				uni.uploadFile({
					url: this.$api.updateImage({
						userId: this.user.id
					}),
					filePath: this.picUrl,
					name: 'file',
					header: {
						"headerUserId": this.user.id,
						"headerUserToken": this.user.userUniqueToken
					},
					formData: {},
					success: (uploadFileRes) => {
						let res = JSON.parse(uploadFileRes.data)
						uni.hideLoading()
						if (res.status === 200) {
							uni.showToast({
								title: '上传成功',
								duration: 800
							});
							setTimeout(() => {
								this.picUrl = null
								uni.setStorageSync('userinfo', JSON.stringify(res.data))
								uni.navigateTo({
									url: '../settings/settings',
									success: res => {},
									fail: () => {},
									complete: () => {}
								});
							}, 800)
						}
						console.log(res);
					}
				})
			}
		},
		mounted() {

		},
		onLoad() {
			this.user = JSON.parse(uni.getStorageSync('userinfo'))
			console.log(this.user);
			uni.showModal({
				title: '选取本地照片',
				content: '点击确认选取照片',
				success: (res) => {
					if (res.confirm) {
						this.chooseImage()
					}
				}
			})
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
	.pic-container {
		display: flex;
		justify-content: center;
		background: #000000;
		position: absolute;
		width: 100%;
		top: 0;
		bottom: 0;
		text-align: center;
	}

	.pic-msg {
		color: gray;
		font-size: 28upx;
		width: 100%;
	}

	.pic-view {
		margin: 100px auto 0;
		width: 80%;
	}

	.pic-bottom {
		display: flex;
		justify-content: space-around;
		color: white;
		background: #000000;
		font-size: 28upx;
		padding: 10upx;
		width: 100%;
		position: absolute;
		bottom: 0;
		border-top: 1upx solid #ededed;
	}
</style>
