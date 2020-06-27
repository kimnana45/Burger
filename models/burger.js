const orm = require("../config/orm");

let burger = {
    selectAll: cb => {
        orm.selectAll("burgers", res => cb(res));
    },
    insertOne: (column, values, cb) => {
        orm.insertOne("burgers", column, values, res => cb(res));
    },
    updateOne: (columnValues, condition, cb) => {
        orm.updateOne("burgers", columnValues, condition, res => cb(res));
    }
};

module.exports = burger;