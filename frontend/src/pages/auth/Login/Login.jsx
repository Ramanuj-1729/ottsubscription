import styles from '../Auth.module.css';
import FormWrapper from '../../../components/FormWrapper/FormWrapper';

const Login = () => {
    return (
        <div className={`${styles.wrapper} flex-center`}>
            <FormWrapper formHeading="Login to your account" buttonName="Login" routeText="New to MyApp?" routeLink="register" routeLinkText="Sign Up">
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
    )
}

export default Login