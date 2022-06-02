const {User} = require('../models/users');

const getAllUsers = (req, res) => {
    User.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
}

const createUser = async (req, res) => {
    const usr = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username
    });
    usr.save((err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'User Added Successfully', addUser: data})
        } else {
           console.log(err);
        }
    });
}

const getUser = (req, res) => {
    User.findById(req.params.id, (err, data) => {
        if(!err) {
            res.send(data);
        } else {
           console.log(err);
        }
    });
}
//Update
const updateUser = async (req, res) => {

    const usr = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username
    };
    User.findByIdAndUpdate(req.params.id, { $set: usr }, { new: true }, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'User Updated Successfully', updateUser: data})
        } else {
            console.log(err);
        }
    });
}

const deleteUser = async (req, res) => {

    User.findByIdAndRemove(req.params.id, (err, data) => {
        if(!err) {
            // res.send(data);
            res.status(200).json({code: 200, message: 'User deleted', deleteUser: data})
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser
}