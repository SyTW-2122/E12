"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express = require("express");
exports.postRouter = express.Router();
exports.postRouter.post('/Register', (req, res) => {
    console.log(req.body);
    const newUser = {};
});
exports.postRouter.post('/Login', (req, res) => {
});
