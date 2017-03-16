/**
 * Created by Administrator on 2017/2/18 0018.
 */

define(['app'], function (app) {

    app.$$('.guideStart').click(function (){
        app.router.loadPage('App/login/login.html');
        require(['App/login/js/login']);
    });

    function initSwiper() {
        //引导页
        app.myApp.swiper('.swiper-container', {
            pagination: '.swiper-pagination'
        });
    }

    return {
        initSwiper: initSwiper
    }

});