<template>
	<view>
		<!-- 除h5端之外的搜索框 -->
		<!-- #ifndef H5 -->
		<view class="ipt-wrap">
			<!-- 左边的搜索框 -->
			<search-bar :radius="100" placeholder="请输入电影信息" v-model="sValue" @cancel="handleCancel" @confirm="searchCofirm"
			 @input="changeValue"></search-bar>
		</view>
		<!-- #endif -->
		<!-- 在没搜索内容时展示的内容层 -->
		<view class="no-search-content" v-if="sFlag && searchArr.length>0">
			<!-- 模板 -->
			<view class="models" v-for="(item,index) in searchArr" :key="index" @click="$goToDetail('../moviedetail/moviedetail',item.id)">
				<searchModel :searchmodels="item"></searchModel>
			</view>
		</view>
		<!-- 有搜索内容时显示的内容 -->
		<view class="search-content" v-else>
			<!-- 模板 -->
			<view class="models" v-for="(item,index) in searchArr" :key="index" @click="$goToDetail('../moviedetail/moviedetail',item.id)">
				<searchModel :searchmodels="item"></searchModel>
			</view>
		</view>
	</view>
</template>

<script>
	import searchBar from '../../components/uni-ui/uni-search-bar/uni-search-bar.vue'
	import searchModel from '../../components/search/searchmodel.vue'
	export default {
		name: "search",
		components: {
			searchBar,
			searchModel
		},
		props: {

		},
		data() {
			return {
				// 搜索框的值
				sValue: '',
				// 控制是否点击搜索的flag
				sFlag: true,
				// 接收最大的搜索推荐数量
				maxL: 0,
				// 分页的页面数量
				pageSize: 20,
				// 分页的当前页数
				page: 1,
				// 接收请求到的搜索推荐数据
				searchArr: []
			}
		},
		methods: {
			// 没搜索内容时展示的数据
			getNoValue() {
				uni.request({
					url: this.$api.getNoSearch({
						keywords: this.sValue,
						pageSize: this.pageSize,
						page: this.page
					}),
					method: 'POST',
					data: {},
					success: res => {
						if (this.sValue.trim() === '') {
							if (res.data.data.rows.length === 20) {
								this.searchArr = this.searchArr.concat(res.data.data.rows)
							} else {
								this.searchArr = this.searchArr.concat(res.data.data.rows)
								this.maxL = this.searchArr.length
							}
						} else {
							this.searchArr = this.searchArr.concat(res.data.data.rows)
						}
					},
					header: {
						'content-type': 'application/x-www-form-urlencoded' //自定义请求头信息
					},
					fail: () => {},
					complete: () => {}
				});
			},
			// 搜索框值的变化
			changeValue(e) {
				this.sValue = e.value
				if (this.sValue.trim() === '' && !this.sFlag) {
					this.searchArr = []
					this.sFlag = true
					this.getNoValue()
				}
			},
			// 搜索框取消按钮
			handleCancel(e) {
				console.log('你点击了取消按钮');
			},
			// 搜索框确定按钮
			searchCofirm(e) {
				if (this.sValue.trim() !== '') {
					uni.showLoading({
						title: '搜索中...'
					});
					this.page = 1
					this.maxL = 0
					this.sFlag = false
					this.searchArr = []
					this.getNoValue()
					this.$nextTick(() => {
						uni.hideLoading()
					})
				} else {
					uni.showToast({
						title: '请输入要搜索的电影',
						icon: 'none'
					});
				}
			},
			// 跳转详情页
			goToDetails(id) {
				uni.navigateTo({
					url: `../moviedetail/moviedetail?id=${id}`,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		},
		mounted() {
			this.getNoValue()
		},
		// 搜索框内容变化
		onNavigationBarSearchInputChanged(e) {
			this.sValue = e.text
			if (this.sValue.trim() === '') {
				this.searchArr = []
				this.sFlag = true
				this.getNoValue()
			}
		},
		// 搜索按钮点击事件生命周期
		onNavigationBarButtonTap(index = 0) {
			if (this.sValue.trim() !== '') {
				uni.showLoading({
					title: '搜索中...'
				});
				this.page = 1
				this.maxL = 0
				this.sFlag = false
				this.searchArr = []
				this.getNoValue()
				this.$nextTick(() => {
					uni.hideLoading()
				})
			} else {
				uni.showToast({
					title: '请输入要搜索的电影',
					icon: 'none'
				});
			}
		},
		onLoad() {

		},
		// 上拉加载更多的触底生命周期
		onReachBottom() {
			if (this.maxL === 0) {
				uni.showLoading({
					title: '加载中...'
				});
				this.page++
				this.getNoValue()
				setTimeout(() => {
					uni.hideLoading()
				}, 1000)
			} else {
				uni.showToast({
					title: '没有更多数据了~'
				});
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
	.ipt-wrap {
		position: fixed;
		top: 0;
		z-index: 99;
		width: 100%;
		background-color: #fff;

		search-bar {
			width: 100%;
		}
	}

	// 没有搜索内容时展示的内容层
	.no-search-content,
	.search-content {
		display: flex;
		flex-wrap: wrap;

		// h5端不需要此margin-top
		/* #ifndef H5 */
		margin-top: 45px;

		/* #endif */
		.models {
			width: 28%;
			padding: 10px;
		}
	}
</style>
