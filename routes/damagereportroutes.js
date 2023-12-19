import express from 'express';
const { Router } = express;
import damageReportController from '../controller/damagereport_controller.js';

const router = Router();

router.get('/all', damageReportController.getAll);

router.post('/new', damageReportController.addDamageReport);

router.put('/:reportId/update', damageReportController.updateDamageReport);

router.delete('/:reportId/delete', damageReportController.deleteDamageReport);

export default router;
