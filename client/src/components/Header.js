import styles from './Header.module.css';
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

const Header = () => {
    return <header className={styles.header}>
        <Link to="/"><h1>LESSONS</h1></Link>
        <NavBar />
    </header>
}

export default Header;