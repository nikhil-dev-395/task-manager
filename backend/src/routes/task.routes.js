const {
  createTask,
  GetTask,
  GetAllTask,
  UpdateTask,
  DeleteTask,
} = require("../controllers/task.controllers");

const router = require("express").Router();

router.post("/createTask", createTask);
router.get("/getTask/:id", GetTask);
router.get("/getAllTask", GetAllTask);
router.patch("/updateTask/:id", UpdateTask);
router.delete("/deleteTask/:id", DeleteTask);

module.exports = router;
