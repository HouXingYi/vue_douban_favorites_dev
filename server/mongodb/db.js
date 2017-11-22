'use strict';
var mongoose = require('mongoose');

module.exports = function(){
    mongoose.connect('mongodb://127.0.0.1:27017/favorites');
    const db = mongoose.connection;
    db.once('open' ,() => {
        console.log('连接数据库成功')
    })
    db.on('error', function(error) {
        console.error('Error in MongoDb connection: ' + error);
        mongoose.disconnect();
    });
    db.on('close', function() {
        console.log('数据库断开，重新连接数据库');
        mongoose.connect('mongodb://127.0.0.1:27017/favorites', {server:{auto_reconnect:true}});
    });
}


