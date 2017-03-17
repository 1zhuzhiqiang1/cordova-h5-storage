/**
 * Created by anyware on 17/2/22.
 */
define(function () {

    function createDB() {
        var db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
        return db;
    }

    /**
     *
     * @param callback (tx)
     */
    function execSql(callback) {
        var db = createDB();
        db.transaction(callback);
    }

    /**
     *
     * @param callback (tx,results)
     */
    function searchSql(callback) {
        var db = createDB();
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM LOGS', [], callback, null);
        });
    }

    /**
     * 获取数据库中所有的数据
     */
    function getLines() {
        var lines = 0;
        var db = createDB();
        db.transaction(function (tx) {
            tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {
                lines = results.rows.length;
            }, null);
        });
        return lines;
    }

    return {
        createDB: createDB,
        execSql: execSql,
        searchSql: searchSql,
        getLines: getLines
    }

});