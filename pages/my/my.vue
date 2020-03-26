<template>
	<view class="my-page">
		<!-- 我的页面分为两个不同的状态，一个是已登录，另一个是未登录状态 -->
		<!-- 未登录状态 -->
		<view class="no-login-content">
			<!-- 背景图 -->
			<view class="back-cover">
				<!-- 整体盒子 -->
				<view class="hole-box">
					<!-- 未登录头像 -->
					<view class="no-login-image">
						<image :src="$store.state.userObj.faceImage" v-if="$store.state.userObj.id"></image>
						<image src="../../static/default-icon.png" v-else></image>
					</view>
					<!-- 已登录 -->
					<view class="login-register" v-if="$store.state.userObj.id">
						{{$store.state.userObj.nickname}}
					</view>
					<!-- 登录注册文字(未登录) -->
					<view class="login-register" @click="goToLogin" v-else>
						注册/登录
					</view>
				</view>
				<!-- 登录过后的设置按钮 -->
				<view class="settings" @click="goToSetting" v-if="$store.state.userObj.id">
					<image src="../../static/settings.png" mode=""></image>
				</view>
			</view>
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
				// 接收存储在缓存中的用户信息
				// userObj: {}
			}
		},
		methods: {
			// 未登录时跳转登录页
			goToLogin() {
				uni.navigateTo({
					url: '../login/login',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 跳转到账号信息页面
			goToSetting() {
				uni.navigateTo({
					url: `../settings/settings`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		mounted() {},
		onLoad() {

		},
		onShow() {
			if (uni.getStorageSync('userinfo')) {
				this.$store.state.userObj = JSON.parse(uni.getStorageSync('userinfo'))
				console.log(this.$store.state.userObj);
			}
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
	.my-page {
		.no-login-content {
			.back-cover {
				position: relative;
				width: 100%;
				height: 200px;
				background: url(../../static/bg.jpg);

				.hole-box {
					position: absolute;
					top: 90px;
					left: 20px;
					display: flex;
					height: 60px;
					line-height: 60px;

					.no-login-image {
						width: 60px;
						height: 60px;
						border-radius: 50%;
						background-color: #fff;

						image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}

					.login-register {
						font-weight: 700;
						margin-left: 20px;
					}
				}

				// 设置按钮(登录后)
				.settings {
					position: absolute;
					right: 20px;
					top: 20px;
					width: 30px;
					height: 30px;

					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
