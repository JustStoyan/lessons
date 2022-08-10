import Button from '../Button';
import styles from './Login.module.css';
import { toast } from 'react-toastify';
import { useRef } from 'react';

//Firebase
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from '../../Utils/firebase';

//Redux store
import { useDispatch } from 'react-redux';
import { actions } from '../../store';

const Login = () => {
    const dispatch = useDispatch();
    const email = useRef('');
    const password = useRef('');


    const loggingHandler = () => {


        const auth = getAuth(firebaseApp);
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {

                const user = userCredential.user;


                const storeState = () => {
                    dispatch(actions.logged([user.uid, user.email]));
                }
                storeState();

            })
            .catch((error) => {
                const errorCode = error.code;


                return toast.error(errorCode, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });



    }


    return <div className={styles['login']}>
        <form className={styles['login-form']}>


            <>
                <label htmlFor="email">Email</label>
                <input type="email" ref={email} id="name" />
            </>

            <>
                <label htmlFor="password">Password</label>
                <input type="password" ref={password} id="password" />
            </>

            <Button onClick={loggingHandler} type="button" name="Login" />
        </form>

    </div>
}

export default Login;