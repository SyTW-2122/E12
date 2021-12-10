import * as mongoose from 'mongoose';
export interface TicketInterface extends mongoose.Document {
    film: string;
    date: string;
    hour: number;
    room: number;
    row: number;
    seat: number;
}
export declare const Ticket: mongoose.Model<TicketInterface, {}, {}, {}>;
