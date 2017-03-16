/**
 * Created by Administrator on 2017/2/18 0018.
 */
define(['app'], function (app) {
    app.$$('.class-login').click(function () {
        app.router.loadPage('App/module/home/home.html');
        require(['App/module/home/js/home', 'App/module/mine/js/mine', 'App/module/news/js/news', 'App/module/search/js/search']);
    });
});