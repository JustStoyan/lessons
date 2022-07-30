import { Link } from "react-router-dom";

const NavBar = () => {

    return <>
        <ul>
            <Link to="/pricing">Pricing</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </ul>
    </>
}

export default NavBar;