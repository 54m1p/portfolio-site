import {BiSolidBriefcase} from 'react-icons/bi'
import{PiSmileyBold} from 'react-icons/pi'
import{BsFillCupHotFill} from 'react-icons/bs'
import{ useSpring, animated } from 'react-spring'
import '../../css/home.css'

const ProjectCounter = ()=>{
    const  forCount = (count) =>{
        const { num } = useSpring({
            from: {num : 0},
            num: count,
            delay: 200,
            config:{ mass:1, tension: 20, friction: 10}
        })
        return <animated.div>{num.to((count)=> count.toFixed(0))}</animated.div>
    }
    return(
        <div className="d-flex container text-center counter-div">
            <div className='counter'>
                <BiSolidBriefcase className='count-icon'/>
                {forCount(100)}
                <p>Projects Done</p>

            </div>
            <div className='counter'>
                <PiSmileyBold className='count-icon'/>
                {forCount(100)}
                <p>Happy Clients</p>

            </div>
            <div className='counter'>
                <BsFillCupHotFill className='count-icon'/>
                {forCount(550)}    
                <p>Cups Of Coffee</p>

            </div>
        </div>
    )
}

export default ProjectCounter;