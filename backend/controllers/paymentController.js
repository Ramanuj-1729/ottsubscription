// import { STRIPE_SECRET_KEY } from '../../config';
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const paymentController = {
    async createPaymentIntent(req, res, next) {
        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount,
                currency: 'INR',
            });
            res.json({ clientSecret: paymentIntent.client_secret });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while creating payment intent.' });
        }
    }
}
export default paymentController;