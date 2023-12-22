import express from 'express';
const {Router} = express;
import meshobjectcontroller from '../controller/meshobject_controller.js';
const router = Router();
router.get('/all', meshobjectcontroller.getAll);
router.post('/new', meshobjectcontroller.addMesh);
export default router;