import bgimg from "../../../images/bg_2.jpg";
import BackgroundImage from "./../BackgroundImage";
import Header from "./../site-header/Header";
import "../../css/home.css";
import { Button } from "bootstrap";
import Footer from "../footer/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <div className="body text-black">
                <BackgroundImage 
                img={bgimg}
                 />
                <div className=" home-about container">
                    <div className="text-left m-5 mw-5">
                        <p className="display-4 text-center" ><span className="display-3">Hi,</span> I am Samip. I am a Web Developer</p>
                    </div>
                </div>
                <div className="section bg-black text-white ">
                <div className="container text-center ">
                    <h2 className="display-3 m-5 ">What I do.</h2>
                    <p className="display-6 m-5">
                        I help businesses take better design decisions for their creative
                        products
                    </p>
                </div>
                </div>
                <div className="section">
                    <div className="container">
                        <h2 className="m-5 display-5 text-center text-black">My professional design services</h2>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Home;
