<template>
	<view class="head-image">
		<!-- 左边的title -->
		<view class="left-title">
			{{sTitle}}
		</view>
		<!-- 右边的内容和箭头 -->
		<view class="right-infos" @click="changeInfo">
			<view class="content" v-if="sTitle!=='性别'">
				{{modelInfo}}
			</view>
			<view class="content" v-else>
				<view class="male" v-if="sexInfo===0">
					男
				</view>
				<view class="female" v-if="sexInfo===1">
					女
				</view>
				<view class="secret" v-if="sexInfo===null">
					保密
				</view>
			</view>
			<!-- 箭头 -->
			<view class="right-arrow">
				<uni-icons type="arrowright" size="20"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			sTitle: {
				type: String,
				default: ''
			},
			modelInfo: {
				type: String,
				default: ''
			},
			sexInfo: {
				type: Number,
				default: -1
			}
		},
		data() {
			return {}
		},
		methods: {
			// 跳转到相应的修改页面
			changeInfo() {
				uni.navigateTo({
					url: this.sTitle === '昵称' ? `../../pages/changename/changename?name=${this.modelInfo}` : this.sTitle === '生日' ?
						`../../pages/changebirth/changebirth?birth=${this.modelInfo}` : `../../pages/changesex/changesex?sex=${this.sexInfo}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
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
		display: flex;
		justify-content: space-between;
		padding: 10px;
		background-color: #fff;

		.left-title {
			line-height: 40px;
		}

		.right-infos {
			display: flex;

			.content {
				// height: 40px;
				line-height: 36px;
			}

			.right-arrow {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
