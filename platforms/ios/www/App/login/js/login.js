/**
 * Created by Administrator on 2017/2/18 0018.
 */
define(['app', 'App/utils/db/DBUtil'], function (app, DBUtil) {
    var $ = app.$$;
    $('.class-login').click(function () {

        // 数据库中没有数据的话就插入数据
        if (DBUtil.getLines() <= 0) {
            DBUtil.execSql(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
                tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
                tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
            });
        }

        DBUtil.execSql(function (tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (3, "朱志强")');
            tx.executeSql('INSERT INTO LOGS (id, log) VALUES (4, "邓甜甜")');
        });

        require(['App/module/home/js/home'], function () {
            app.router.loadPage('App/module/home/home.html');
        });
        require(['App/module/mine/js/mine', 'App/module/news/js/news', 'App/module/search/js/search']);
    });
});