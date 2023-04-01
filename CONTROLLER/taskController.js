const Task = require('../MODELS/task')

const getAllTasks = async (req, res) => {

    try {

        const taskList = await Task.find()
        return res.render("index", { taskList, task: null, taskDelete: null })

    } catch (error) {

        res.status(500).send({ error: error.message })

    }

}

const createTask = async (req, res) => {

    const task = req.body

    if (!task.task) {
        return res.redirect("/")
    }

    try {

        await Task.create(task)
        console.log("Tarefa criada com sucesso.")
        return res.redirect("/")

    } catch (error) {

        res.status(500).send({ error: error.message })

    }

}

const getById = async (req, res) => {

    try {

        const taskList = await Task.find()
        if (req.params.method == "update") {

            const task = await Task.findOne({ _id: req.params.id })
            return res.render("index", { task, taskList, taskDelete: null })

        } else {

            const taskDelete = await Task.findOne({ _id: req.params.id })
            res.render("index", { task: null, taskDelete, taskList })

        }

    } catch (error) {

        res.status(500).send({ error: error.message })

    }

}

const updateTask = async (req, res) => {

    try {

        const task = req.body
        await Task.updateOne( {_id: req.params.id}, task)
        console.log("Tarefa atualizada com sucesso.")
        return res.redirect("/")

    } catch (error) {

        res.status(500).send({ error: error.message })

    }

}

const deleteTask = async (req, res) => {

    try {

        await Task.deleteOne( {_id: req.params.id} )
        console.log("Tarefa deletada com sucesso.")
        return res.redirect("/")

    } catch (error) {

        res.status(500).send({ error: error.message })

    }

}

module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    getById,
    deleteTask,
}