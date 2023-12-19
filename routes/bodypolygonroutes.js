import express from 'express';
const {Router} = express;
import bodypolygoncontroller from '../controller/bodypolygon_controller.js';
const router = Router();
router.get('/all', bodypolygoncontroller.getAll);
router.post('/new', bodypolygoncontroller.addBodypolygon);
router.post('/newfromjson', bodypolygoncontroller.addBodypolygonFromJson);
export default router;