import FormWrapper from '../../../components/FormWrapper/FormWrapper';
import styles from '../Auth.module.css';

const Register = () => {
    return (
        <div className={`${styles.wrapper} flex-center`}>
            <FormWrapper formHeading="Create Account" buttonName="Sign Up" routeText="Already have an account?" routeLink="login" routeLinkText="Login">
                <div className={styles.inputWrapper}>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" placeholder='Enter Name' />
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" placeholder='Enter Email' />
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" placeholder='Enter Password' />
                </div>

                <div className={`${styles.rememberWrapper} flex-center`}>
                    <input type="checkbox" name="" id="remember-check" />
                    <label htmlFor='remember-check'>Remember Me</label>
                </div>
            </FormWrapper>
        </div>
    );
}

export default Register;