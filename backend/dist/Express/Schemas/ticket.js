"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSchema = void 0;
const mongoose = require("mongoose");
exports.TicketSchema = new mongoose.Schema({
    film: { type: String, required: true, unique: true },
    date: { type: String, required: true },
    hour: { type: Number, required: true },
    room: { type: Number, required: true },
    row: { type: Number, required: true },
    seat: { type: Number, required: true, unique: true }
});
