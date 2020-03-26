
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/search/search","pages/my/my","pages/login/login","pages/moviedetail/moviedetail","pages/coverpre/coverpre","pages/settings/settings","pages/portraitupload/portraitupload","pages/changename/changename","pages/changebirth/changebirth","pages/changesex/changesex"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"uni-app","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8"},"tabBar":{"color":"#2c2c2c","selectedColor":"#d81e06","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/movie.png","selectedIconPath":"static/movie-active.png","text":"首页"},{"pagePath":"pages/search/search","iconPath":"static/search.png","selectedIconPath":"static/search-active.png","text":"搜索"},{"pagePath":"pages/my/my","iconPath":"static/my.png","selectedIconPath":"static/my-active.png","text":"我的"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-app-demo","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","enablePullDownRefresh":true}},{"path":"/pages/search/search","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"搜索"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"小爱电影"}},{"path":"/pages/moviedetail/moviedetail","meta":{},"window":{"navigationBarTitleText":"电影详情"}},{"path":"/pages/coverpre/coverpre","meta":{},"window":{"navigationBarTitleText":"封面预览"}},{"path":"/pages/settings/settings","meta":{},"window":{"navigationBarTitleText":"我的账号"}},{"path":"/pages/portraitupload/portraitupload","meta":{},"window":{"navigationBarTitleText":"头像上传"}},{"path":"/pages/changename/changename","meta":{},"window":{"navigationBarTitleText":"修改昵称"}},{"path":"/pages/changebirth/changebirth","meta":{},"window":{"navigationBarTitleText":"修改生日"}},{"path":"/pages/changesex/changesex","meta":{},"window":{"navigationBarTitleText":"修改性别"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});