//call Orm functions
var orm = ('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.all('burgers', function(res) {
            cb(res)
        });
    },
    // create: (column ,value, cb) => {
    //     orm.create('burgers', column, value, res => cb(res));
    // },
    // update: (colVal, condition,cb) => {
    //     orm.updateOne('burgers', colVal, condition, res => cb(res));
    // },
    // delete: (condition, cb) => {
    //     orm.delete('burgers', condition, res => cb(res));
    // }
}
//export burger.js
module.exports = burger;