var Swiper = require('swiper');
var app = module.exports = function(opt) {
	var swiper = new Swiper(opt.container, {
        pagination: opt.pagination,
        paginationClickable: true
    });
};