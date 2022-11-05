import { Link } from "react-router-dom";
import './Navigation.css';

export const Navigation = () => {
    const navigationStyle = {
        display: 'flex',
        gap: 10,
        justifyContent: 'center',
        padding: 20
    }
    return (
        <div style= {navigationStyle}>
        <Link to='/' >Home</Link>
         <Link to='/about' >About</Link>
         <Link  to='/contacts' >Contacs</Link>
  
        </div>
    )
}