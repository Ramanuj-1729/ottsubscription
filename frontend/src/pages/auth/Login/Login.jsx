import { useNavigate } from 'react-router-dom';
import styles from '../Auth.module.css';
import FormWrapper from '../../../components/FormWrapper/FormWrapper';
import axios from 'axios';
import { useState } from 'react';


const Login = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: res } = await axios.post("/login", data);
            navigate('/subscription');
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    }
    return (
        <div className={`${styles.wrapper} flex-center`}>
            <FormWrapper formHeading="Login to your account" buttonName="Login" routeText="New to MyApp?" routeLink="register" routeLinkText="Sign Up" btnClick={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" placeholder='Enter Email' name='email' value={data.email} onChange={handleChange} />
                </div>

                <div className={styles.inputWrapper}>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" placeholder='Enter Password' name='password' value={data.password} onChange={handleChange} />
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