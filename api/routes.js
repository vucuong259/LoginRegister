const express = require('express');
const router = express.Router();
const usersController = require('./controllers/UsersController');
function routes(app){
    router.get('/', usersController.index);
    router.post('/signIn', usersController.signIn);
    router.post('/register', usersController.register);
    router.get('/register', usersController.registerView);
    router.get('/list', usersController.list);
    router.get('/edit/:id', usersController.edit);
    router.put('/update/:id', usersController.update);
    router.delete('/delete/:id', usersController.destroy);

    return app.use('/', router);
}

module.exports = routes;