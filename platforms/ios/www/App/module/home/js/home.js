/**
 * Created by Administrator on 2017/2/20 0020.
 */
define(['app', 'App/utils/db/DBUtil'], function (app, DBUtil) {

    app.myApp.onPageInit('home',function () {
        // DBUtil.execSql(function (tx) {
        //     tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique, log)');
        //     tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
        //     tx.executeSql('INSERT INTO LOGS (id, log) VALUES (2, "www.runoob.com")');
        //     msg = '<p>数据表已创建，且插入了两条数据。</p>';
        //     document.querySelector('#status').innerHTML = msg;
        // });

        DBUtil.searchSql(function (tx, results) {
            var len = results.rows.length, i;
            msg = "<p>查询记录条数: " + len + "</p>";
            app.$$('#status').html(msg);

            for (i = 0; i < len; i++) {
                msg = "<p><b>" + results.rows.item(i).log + "</b></p>";
                app.$$('#status').append(msg);
            }
        });
    });

});