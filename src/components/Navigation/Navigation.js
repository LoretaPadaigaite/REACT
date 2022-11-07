import { Link } from "react-router-dom";
import './Navigation.css';
import { useNavigate } from "react-router-dom";

const navigationStyle = {
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    padding: 20
}

export const Navigation = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    }

    return (
        <div style={navigationStyle}>
            {/* {location.pathname !== '/' && <Link to="/">Home</Link>} */}
            <Link to="/">Home</Link>
            <Link to="/contacts">Contacts</Link>
            <Link to="/about">About</Link>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}