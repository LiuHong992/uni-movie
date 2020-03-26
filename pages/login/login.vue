<template>
	<view>
		<!-- 大头贴 -->
		<view class="head-image">
			<view class="image-item">
				<image src="../../static/login-image.png"></image>
			</view>
		</view>
		<!-- form表单 -->
		<view class="form-box">
			<form @submit="login">
				<uniInput label="账号" placeholder="请输入账号" v-model="username" @getInputValue="changeName"></uniInput>
				<uniInput label="密码" placeholder="请输入密码" v-model="password" type="password" @getInputValue="changePass"></uniInput>
				<button form-type="submit" type="primary">注册/登录</button>
			</form>
		</view>
		<!-- 第三方登录(限APP端和小程序端) -->
		<!-- #ifdef MP-WEIXIN || APP-PLUS -->
		<thirds></thirds>
		<!-- #endif -->
	</view>
</template>

<script>
	import uniInput from '../../components/xiaowu-input/clear-input.vue'
	// 第三方登录组件
	import thirds from '../../components/login/thirdparty.vue'
	export default {
		name: "",
		components: {
			uniInput,
			thirds
		},
		props: {},
		data() {
			return {
				// 用户名
				username: '',
				// 密码
				password: ''
			}
		},
		methods: {
			// 用户名输入框
			changeName(e) {
				this.username = e.value
			},
			// 密码输入框
			changePass(e) {
				this.password = e.value
			},
			login() {
				if (this.username === '' || this.password === '') {
					uni.showToast({
						title: '请输入完整信息',
						icon: "none"
					});
				} else {
					uni.showLoading({
						title: '登录中...'
					});
					uni.request({
						url: this.$api.login(),
						method: 'POST',
						data: {
							username: this.username,
							password: this.password
						},
						success: res => {
							uni.setStorageSync('userinfo', JSON.stringify(res.data.data))
							uni.setStorageSync('userToken', res.data.data.userUniqueToken)
							this.$store.state.userObj = res.data.data
							uni.switchTab({
								url: `../my/my`,
								complete() {
									uni.hideLoading()
								}
							})
						},
						fail: () => {},
						complete: () => {}
					});
				}
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
	.head-image {
		margin: 60px 0;

		.image-item {
			width: 80px;
			height: 80px;
			margin: 0 auto;
			border-radius: 50%;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}
	}

	.form-box {
		padding: 0 30px;

		form {

			/* #ifdef MP-WEIXIN*/
			/deep/ .box {
				margin-bottom: 10px !important;
				border-bottom: 1px solid #ccc !important;
			}

			/* #endif */
			.box {
				margin-bottom: 10px;
				border-bottom: 1px solid #ccc;
			}

			button {
				width: 80%;
				margin: 20px auto 0;
			}
		}
	}
</style>
