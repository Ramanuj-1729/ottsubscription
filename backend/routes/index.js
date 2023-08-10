import express from 'express';
const router = express.Router();
import { registerController, loginController, plansController } from '../controllers';
import auth from '../middlewares/auth';

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/plans', plansController.createPlans);
router.get('/plans', plansController.getAllPlans);
router.get('/monthly-plans', plansController.getMonthlyPlans);
router.get('/yearly-plans', plansController.getYearlyPlans);

export default router;