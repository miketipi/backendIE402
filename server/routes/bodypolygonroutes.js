import express from 'express';
const {Router} = express;
import bodypolygoncontroller from '../controller/bodypolygon_controller.js';
const router = Router();
router.get('/all', bodypolygoncontroller.getAll.bind(bodypolygoncontroller));
router.post('/new', bodypolygoncontroller.addBodypolygon.bind(bodypolygoncontroller));
router.post('/newfromjson', bodypolygoncontroller.addBodypolygonFromJson.bind(bodypolygoncontroller));
router.post('/delete/:id', bodypolygoncontroller.deletebodypolygonbyid.bind(bodypolygoncontroller));
export default router;