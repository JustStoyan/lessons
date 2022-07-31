import Button from '../Button';
import styles from './Login.module.css';

const Login = () => {
    return <div className={styles['login']}>
        <form className={styles['login-form']}>


            <>
                <label htmlFor="email">Email</label>
                <input type="email" id="name" />
            </>

            <>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </>

            <Button type="button" name="Login" />
        </form>
        
    </div>
}

export default Login;