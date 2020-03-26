<template>
	<view class="artist-model">
		<!-- 照片 -->
		<view class="artist-image">
			<image :src="artistmodel.photo"></image>
		</view>
		<!-- 名字 -->
		<view class="artist-name">
			{{artistmodel.name}}
		</view>
		<!-- 职责描述 -->
		<view class="duty">
			<block class="role-2" v-if="artistmodel.role === 2">
				饰演：
			</block>
			<view class="actname">
				{{artistmodel.actName}}
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
			artistmodel: {
				type: Object,
				default: () => {}
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
	.artist-model {
		width: 100%;

		.artist-image {
			width: 100%;
			height: 100px;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.artist-name {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}

		.duty {
			display: flex;
			color: #ccc;
			font-size: 14px;

			.actname {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
	}
</style>
