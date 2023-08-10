import styles from './Payment.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';

const Payment = () => {
    return (
        <div className={`${styles.paymentScreen} flex-center`}>
            <div className={`${styles.cardWrapper}`}>
                <div className={styles.cardInfo}>
                    <h3>Complete Payment</h3>
                    <p>Enter your credit or debit card details below</p>
                    <div className={`${styles.inputWrapper} flex-center`}>
                        <div>
                            <i className="fa-solid fa-credit-card"></i>
                            <input className={styles.cardNumberInput} type="text" name="" id="cardNumber" placeholder='Card Number' required />
                        </div>

                        <div className={`${styles.expiryDateInput} flex-center`}>
                            <input type="text" id="expirationMonth" name="expirationMonth" pattern="\d{2}" maxlength="2" placeholder="MM" required />
                            <span>/</span>
                            <input type="text" id="expirationYear" name="expirationYear" pattern="\d{2}" maxlength="2" placeholder="YY" required />
                        </div>

                        <input className={styles.cvvInput} type="text" placeholder='CVV' required />
                    </div>
                    <PrimaryButton buttonName="Confirm Payment" width="45%" />
                </div>
                <div className={`${styles.orderSummary} flex-center`}>
                    <h4>Order Summary</h4>
                    <div>
                        <span>Plan Name</span>
                        <span>Basic</span>
                    </div>

                    <div>
                        <span>Billing Cycle</span>
                        <span>Monthly</span>
                    </div>

                    <div>
                        <span>Plan Price</span>
                        <span>₹200/mo</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;