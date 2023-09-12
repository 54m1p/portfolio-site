import {BsArrowRight} from 'react-icons/bs'
const Service = (service)=>{
    console.log(service.info,'service from service page')
    return(
        <div style={{width:"18rem"}} >
            <h5>{service.name}</h5>
            <p style={{width:"15rem"}}>{service.info}</p>
            <button className='learn-more-btn'> <p><strong>Learn More </strong><BsArrowRight/></p></button>
        </div>
    )
}

export default Service;