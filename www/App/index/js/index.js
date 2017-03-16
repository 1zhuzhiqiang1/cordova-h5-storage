/**
 * Created by Administrator on 2017/2/21 0021.
 */

define(['app'], function (app) {
    var $ = app.$$;

    function clickTabbar(index) {
        var childs = $('.class-tabs').children();
        for (var i = 0; i < childs.length; i++) {
            $(childs[i]).removeClass('active');
        }
        $(childs[index]).addClass('active');
    }

    $('.class-icon-1').click(function () {
        clickTabbar(0);
    });
    $('.class-icon-2').click(function () {
        clickTabbar(1);
    });
    $('.class-icon-3').click(function () {
        clickTabbar(2);
    });
    $('.class-icon-4').click(function () {
        clickTabbar(3);
    });
});