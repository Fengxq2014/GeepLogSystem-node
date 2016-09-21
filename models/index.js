var mongoose = require('mongoose');
var config   = require('../config');
var logger = require('../common/logger')

mongoose.connect(config.db, {
  server: {poolSize: 20}
}, function (err) {
  if (err) {
    logger.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

var db = mongoose.connection;
db.on('open',function(){
    logger.info('连接数据库成功')
});
db.on('close',function(){
    logger.info('数据库连接断开')
});

// models
require('./zftlogmodel');

exports.ZftLogModel = mongoose.model('zftlogmodel');