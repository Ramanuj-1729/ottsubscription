const express = require('express');
const router = express.Router();
const { registerController, loginController, plansController } = require('../controllers');
const auth = '../middlewares/auth';
const paymentController = require('../controllers/paymentController');

router.post('/register', registerController.register);
router.post('/login', loginController.login);
router.post('/plans', plansController.createPlans);
router.get('/plans', plansController.getAllPlans);
router.get('/monthly-plans', plansController.getMonthlyPlans);
router.get('/yearly-plans', plansController.getYearlyPlans);
router.post('/payment', paymentController.createPaymentIntent);

module.exports = router;