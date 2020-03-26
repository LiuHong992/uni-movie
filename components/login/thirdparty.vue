<template>
	<view class="third-parties">
		<!-- 第三方登录组件 -->
		<view class="title">
			第三方账号登录
		</view>
		<!-- 组件包含的一些图片 -->
		<view class="other-logins">
			<!-- #ifdef APP-PLUS -->
			<!-- 微信登录 -->
			<view class="loginby-wx">
				<image src="../../static/wx.png" data-loginType="weixin" @click="loginOthers"></image>
			</view>
			<!-- QQ登录 -->
			<view class="loginby-qq">
				<image src="../../static/QQ.png" data-loginType="qq" @click="loginOthers"></image>
			</view>
			<!-- 微博登录 -->
			<view class="loginby-wb">
				<image src="../../static/wb.png" data-loginType="sinaweibo" @click="loginOthers"></image>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<!-- 微信登录 -->
			<view class="loginby-wx">
				<image src="../../static/wx.png" data-loginType="weixin" @click="loginWX"></image>
			</view>
			<!-- #endif -->
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
			return {}
		},
		methods: {
			// 登录
			loginByOther(type, us) {
				console.log(us);
				uni.showLoading({
					title: '登录中...',
					duration: 800
				});
				setTimeout(() => {
					if (us) {
						console.log(us.nickName);
						uni.request({
							url: this.$api.loginOther(type),
							method: 'POST',
							data: {
								face: us.avatarUrl,
								nickname: us.nickName,
								openIdOrUid: us.openId
							},
							header: {
								'custom-header': 'application/json' //自定义请求头信息
							},
							success: res => {
								if (res.statusCode === 200) {
									uni.showToast({
										title: '登录成功'
									});
									uni.setStorageSync('userinfo', JSON.stringify(res.data.data))
									uni.setStorageSync('userToken', res.data.data.userUniqueToken)
									this.$store.state.userObj = res.data.data
									console.log(res);
									uni.switchTab({
										url: `../my/my`,
										complete() {
											uni.hideLoading()
										}
									})
								}
							},
							fail: (err) => {
								console.log(err);
							},
							complete: () => {
								uni.hideLoading()
							}
						});
					} else {
						uni.showToast({
							title: '授权失败',
							icon: "none"
						});
					}
				}, 800)
			},
			// 第三方登录(APP端)
			loginOthers(e) {
				let loginType = e.currentTarget.dataset.logintype
				let t = this
				uni.login({
					provider: loginType,
					// 给provider传入不同的值, 调用不同的应用登陆接口
					success(res) {
						// 登录成功后, 获取用户数据
						uni.getUserInfo({
							provider: loginType,
							success(info) {
								var userInfo = info.userInfo
								t.loginByOther(loginType, userInfo)
							}
						})
					}
				})
			},
			// 微信小程序端的微信登录
			loginWX() {
				uni.showToast({
					title: '该功能由于接口不全,暂未开发~',
					icon: "none"
				});
			},

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
	.third-parties {
		margin-top: 40px;
		text-align: center;
		font-size: 14px;
		color: #ccc;

		.other-logins {
			display: flex;
			justify-content: space-between;
			width: 40%;
			margin: 15px auto 0;

			.loginby-qq,
			.loginby-wb,
			.loginby-wx {
				width: 32px;
				height: 32px;

				image {
					width: 100%;
					height: 100%;
				}
			}

			/* #ifdef MP-WEIXIN */
			.loginby-wx {
				width: 36px;
				height: 36px;
				margin: 0 auto;

				image {
					width: 100%;
					height: 100%;
				}
			}

			/* #endif */
		}
	}
</style>
