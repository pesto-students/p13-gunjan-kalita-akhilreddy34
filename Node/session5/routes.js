const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getSingleTaskyId,
  addTask,
  editTask,
  deleteTask,
} = require("./service");

/** Get routes */
router.get("/tasks", getAllTasks);
router.get("/tasks/:id", getSingleTaskyId);

/**Post routes */
router.post("/tasks", addTask);

/** Put routes */
router.put("/tasks/:id", editTask);

/** Delete Route */
router.delete("/tasks/:id", deleteTask);

module.exports = { router };
