import { useState } from 'react';

import Button from '../Button';
import styles from './Register.module.css';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repPass, setRepPass] = useState('');


    const onTypeHandler = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
        if (id === "repPass") {
            setRepPass(value);
        }


    }

    const submitHandler = () => {

        //POST REQUST
       

        //Clean the input
        setName(() => '');
        setEmail(() => '');
        setPassword(() => '');
        setRepPass(() => '');
    }




    return <div className={styles['register']}>
        <form className={styles['register-form']}>

            <>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={(e) => onTypeHandler(e)} />
            </>

            <>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => onTypeHandler(e)} />
            </>

            <>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={(e) => onTypeHandler(e)} />
            </>

            <>
                <label htmlFor="repPass">Reapeat Password</label>
                <input type="password" id="repPass" value={repPass} onChange={(e) => onTypeHandler(e)} />
            </>

            <Button onClick={submitHandler} type="button" name="Register" />
        </form>
    </div>
}

export default Register;