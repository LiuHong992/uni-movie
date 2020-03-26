<template>
	<view class="change-sex">
		<!-- 单选框 -->
		<view class="sex-box">
			<radio-group name="sexes" @change="radioChange">
				<label>
					<radio value="0" :checked="$store.state.userObj.sex === 0" /><text>男</text>
					<radio value="1" :checked="$store.state.userObj.sex === 1" /><text>女</text>
					<radio value="null" :checked="$store.state.userObj.sex === null" /><text>保密</text>
				</label>
			</radio-group>
		</view>
		<!-- 修改按钮 -->
		<view class="change-btn">
			<button type="primary" @click="changeSex">提交</button>
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
				sexNum: null,
				// 单选框的选中状态
				checked: false
			}
		},
		methods: {
			radioChange(e) {
				if (e.detail.value !== 'null') {
					this.sexNum = e.detail.value * 1
				} else {
					this.sexNum = null
				}
				console.log(this.sexNum);
			},
			// 修改性别
			changeSex() {
				this.$store.state.userObj.sex = this.sexNum
				this.$changes()
				console.log(this.$store.state.userObj.sex);
			}
		},
		mounted() {
			if (uni.getStorageSync('userinfo')) {
				this.$store.state.userObj = JSON.parse(uni.getStorageSync('userinfo'))
			}
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
	.sex-box {
		margin: 20px 0;

		radio-group {
			label {
				text {
					margin-right: 10px;
				}
			}
		}
	}
</style>
