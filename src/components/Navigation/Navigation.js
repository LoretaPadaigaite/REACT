import { Link } from "react-router-dom";
import './Navigation.css';

export const Navigation = () => {
    return (
        <div className='navigation'>
        <Link to='/' >Home</Link>
         <Link to='/about' >About</Link>
         <Link  to='/contacts' >Contacs</Link>
  
        </div>
    )
}