import express from 'express';
const { Router } = express;
import userController from "../controller/userController.js"
const router = Router();
router.post('/users', userController.createUser.bind(userController));
router.get('/users', userController.getAllUsers.bind(userController));
router.get('/users/:id', userController.getUserById.bind(userController));
router.put('/users/:id', userController.updateUserById.bind(userController));
router.delete('/users/:id', userController.deleteUserById.bind(userController));

export default router;