var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();

router.get('/', function *(next) {
    this.body = 'hello koa !'
});

router.get('/api', function *(next) {
    this.body = 'test data'
});
router.get('/api/2', function *(next) {
    this.body = {
        a: 1,
        b: '123'
    };
});

router.post('/api/post', koaBody, function *(next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
});

// 首页特惠广告数据
const homeAd = require('./home/ad.js');
router.get('/api/homead', function *(next){
    this.body = homeAd;
});

// 首页列表数据
const homeList = require('./home/homelist.js');
router.get('/api/homelist/:city/:page', function *(next){
    // 参数
    const params = this.params;
    const city = params.city;
    const page = params.page;
    console.log(city, page);

    this.body = homeList;
});


// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('./search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)

    this.body = searchListData
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function *(next) {
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)

    this.body = searchListData
})

// 获取商户信息
var detailInfo = require('./detail/info.js')
router.get('/api/detail/info/:id', function *(next){
    const params = this.params
    const id = params.id

    console.log('商户id: ' + id);
    this.body = detailInfo;
});

// 获取商户信息
var detailComment = require('./detail/comment.js')
router.get('/api/detail/comment/:page/:id', function *(next){
    console.log('详情页 - 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('商户id: ' + id)
    console.log('当前页数: ' + page)

    this.body = detailComment;
});

// 订单列表
const orderList = require('./orderlist/OrderList.js')
router.get('/api/orderlist/:username', function *(next) {
    console.log('订单列表')

    const params = this.params
    const username = params.username
    console.log('用户名：' + username)

    this.body = orderList
})

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3008, function(err){
    if(err) throw err;
    console.log('listening 127.0.0.1:3008')
});
