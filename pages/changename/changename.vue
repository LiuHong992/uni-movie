<template>
	<view class="change-name">
		<!-- 输入框 -->
		<view class="name-ipt">
			<input type="text" v-model="nickname" placeholder="请输入昵称" @input="changeVal" />
		</view>
		<!-- 修改按钮 -->
		<view class="change-btn">
			<button type="primary" @click="changename">提交</button>
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
				// 接收名字
				nickname: ''
			}
		},
		methods: {
			// 输入框的输入事件
			changeVal(e) {
				this.nickname = e.detail.value
			},
			changename() {
				this.$store.state.userObj.nickname = this.nickname
				this.$changes()
			}
		},
		mounted() {
			if (uni.getStorageSync('userinfo')) {
				this.$store.state.userObj = JSON.parse(uni.getStorageSync('userinfo'))
			}
		},
		onLoad(option) {
			this.nickname = option.name
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
	.change-name {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #F7F7F7;

		.name-ipt {
			width: 100%;
			margin: 20px 0;

			input {
				height: 40px;
				background-color: #fff;
				text-align: center;
			}
		}

		.change-btn {
			width: 100%;
			height: 60px;
		}
	}
</style>
