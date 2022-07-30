import Videos from "../Videos/Videos";

import styles from "./NotLogged.module.css";


const NotLogged = () => {


    return <div className={styles.notLogged}>

        <Videos />
        <h1>not logged user</h1>
    </div>
}

export default NotLogged;