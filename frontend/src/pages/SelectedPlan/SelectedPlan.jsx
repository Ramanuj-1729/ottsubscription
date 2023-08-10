import styles from './SelectedPlan.module.css';

const SelectedPlan = () => {
    return (
        <div className={`${styles.planScreen} flex-center`}>
            <div className={`${styles.cardWrapper}`}>
                <div className={styles.headingWrapper}>
                    <h4>Current Plan Details</h4>
                    <span>Active</span>
                </div>

                <button className={styles.cancleBtn}>Cancel</button>

                <span className={styles.plan}>Basic</span>
                <span className={styles.device}>Phone+Tablet</span>

                <div className={styles.price}>₹ 2,000<span>/yr</span></div>

                <button className={styles.mainBtn}>Change Plan</button>

                <div className={styles.warn}>
                    Your subscription has started on <span>Jul 11th, 2022</span> and will auto renew on <span>Jul 12th, 2023</span>.
                </div>
            </div>
        </div>
    );
}

export default SelectedPlan;