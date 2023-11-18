import React, { useState } from 'react';
import styles from './PaymentElement.module.css';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from "axios";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PaymentElement = () => {
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();
    const { planData } = useSelector((state) => state.planSlice);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(false);
        } else {
            try {
                const { data } = await axios.post('https://stripe-api-wgv3.onrender.com/api/payment', {
                    amount: planData.price * 100,
                });

                const { clientSecret } = data;

                const result = await stripe.confirmCardPayment(clientSecret, {
                    payment_method: paymentMethod.id,
                });

                if (result.error) {
                    setPaymentError(result.error.message);
                    setPaymentSuccess(false);
                } else {
                    setPaymentSuccess(true);
                }
                setTimeout(() => {
                    navigate('/selected-plan');
                }, 2000);
            } catch (error) {
                console.error(error);
                setPaymentError('An error occurred while processing your payment.');
                setPaymentSuccess(false);
            }
        }
    }
    return (
        <>
            <div>
                <form>
                    <CardElement className={styles.cardElement} />
                    <PrimaryButton onClick={handleSubmit} width="50%" buttonName="Next" type="submit" disabled={!stripe} />
                </form>
                {paymentError && <p style={{ color: 'red' }}>{paymentError}</p>}
                {paymentSuccess && <p style={{ color: 'green' }}>Payment successful!</p>}
            </div>

        </>
    )
}

export default PaymentElement;
