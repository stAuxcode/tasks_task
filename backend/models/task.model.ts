import { Document, model, Schema } from 'mongoose';

export interface TaskModel extends Document {
    _id: string,
    name: string,
    description: string
}

const schema = new Schema({
    name: String,
    description: String,
});

module.exports = model<TaskModel>('tasks', schema);
