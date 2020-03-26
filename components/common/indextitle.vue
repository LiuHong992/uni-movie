<template>
	<view class="title-wrap">
		<view class="icon-image">
			<image :src="iconsrc==='superhero'?'../../static/hot.png':'../../static/notice.png'"></image>
		</view>
		<!-- 标题内容 -->
		<view class="title-txet">
			{{titles}}
		</view>
	</view>
</template>

<script>
	export default {
		name: "",
		components: {

		},
		props: {
			iconsrc: {
				type: String,
				default: ''
			},
			titles: {
				type: String,
				default: ''
			}
		},
		data() {
			return {}
		},
		methods: {

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
	.title-wrap {
		display: flex;
		padding: 0 10px 10px;

		.icon-image {
			width: 20px;
			height: 20px;
			margin-right: 5px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.title-txet {
			font-size: 14px;
			line-height: 22px;
		}
	}
</style>
