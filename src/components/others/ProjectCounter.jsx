import {BiSolidBriefcase} from 'react-icons/bi'
import{PiSmileyBold} from 'react-icons/pi'
import{BsFillCupHotFill} from 'react-icons/bs'
import Counter from './Counter';

const ProjectCounter = ()=>{
    return(
        <div className="d-flex justify-content- container">
            <div>
                <BiSolidBriefcase/>
                <Counter
                    count = {10}
                />
                <p>Projects Done</p>

            </div>
            <div>
                <PiSmileyBold/>
                <Counter
                    count = {10}
                />
                <p>Happy Clients</p>

            </div>
            <div>
                <BsFillCupHotFill/>
                <Counter
                    count = {500}
                />
                <p>Cups Of Coffee</p>

            </div>
        </div>
    )
}