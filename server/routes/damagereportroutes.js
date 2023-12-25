import express from 'express';
const { Router } = express;
import damageReportController from '../controller/damagereport_controller.js';

const router = Router();

router.get('/all', damageReportController.getAll);

router.post('/new', damageReportController.addDamageReport);

router.put('/update/:reportId', damageReportController.updateDamageReport);

router.delete('/delete/:reportId', damageReportController.deleteDamageReport);

router.get('/byID/:reportId', damageReportController.getbyID);

export default router;
