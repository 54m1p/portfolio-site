import {BsArrowRight} from 'react-icons/bs'
const Service = (service)=>{
    return(
        <>
            <h5>{service.name}</h5>
            <p>{service.info}</p>
            <button className='learn-more-btn'> <p><strong>Learn More </strong><BsArrowRight/></p></button>
        </>
    )
}

export default Service;