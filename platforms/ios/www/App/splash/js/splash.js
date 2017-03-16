/**
 * Created by Administrator on 2017/2/18 0018.
 */

define(['app'], function (app) {

    setTimeout(function () {
        if (!localStorage['first']) {
            // 1.首先加载页面
            app.router.loadPage('App/guide/guide.html');
            require(['App/guide/js/guide'], function (guide) {
                // 2.将class和framework7提供的js结合起来，只有这样才能成功
                guide.initSwiper();
            });
            localStorage['first'] = true;
        } else {
            app.router.loadPage('App/login/login.html');
            require(['App/login/js/login']);
        }
    }, 100);
});