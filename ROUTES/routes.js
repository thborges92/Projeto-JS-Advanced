const routes = require('express').Router()
const taskController = require('../CONTROLLER/taskController')

routes.get("/", taskController.getAllTasks)
routes.get("/getById/:id/:method", taskController.getById)
routes.get("/deleteOne/:id", taskController.deleteTask)
routes.post("/create", taskController.createTask)
routes.post("/updateOne/:id", taskController.updateTask)

module.exports = routes