"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose = require("mongoose");
const Schemas_1 = require("../Schemas");
exports.UserModel = mongoose.model('Menu', Schemas_1.UserSchema);
