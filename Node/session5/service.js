let tasks = [
  {
    id: 1,
    title: "todo1",
    description: "this is todo1",
    status: false,
  },
  {
    id: 2,
    title: "todo2",
    description: "this is todo2",
    status: false,
  },
  {
    id: 3,
    title: "todo3",
    description: "this is todo3",
    status: false,
  },
  {
    id: 4,
    title: "todo4",
    description: "this is todo4",
    status: false,
  },
  {
    id: 5,
    title: "todo5",
    description: "this is todo5",
    status: false,
  },
];

const getAllTasks = (req, res) => {
  try {
    if (tasks && tasks?.length) return res.status(200).send(tasks);
    else return res.status(200).send([]);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const getSingleTaskyId = (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).send("id is invalid");

    const task = tasks?.find((task) => task.id == id);

    if (task) return res.status(200).send(task);
    else
      return res.status(404).send("todo id is not found or id is incorrect.");
  } catch (error) {
    return res.status(500).send(error);
  }
};

const addTask = (req, res) => {
  try {
    const task = req?.body;

    if (!task || !task.title || !task.description)
      return res.status(400).send("task is invalid");

    tasks = [...tasks, { id: tasks.length + 1, status: false, ...task }];
    return res.status(200).send(true);
  } catch (error) {
    return res.status(500).send(error);
  }
};

const editTask = (req, res) => {
  try {
    const { id } = req?.params;
    const editDetails = req?.body;

    if (!id) return res.status(400).send("id is invalid");

    if (!Object.keys(editDetails)?.length)
      return res.status(400).send("edit details cant be empty");

    const taskIndex = tasks?.findIndex((task) => task.id == id);

    if (taskIndex != -1) {
      tasks[taskIndex] = { ...tasks[taskIndex], ...editDetails };
      return res.status(200).send(true);
    } else
      return res.status(404).send("todo id is not found or id is incorrect.");
  } catch (error) {
    return res.status(500).send(error);
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req?.params;
    if (!id) return res.status(400).send("id is invalid");

    const task = tasks?.find((task) => task.id == id);
    if (task) {
      tasks = tasks?.filter((task) => task.id != id);
      return res.status(200).send(true);
    } else
      return res.status(404).send("Id not found or it is already deleted.");
  } catch (error) {
    return res.status(500).send(error);
  }
};

const logRequestDetails = (req, res, next) => {
  const url = `${req.protocol}://${req.get("host")}${req.originalUrl}`; // Full URL

  console.log(`Request URL: ${url}`);
  console.log(`Request Method: ${req.method}`);

  next();
};

const handle404 = (req, res) => {
  return res.status(404).send("page not found");
};

module.exports = {
  getAllTasks,
  getSingleTaskyId,
  addTask,
  deleteTask,
  editTask,
  logRequestDetails,
  handle404,
};
