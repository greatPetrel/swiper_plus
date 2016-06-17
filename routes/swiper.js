var express = require('express');
var router = express.Router();

/* GET swiper. */
router.get('/', function(req, res, next) {
  //res.send('we now in swiper page');
   res.render('swiper',{title:'swiper'});
});

module.exports = router;

//另外一种无须路由的写法，app.use("/swiper",swiper.list);即可
// exports.list = function(req,res){
//   res.render('swiper',{title:'swiper'});
// }