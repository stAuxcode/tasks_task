import tasks from "../service/task.service";

const express = require("express");
const router = express.Router();

router.get('/', tasks.getTasks);
router.get('/:id', tasks.getSpecTask);
router.post('/', tasks.createTask);
router.put('/:id', tasks.updateTask);
router.delete('/:id', tasks.deleteTask);

module.exports = router;