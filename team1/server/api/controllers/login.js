const LoginInfo = require('../models/login');

const getLoginInfo = async (res, res, next) => {
    try {
        const loginInfo = await LoginInfo.find();

        res.status(200).json(loginInfo);
    } catch (err) {
        next(err);
    }
}

const createLoginInfo = async (req, res, next) => {
    const body = req.body;
    const newLogin = LoginInfo(body);
    
    try {
        await newLogin.save();
        
        res.status(201).json(newLogin);
    } catch (err) {
        next(err);
    }
}

const changeLoginInfo = async (req, res, next) => {
    
}