import styles from './Payment.module.css';
import { useSelector } from 'react-redux';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentElement from './PaymentElement/PaymentElement';

const stripePromise = loadStripe('pk_test_51NdqtISEDKkoqmSTm8m11oENLJBcHTeW2J19LpumcOsP88Jl4uPAEA3rB7AeWi9RuJ4g85Apdv3dwoJc4fjvph3j00J6NUZ0so');

const Payment = () => {
    const { planData } = useSelector((state) => state.planSlice);

    return (
        <div className={`${styles.paymentScreen} flex-center`}>
            <div className={`${styles.cardWrapper}`}>
                <div className={styles.cardInfo}>
                    <h3>Complete Payment</h3>
                    <p>Enter your credit or debit card details below</p>
                    <Elements stripe={stripePromise}>
                        <PaymentElement />
                    </Elements>
                </div>
                <div className={`${styles.orderSummary} flex-center`}>
                    <h4>Order Summary</h4>
                    <div>
                        <span>Plan Name</span>
                        <span>{planData.title}</span>
                    </div>

                    <div>
                        <span>Billing Cycle</span>
                        <span>{planData.duration}</span>
                    </div>

                    <div>
                        <span>Plan Price</span>
                        <span>₹{planData.price}/{planData.duration === "Monthly" ? "mo" : "yr"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;