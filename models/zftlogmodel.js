var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var ObjectId  = Schema.ObjectId;

var zftlogmodelSchema = new Schema({
    DevNo: {type: String},
    Class: {type: String},
    AccNo: {type: String},
    Ip: {type: String},
    Level: {type: Number},
    Label: {type: String},
    Description: {type: String},
    IsErrorLog: {type: Boolean},
    LogName: {type: String},
    Exception: {type: String},
    Time: {type: Date}
});

mongoose.model('zftlogmodel', zftlogmodelSchema, "zftlogmodel");