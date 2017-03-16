/**
 * Created by anyware on 17/2/22.
 */
define(['app'],function (app) {
    app.$$(window).onscroll = function () {
        console.log('页面滚动位置'+window.scrollY);
    }
});