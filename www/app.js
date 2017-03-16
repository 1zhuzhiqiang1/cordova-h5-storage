/**
 * Created by Administrator on 2017/2/18 0018.
 */

//require.config({
//    paths: {}
//});

define(function () {

    var f7 = new Framework7({});

    var $$ = Dom7;

    var mainView = f7.addView('.view-main', {
        dynamicNavbar:true,//这个不加的话，导航栏上的标题不能显示
    });

    require(['App/index/js/index', 'App/splash/js/splash']);

    return {
        myApp: f7,
        router: mainView,
        $$: $$
    };
});
