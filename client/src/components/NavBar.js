import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

const NavBar = () => {

    return <nav>
        <ul className={styles.ulist}>
            <Link to="/pricing">Pricing</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </ul>
    </nav>
}

export default NavBar;