//require connection.js
const connection = require('./connection');

createQmark = num => {
    let arr = [];
    for ( let i =0; i<num; i++){
        arr.push('?')
    }
    return arr.toString();
}

translateSql = ob => {
    let arr = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob,key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

let orm = {
    all: function(table, cb) {
        let query = `SELECT * FROM ${table};`;
        console.log(query);
        connection.query(query, (err,res) => {
            if (err) throw err;
            cb(res);
        })
    },
    // create: (table, column, value, cb) => {
    //     let query = `INSERT INTO ${table} (${column.toString()}) VALUES (${createQmark(value.length)})`;
    //     connection.query(query, value, (err,res) => {
    //         if (err) throw err;
    //         cb(res);
    //     })
    // },
    // update: (table, colVal, condition, cb) => {
    //     let query = `UPDATE ${table} SET ${translateSql(colVal)} WHERE ${condition}`;
    //     connection.query(query, (err,res) => {
    //         if (err) throw err;
    //         cb(res);
    //     })
    // },
    // delete: (table, condition, cb) => {
    //     let query = `DELETE FROM ${table} WHERE ${condition}`;
    //     connection.query(query,(err,res) => {
    //         if (err) throw err;
    //         cb(res);
    //     })
    // }
};

module.exports = orm;