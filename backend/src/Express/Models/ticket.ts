import * as mongoose from 'mongoose'
import { TicketSchema } from '../Schemas'

export interface TicketInterface extends mongoose.Document {
  film: string,
  date: string,
  hour: number,
  room: number,
  row: number,
  seat: number,
}

export const Ticket = mongoose.model<TicketInterface>('Ticket', TicketSchema)