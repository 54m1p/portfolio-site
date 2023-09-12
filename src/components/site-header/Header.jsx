import { Link } from 'react-router-dom';
import logo from '../../../images/SNLogo.png';
import navMenu from '../../../json/navMenu.json'
import './header.css'
import Burger from './Burger';
import { useState } from 'react';

const Header = () => {
    const [showNav, setShowNav] = useState(false)
    const toggle = (isHam) => {
        setShowNav(isHam)
    }
    return (
        <>
            <div className="site-header bg-black text-white pt-4">
                <div className='d-flex justify-content-between container'>
                    <div className="logo ">
                        <Link className='link' to="/" ><img src={logo} alt="" /></Link>
                    </div>
                    <div className='burger ml-5'>
                        <Burger
                            toggle={toggle}
                        />
                        {showNav && <ul className='nav-bar d-grid'>
                            {navMenu.menu.map((menu) => (
                                <>
                                    <li><Link className='link' to={menu.link}>{menu.name}</Link></li>
                                </>
                            ))}
                        </ul>}
                    </div>
                    <div className='nav-div'>
                        <ul className='nav-bar d-flex justify-content-around align-items-center '>
                            {navMenu.menu.map((menu) => (
                                <>
                                    <li><Link className='link' to={menu.link}>{menu.name}</Link></li>
                                </>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;