import express from 'express';
const { Router } = express;
import entityrepairstatuscontroller from '../controller/entityrepairstatus_controller.js';

const router = Router();

router.get('/all', entityrepairstatuscontroller.getAll);
router.post('/new', entityrepairstatuscontroller.addEntityRepairStatus);
router.get('/:id', entityrepairstatuscontroller.getEntityRepairStatusById);
router.put('/:id/update', entityrepairstatuscontroller.updateEntityRepairStatusById);
router.delete('/:id/delete', entityrepairstatuscontroller.deleteEntityRepairStatusById);

export default router;