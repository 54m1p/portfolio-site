import '../../css/footer.css'
import { Link } from 'react-router-dom'
import Prefooter from './Prefooter'

const Footer =()=>{
    return(
        
           <div className=" bg-black"> 
           <Prefooter/>
           <div className='border-top border-danger'>
           <div className='container text- pt-3'>
                <div className="d-flex justify-content-center align-center">
                    <div className='text-light mx-auto copyright'> 
                        <p className='text-center'>Copyright © 2023 Samip Neupane</p>
                    </div>
                </div>
                </div>
                </div>
           </div> 
    )
}

export default Footer