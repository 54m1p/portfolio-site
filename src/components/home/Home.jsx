import bgimg from "../../../images/bg.jpg";
import Header from "./../site-header/Header";
import "../../css/home.css";
import { Button } from "bootstrap";
import Footer from "../footer/Footer";
import services from '../../../json/services.json';
import Service from "../others/Service";
import { useState } from "react";
import BackgroundImage from "../BackgroundImage";

const Home = () => {
    return (
        <>
            <Header/> 
            <div className="body ">
                {/* <BackgroundImage 
                img={bgimg}
                 /> */}
                <div className=" section bg-black text-white">
                    <div className="container center-xy">
                        <div>
                        <p className="display-4" ><span className="display-2">Hi,</span> I am Samip. I am a Web Developer</p>
                        </div>
                    </div>
                </div>
                <div className="section pt-5">
                <div className="container ">
                    <h2 className="display-5 ">What I do.</h2>
                    <p className="lead">I create intuitive, dynamic and responsive user experiences</p>
                    <div>
                        <div className="services d-flex justify-content-between">
                            {services.services.map((service)=>(
                                <>
                                    <Service
                                        name ={service.name}
                                        info = {service.info}
                                    />
                                    
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                </div>
                {/* <div className="section text-black">
                    <div className="container">
                        <h2 className="m-5 display-5 text-center text-black">My professional design services</h2>
                    </div>
                </div> */}
            </div>
            <Footer/>
        </>
    );
};

export default Home;
