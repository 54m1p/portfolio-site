import logo from '../../../images/SNLogo.png'
import { Link } from 'react-router-dom'
import navMenu from '../../../json/navMenu.json'
import Socials from './Socials'

const Prefooter = ()=>{
    return(
        <div className="bg-black text-white">
            <div className="container p-5">
                <div className='d-flex align-items-center justify-content-between mb-5'>
                    <div>
                        <Link className='link' to="/"><img src={logo} alt="logo" /></Link>
                    </div>
                    <div>
                        <h5 className='text-danger'>Contact Info</h5>
                        <div>
                            <span className='d-block'>Kathmandu, Nepal</span>
                            <span className='d-block'>+977-9860866680</span>
                            <span className='d-block'><Link className="link" to="mailto:samipneupane.18@gmail.com" >samipneupane.18@gmail.com</Link></span>
                        </div>
                    </div>
                    <div>
                        <h5 className='text-danger'>Links</h5>
                        {navMenu.menu.map((menu)=>(
                            <>
                                
                                    <span className='d-block'><Link className='link' to={menu.link}>{menu.name}</Link></span>
                                
                            </>
                        ))}
                    </div>
                </div>  
                <div className='d-flex justify-content-center'>
                    <Socials/>              
                </div>
            </div>
            
        </div>
    )
}

export default Prefooter