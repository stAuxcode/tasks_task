import express from "express";
import cors from 'cors';

(async () => {
    const app = express();
    await require('./utilities/instantiate-database')();
    const tasks= require("./routes/tasks.route");

    app.use(cors())
    app.use(express.json());
    app.use('/tasks',tasks)
    const port = 9000;
    app.listen(port, () => {
        console.log('Server started on port ' + port);
    });
})();