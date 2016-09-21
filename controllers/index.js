var ZftLogModel = require('../proxy').ZftLogModel;

exports.index = function (req, res, next) {
    var viewData = { title: '总体' };
    Promise.all([ZftLogModel.getErrorLogCount(), ZftLogModel.getNormalLogCount()])
        .then(function (result) {
            viewData.errorCount = result[0];
            viewData.normalCount = result[1];
            res.render('index', viewData);
        })
        .catch(function (error) {
            next(error);
        })
}

exports.list = function (req, res, next) {
    var viewData = { title: '智付通', ActiveId: 3 };
    Promise.all([ZftLogModel.getErrorLogCount(), ZftLogModel.getNormalLogCount(), ZftLogModel.getLog(req.query.p)])
        .then(function (result) {
            viewData.count = result[0] + result[1];
            viewData.zftmodels = result[2];
            viewData.page = req.query.p;
            res.render('list', viewData);
        })
        .catch(function (error) {
            next(error);
        });
}