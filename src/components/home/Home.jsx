import bgimg from "../../../images/bg.jpg";
import Header from "./../site-header/Header";
import '../../css/home.css'
import Footer from "../footer/Footer";
import services from '../../../json/services.json';
import Service from "../others/Service";
import ReactSpin from "./ReactSpin";
import {FaThumbsUp} from 'react-icons/fa'
import ProjectCounter from "../others/ProjectCounter";

const Home = () => {
    return (
        <>
            <Header/> 
            <div className="body">
                {/* <BackgroundImage 
                img={bgimg}
                 /> */}
                <div className=" section bg-black text-white">
                    <div className="container center-xy">
                        <div>
                        <div className="display-4">
                            <span className="display-2">Hi,</span>
                            <span> I am Samip. I am a </span><span className="react-icon"><ReactSpin/></span> Developer</div>
                        </div>
                    </div>
                </div>
                <div className="section pt-5">
                <div className="container ">
                    <h2 className="display-5 ">What I do.</h2>
                    <p className="lead">I create intuitive, dynamic and responsive user experiences</p>
                    <div>
                        <div className="services-home">
                            {services.services.map((service)=>(
                                <div className="text-center service">
                                    <Service 
                                        name ={service.name}
                                        info = {service.info}
                                    />
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
                <div className=" ">
                    <div className="">
                                <ProjectCounter/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
