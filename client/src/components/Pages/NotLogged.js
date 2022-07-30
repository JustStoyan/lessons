import Videos from "../Videos/Videos";
import styles from "./NotLogged.module.css"

const NotLogged = () => {


    return <div className={styles.notLogged}>
        <h1>Not logged user</h1>
        <Videos />
    </div>
}

export default NotLogged;