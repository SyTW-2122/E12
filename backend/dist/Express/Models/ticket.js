"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const mongoose = require("mongoose");
const Schemas_1 = require("../Schemas");
exports.Ticket = mongoose.model('Ticket', Schemas_1.TicketSchema);
