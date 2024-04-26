import {TaskModel} from "../models/task.model";
const Task = require('../models/task.model');

export class TaskService {
    public async getTasks (req: any, res: any) {
        try {
            const tasks: TaskModel = await Task.find();
            res.status(200).json(tasks);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    }
    public async getSpecTask(req:any, res:any){
        const id = req.params.id;
        try {
            const tasks = await Task.findById(id);
            res.status(200).json(tasks);
        } catch (error:any) {
            res.status(404).json({ message: error.message });
        }
    }

    public async createTask(req:any, res:any){
        const body: TaskModel = req.body;
        try {
            const task = new Task({name: body.name, description: body.description});
            await task.save()
            res.status(204).json({ message: "Task created successfully" });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    public async updateTask(req:any, res:any){
        const id = req.params.id;
        try {
            const updatedTask = await Task.findOneAndUpdate({ _id: id }, req.body, { new: true });
            res.status(200).json(updatedTask);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

    public async deleteTask(req: any, res: any){
        const id = req.params.id;
        try {
            await Task.findOneAndDelete({ _id: id });
            res.status(204).json({ message: "Task deleted successfully" });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }

}

export default new TaskService();