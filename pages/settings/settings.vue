<template>
	<view class="bg">
		<!-- 头像 -->
		<view class="head-image">
			<!-- 左边的title -->
			<view class="left-title">
				头像
			</view>
			<!-- 右边的内容和箭头 -->
			<view class="right-infos" @click="changeImage">
				<view class="image-content">
					<image :src="$store.state.userObj.faceImage"></image>
				</view>
				<!-- 箭头 -->
				<view class="right-arrow">
					<uni-icons type="arrowright" size="20"></uni-icons>
				</view>
			</view>
		</view>
		<!-- 昵称 -->
		<settingmodel sTitle="昵称" :modelInfo="$store.state.userObj.nickname"></settingmodel>
		<!-- 生日 -->
		<settingmodel sTitle="生日" :modelInfo="$store.state.userObj.birthday"></settingmodel>
		<!-- 性别 -->
		<settingmodel sTitle="性别" :sexInfo="$store.state.userObj.sex"></settingmodel>
		<!-- 底部的两个按钮 -->
		<view class="bottom-btns">
			<!-- 清除缓存 -->
			<view class="clear-info">
				<button type="default" @click="shows">清理缓存</button>
			</view>
			<!-- 退出登录 -->
			<view class="out-btn">
				<button type="default" @click="loginOut">退出登录</button>
			</view>
		</view>
	</view>
</template>

<script>
	import settingmodel from '../../components/settings/settingmodel.vue'
	import uniIcons from "@/components/uni-icons/uni-icons.vue"
	export default {
		name: "",
		components: {
			settingmodel,
			uniIcons
		},
		props: {},
		data() {
			return {
				// 接收存储在缓存中的用户信息
				// userObj: {}
			}
		},
		methods: {
			// 跳转到修改头像的页面
			changeImage() {
				uni.navigateTo({
					url: '../portraitupload/portraitupload',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			// 清理缓存按钮
			shows() {
				uni.showToast({
					title: '该功能暂未开发~',
					icon: "none"
				});
			},
			// 退出登录
			loginOut() {
				uni.request({
					url: this.$api.loginOut({
						userId: this.$store.state.userObj.id
					}),
					method: 'POST',
					data: {},
					success: res => {
						uni.removeStorageSync('userinfo')
						uni.removeStorageSync('userToken')
						this.$store.state.userObj = {}
						uni.navigateBack({
							delta: 1
						});
						uni.showToast({
							title: '退出成功'
						});
					},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		mounted() {},
		onLoad() {
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
	.bg {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #F7F7F7;

		.head-image {
			display: flex;
			justify-content: space-between;
			padding: 10px;
			background-color: #fff;

			.left-title {
				line-height: 40px;
			}

			.right-infos {
				display: flex;

				.image-content {
					width: 40px;
					height: 40px;
					border-radius: 50%;

					image {
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
				}

				.right-arrow {
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}

		.bottom-btns {
			position: absolute;
			bottom: 0;
			width: 100%;

			.clear-info,
			.out-btn {
				button {
					background-color: #fff;
				}
			}
		}
	}
</style>
