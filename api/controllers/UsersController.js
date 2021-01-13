const User = require('../models/User');
class UserController {
    index(req, res, next){
        return res.render('main');
    }
    registerView(req, res, next){
        return res.render('mainRegister');
    }
    signIn(req, res, next) {
        User.findOne({username: req.body.username, password: req.body.password})
        .then(user=>{
            if(user){
                return res.redirect('/list');
            }
            return res.json({message: 'Login fail!'});
            
        })
    }
    register(req, res, next) {
        const formData = req.body;
        const user = new User(formData);
        console.log(formData);
        user.save()
            .then(()=> res.redirect('/list'))
            .catch(error => {

            });
    }
    list(req, res, next) {
        User.find({},{username:1})
        .then(user => {
            if(user){
                return res.json(user);
            }
        })
    }
    update(req, res, next) {
        const formData = req.body
        User.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/list'))
            .catch(next);
    }
    edit(req, res, next){
        User.findById(req.params.id)
            .then((user) => {
                res.json(user);
            })
            .catch(next);
    }
    destroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.json({message: 'Delete success!'}))
            .catch(next);
    }
}
module.exports = new UserController;