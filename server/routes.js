const controller = require('./controllers');
module.exports = (app) => {
    app
        .get('/api/tasks', controller.getAllTask)
        .get('/api/tasks/:id', controller.getOneTask)
        .post('/api/tasks', controller.createTask)
        // .post('/api/all/tasks', controller.insertManyTask)
        .put('/api/tasks/:id', controller.updateTask)
        .delete('/api/tasks/:id', controller.deleteTask)
        // .delete('/api/tasks', controller.deleteAllTask)
        .all("*", controller.goToAngularRoute)
}