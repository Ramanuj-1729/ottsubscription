import styles from './SelectedPlan.module.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SelectedPlan = () => {
    const { planData } = useSelector((state) => state.planSlice);
    const navigate = useNavigate();
    return (
        <div className={`${styles.planScreen} flex-center`}>
            <div className={`${styles.cardWrapper}`}>
                <div className={styles.headingWrapper}>
                    <h4>Current Plan Details</h4>
                    <span>Active</span>
                </div>

                <button className={styles.cancleBtn}>Cancel</button>

                <span className={styles.plan}>{planData.title}</span>
                <span className={styles.device}>Phone+Tablet</span>

                <div className={styles.price}>₹ {planData.price}<span>/{planData.duration === "Monthly" ? "mo" : "yr"}</span></div>

                <button onClick={()=>navigate('/subscription')} className={styles.mainBtn}>Change Plan</button>

                <div className={styles.warn}>
                    Your subscription has started on <span>Aug 12th, 2023</span> and will auto renew on <span>Sept 12th, 2023</span>.
                </div>
            </div>
        </div>
    );
}

export default SelectedPlan;