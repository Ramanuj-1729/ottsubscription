import { useNavigate } from 'react-router-dom';
import FormWrapper from '../../../components/FormWrapper/FormWrapper';
import styles from '../Auth.module.css';
import { useState } from 'react';
import axios from 'axios'

const Register = () => {
    const [data, setData] = useState({
        name: "",
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
            const { data: res } = await axios.post("https://stripe-api-wgv3.onrender.com/api/register", data);
            navigate('/auth/login');
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
            <FormWrapper formHeading="Create Account" buttonName="Sign Up" routeText="Already have an account?" routeLink="login" routeLinkText="Login" btnClick={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" placeholder='Enter Name' name='name' value={data.name} onChange={handleChange} />
                </div>

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
    );
}

export default Register;