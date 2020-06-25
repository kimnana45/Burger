//inport express
const express = require('express');
//inport burger.js
const burger = require('../models/burger');
//create router
const router = express.Router();

//get all the data and display on the page 
router.get('/', function(req, res) {
    burger.all(function(data) {
        const hbsObj = { burgers: data }
    });
    console.log(hbsObj);
    res.render('index', hbsObj);
});

//make new burger
// router.post('/api/burgers', (req, res) => {
//     burger.create(["burger_name", "devoured"],
//         [req.body.name, req.body.devoured],
//         results => res.json({ id: results.insertId }));
// });

//change burger status to devoured 
// router.put('/api/burgers/:id', (req, res) => {
//     let condition = `id = ${req.params.id}`;
//     console.log("condition", condition);

//     burger.update({ devoured: req.body.devoured },
//         condition, (results) => {
//             if (results.changeRows == 0) {
//                 return res.status(404).end();
//             } else {
//                 res.status(200).end();
//             }
//         });
// });

//delete burger
// router.delete('/api/burgers/:id', (req, res) => {
//     let condition = `id = ${req.params.id}`;
//     console.log("condition", condition);
    
//     burger.delete(condition, (results) => {
//         if (results.affectedRows == 0) {
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });

module.exports = router;