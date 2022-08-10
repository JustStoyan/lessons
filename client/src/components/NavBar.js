import { Link } from "react-router-dom";
import styles from './NavBar.module.css';
import { useSelector } from 'react-redux';


const NavBar = () => {
    const logged = useSelector((state) => state);

    return <nav>
        <ul className={styles.ulist}>
            {logged.isLogged ?
                <>

                    <Link to="/">Videos</Link>
                    <Link to="/settings">Settings</Link>
                    <div>
                        <p>{logged.userEmail}</p>
                    </div>


                </>
                : <>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            }
        </ul>
    </nav>
}

export default NavBar;