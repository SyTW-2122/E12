"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose_1 = require("mongoose");
const user_1 = require("./model/user");
const app = express();
const url = 'mongodb://localhost/Feelm';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Código usado para meter un usuario en la base de datos
// const dbName = 'Feelm'
// interface UserInterface {
//     name: string, 
//     email: string, 
//     password: string
// }
// MongoClient.connect(url, {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true,
// }).then((client) => {
//     const db = client.db(dbName);
//     return db.collection<UserInterface>('user').insertOne({
//         name: 'test',
//         email: 'test@test.es',
//         password: 'test',
//     });
//   }).then((result) => {
//     console.log(result);
//   }).catch((error) => {
//     console.log(error);
//   });
app.post('/api/user/login', (req, res) => {
    (0, mongoose_1.connect)(url, function (err) {
        if (err)
            throw err;
        user_1.User.find({
            email: req.body.email, password: req.body.password
        }, function (err, user) {
            if (err)
                throw err;
            if (user.length === 1) {
                return res.status(200).json({
                    status: 'success',
                    data: user
                });
            }
            else {
                return res.status(200).json({
                    status: 'fail',
                    message: 'Login Failed'
                });
            }
        });
    });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
