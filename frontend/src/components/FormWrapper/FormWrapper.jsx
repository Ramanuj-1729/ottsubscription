import { NavLink } from 'react-router-dom';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import styles from './FormWrapper.module.css'

const FormWrapper = ({ formHeading, buttonName, routeText, routeLinkText, routeLink, children }) => {
    return (
        <form>
            <div className={`${styles.wrapper} flex-center`}>
                <h3 className={styles.heading}>{formHeading}</h3>
                {children}
                <PrimaryButton buttonName={buttonName} width="100%" />
                <div className={`${styles.routeWrapper} flex-center`}>
                    <p>{routeText}</p>
                    <NavLink to={`/auth/${routeLink}`}>{routeLinkText}</NavLink>
                </div>
            </div>
        </form>
    );
}

export default FormWrapper;