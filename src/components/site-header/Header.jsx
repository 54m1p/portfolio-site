import { Link } from 'react-router-dom';
import logo from '../../../images/SNLogo.png';
import navMenu from '../../../json/navMenu.json'
import './header.css'
const Header = ()=>{
    return(
        <>
        <div className="site-header bg-black text-white pt-4">
            <div className='d-flex justify-content-between container'>
                <div className="logo ">
                    <Link className='link' to="/" ><img src={logo} alt="" /></Link>
                </div>
                    <ul className='nav-bar d-flex justify-content-around align-items-center '>
                        {navMenu.menu.map((menu)=>(
                            <>
                                <li><Link className='link' to={menu.link}>{menu.name}</Link></li>
                            </>
                        ))}
                    </ul>
            </div>
        </div>
        </>
    )
}

export default Header;