const Users = require('../models/users');

const getAllUsers = (req, res, next) => {
    Users.find({})
        .then((data) => {
            console.log(data);``
        })
        .catch(next)
   
    // try {
    //     res.send(users);
    // } catch (err) {
    //     res.status(500).json({message: "Get All Users Failed"});
    //     // next(err);
    // }
}

const createUsers = async (req, res, next) => {
    const body = req.body;
    const newUser = Users(body);

    try {
        await newUser.save();
        console.log('User saved by the bell');
        res.status(201).json(newUser);
        
    } catch (err) {
        res.status(404).json({message: "Create Users Failed"});
        next(err);
    }
}

const getUser = async (req, res, next) => {
    const user = await Users.findById(req.body.id);
    try {
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message: "User Not Found"});
    }
}

const createUser = async (req, res, next) => {
    const body = req.body;
    const newUser = Users(body);

    try {
        await newUser.save();

        res.status(201).json(newUser);
        
    } catch (err) {
        // res.status(404).json({message: "Create User Failed"});
        next(err);
    }
}

const updateUser = async (req, res, next) => {

    try {
        await Users.findByIdAndUpdate(req.params.id, req.body);
        await Users.save();

        res.status(201).json(user);
        
    } catch (err) {
        res.status(404).json({message: "User Not Found"});
        next(err);
    }
}

const deleteUser = async (req, res, next) => {

    try {
        const user = await Users.findByIdAndDelete(req.params.id);
        if(!user) res.status(404).json({message: "User Not Found"});
        res.status(201).json(user);
        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getAllUsers,
    createUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}