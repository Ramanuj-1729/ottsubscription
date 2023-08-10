import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Subscription.module.css';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import MonthlyPlan from './MonthlyPlan/MonthlyPlan';
import YearlyPlan from './YearlyPlan/YearlyPlan';

const Subscription = () => {
    const planMap = {
        monthly: MonthlyPlan,
        yearly: YearlyPlan,
    }

    const [plan, setPlan] = useState('monthly');
    const Component = planMap[plan];

    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/payment');
    }
    return (
        <div className={`${styles.subscriptionScreen} flex-center`}>
            <h2>Choose the right plan for you</h2>
            <div className={`${styles.plansWrapper} flex-center`}>
                <div className={styles.featuresWrapper}>
                    <ul className={styles.features}>
                        <li className={styles.toggleBtn}>   
                            <button className={`${plan === 'monthly' ? styles.active : styles.btnStyle} `} onClick={() => setPlan('monthly')}>Monthly</button>
                            <button className={`${plan === 'yearly' ? styles.active : styles.btnStyle} `} onClick={() => setPlan('yearly')}>Yearly</button>
                        </li>
                        <li>Monthly price</li>
                        <li>Video quality</li>
                        <li>Resolution</li>
                        <li>Devices you can use to watch</li>
                    </ul>
                </div>
                <Component />
            </div>
            <PrimaryButton buttonName="Next" width="25%" onClick={handleNext} />
        </div>
    );
}

export default Subscription;