import styles from './PrimaryButton.module.css';

const PrimaryButton = ({buttonName, width}) => {
    return (
        <button style={{width: width}} className={styles.btn}>{buttonName}</button>
    );
}

export default PrimaryButton;