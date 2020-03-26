import Vue from 'vue'
import App from './App'
import store from './store/index.js'
import api from './http/api.js'

Vue.prototype.$store = store
Vue.prototype.$api = api
// 跳转详情页
Vue.prototype.$goToDetail = function(url, id) {
		uni.navigateTo({
			url: `${url}?id=${id}`,
			success: res => {},
			fail: () => {},
			complete: () => {}
		});
	},
	// 修改用户信息
	Vue.prototype.$changes = function() {
		uni.showLoading({
			title: '修改中...'
		});
		uni.request({
			url: this.$api.updateInfo(),
			method: 'POST',
			data: {
				birthday: this.$store.state.userObj.birthday,
				nickname: this.$store.state.userObj.nickname,
				sex: this.$store.state.userObj.sex,
				userId: this.$store.state.userObj.id
			},
			header: {
				"headerUserId": this.$store.state.userObj.id,
				"headerUserToken": this.$store.state.userObj.userUniqueToken
			},
			success: res => {
				uni.hideLoading()
				uni.setStorageSync('userinfo', JSON.stringify(res.data.data))
				uni.navigateBack({
					delta: 1
				});
			},
			fail: () => {},
			complete: () => {}
		});
	}


Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
