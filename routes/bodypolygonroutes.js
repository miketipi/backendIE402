import express from 'express';
const {Router} = express;
import bodypolygoncontroller from '../controller/bodypolygon_controller.js';
const router = Router();
router.get('/all', bodypolygoncontroller.getAll);
router.post('/new', bodypolygoncontroller.addBodypolygon);
export default router;