const url = 'https://www.imovietrailer.com/superhero/'
const qq = 2885250484

// 导出接口
export default {
	// 用户模块
	// 用户登录/注册
	login() {
		return `${url}/user/registOrLogin?qq=${qq}`
	},
	// 修改用户信息
	updateInfo() {
		return `${url}/user/modifyUserinfo?qq=${qq}`
	},
	// 修改用户头像
	updateImage({
		userId
	}) {
		return `${url}/user/uploadFace?qq=${qq}&userId=${userId}`
	},
	// 用户退出登录
	loginOut({
		userId
	}) {
		return `${url}/user/logout?qq=${qq}&userId=${userId}`
	},
	// APP端第三方登录
	loginOther(loginType) {
		return `${url}/appUnionLogin/${loginType}?qq=${qq}`
	},

	// 首页模块
	// 获取首页轮播图数据
	getBanner() {
		return `${url}/index/carousel/list?qq=${qq}`
	},
	// 获取热门超英/预告片列表
	getHot() {
		return `${url}/index/movie/hot?qq=${qq}`
	},
	// 获取猜你喜欢数据
	getLike() {
		return `${url}/index/guessULike?qq=${qq}`
	},

	// 搜索模块
	// 搜索页搜索框内没内容时展示数据
	getNoSearch({
		keywords,
		pageSize,
		page
	}) {
		return `${url}/search/list?keywords=${keywords}&qq=${qq}&pageSize=${pageSize}&page=${page}`
	},


	// 详情页模块
	// 请求详情页电影数据
	goToDetail(trailerId) {
		return `${url}/search/trailer/${trailerId}?qq=${qq}`
	},
	// 请求详情页演员导演数据
	getArtist(trailerId, role) {
		return `${url}/search/staff/${trailerId}/${role}?qq=${qq}`
	}
}
