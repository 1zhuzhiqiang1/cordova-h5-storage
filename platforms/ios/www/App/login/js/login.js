/**
 * Created by Administrator on 2017/2/18 0018.
 */
define(['app'], function (app) {
    app.$$('.class-login').click(function () {

        require(['App/module/home/js/home'], function () {
            app.router.loadPage('App/module/home/home.html');
        });
        require(['App/module/mine/js/mine', 'App/module/news/js/news', 'App/module/search/js/search']);
    });
});