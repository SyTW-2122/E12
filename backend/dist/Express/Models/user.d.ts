import * as mongoose from 'mongoose';
export interface UserInterface extends mongoose.Document {
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    username: string;
    password: string;
}
export declare const UserModel: mongoose.Model<UserInterface, {}, {}, {}>;
