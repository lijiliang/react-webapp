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

app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3008, function(err){
    if(err) throw err;
    console.log('listening 127.0.0.1:3008')
});
