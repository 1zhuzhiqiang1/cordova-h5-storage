/**
 * Created by Administrator on 2017/2/18 0018.
 */

//require.config({
//    paths: {}
//});

define(function () {

    var myApp = new Framework7({

        // Hide and show indicator during ajax requests
        onAjaxStart: function (xhr) {
            myApp.showIndicator();
        },
        onAjaxComplete: function (xhr) {
            myApp.hideIndicator();
        }
    });

    var $$ = Dom7;

    var mainView = myApp.addView('.view-main', {
        dynamicNavbar:true,//这个不加的话，导航栏上的标题不能显示
    });

    require(['App/index/js/index', 'App/splash/js/splash']);

    return {
        myApp: myApp,
        router: mainView,
        $$: $$
    };
});
