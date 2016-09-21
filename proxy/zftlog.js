var ZftLogModel = require('../models').ZftLogModel;
var config = require('../config')

exports.getErrorLogCount = function () {
    return ZftLogModel.count({ IsErrorLog: true })
};

exports.getNormalLogCount = function(){
    return ZftLogModel.count({ IsErrorLog: false })
}

exports.getLog = function(p){
    return ZftLogModel.find({LogName:'ZFTPAD'}).limit(config.pageSize).skip(config.pageSize * (p -1));
}