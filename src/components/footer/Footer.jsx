import {AiFillLinkedin, AiFillGithub, AiOutlineInstagram} from 'react-icons/Ai'
import '../../css/footer.css'
import { Link } from 'react-router-dom'

const Footer =()=>{
    return(
        
           <div className=" bg-black"> 
           <div className='container pt-3'>
                <div className="d-flex justify-content-around align-center">
                    <div className='text-light flex-grow-1 w-75 copyright'> 
                        <p>Copyright © 2023 Samip Neupane</p>
                    </div>
                    <div className="d-flex justify-content-around align-center text-light px-5 w-25">
                       <Link to="https://www.linkedin.com/in/samip-neupane-058b87141/" target='_blank' className='link'><AiFillLinkedin/></Link> 
                        <Link to="https://github.com/54m1p" target='_blank' className='link'><AiFillGithub/></Link>
                        <Link to="https://www.instagram.com/samipneupane/" target='_blank' className='link'><AiOutlineInstagram/></Link>
                    </div>
                </div>
                </div>
           </div> 
    )
}

export default Footer