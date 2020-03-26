<template>
	<view class="change-birth">
		<timePicker showType="date" beginDate="1900-01-01" endDate="2030-12-31" @btnConfirm="btnConfirm" @btnCancel="btnCancel">
			<!-- 输入框 -->
			<view class="birth-ipt">
				<input type="text" v-model="birth" disabled="true" @click="showModal" />
			</view>
		</timePicker>
		<!-- 修改按钮 -->
		<view class="change-btn">
			<button type="primary" @click="changeBirth">提交</button>
		</view>
	</view>
</template>

<script>
	import timePicker from '../../components/wing-time-selector/wing-time-selector.vue';
	export default {
		name: "",
		components: {
			timePicker
		},
		props: {},
		data() {
			return {
				birth: '',
				// 时间选择器的显示
				showFlag: false
			}
		},
		methods: {
			showModal() {
				this.showFlag = true
			},
			// 时间选择器的确定按钮
			btnConfirm(e) {
				// console.log(e.key);
				this.birth = e.key
			},
			changeBirth() {
				this.$store.state.userObj.birthday = this.birth
				this.$changes()
			},
			// 取消按钮
			btnCancel() {

			}
		},
		mounted() {
			if (uni.getStorageSync('userinfo')) {
				this.$store.state.userObj = JSON.parse(uni.getStorageSync('userinfo'))
			}
		},
		onLoad(option) {
			this.birth = option.birth
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
	.change-birth {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: #F7F7F7;

		.birth-ipt {
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
