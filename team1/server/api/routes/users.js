const express = require('express');
const router = express.Router();

const { getAllUsers, createUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/users');

router.get('/users', getAllUsers);
router.post('/users', createUsers);
router.get('/user/:id', getUser);
router.post('/', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

module.exports = router;