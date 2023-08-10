import styles from './PrimaryButton.module.css';

const PrimaryButton = ({buttonName, width, onClick}) => {
    return (
        <button onClick={onClick} style={{width: width}} className={styles.btn}>{buttonName}</button>
    );
}

export default PrimaryButton;