import Header from "../site-header/Header"
import bgimg from '../../../images/bg_2.jpg'
import BackgroundImage from "../BackgroundImage"
import profile from '../../../images/profile.png'
import Progress from './../others/progress';

const About =()=>{
    return(
        <>
            <Header/>
            <div className="body">
            <BackgroundImage 
                img = {bgimg}
            />
            <div className="container text-center">
                <p className="display-3 align-middle">About Me</p>
            </div>
            <div className="section bg-black text-white">
                <div className="container d-flex justify-content-between p-5">
                    <div className="w-50 text-center"> 
                        <p className="display-6">Samip Neupane</p>
                        <p>Hello, I'm Samip Neupane, a passionate Computer Engineer and Front-End Web Developer with a relentless curiosity for technology and a creative flair for designing captivating digital experiences. Welcome to my personal corner of the web!</p>
                    </div>
                    <div className="w-50 profile-img">
                        <img src="../../../images/profile.png" alt="profile" className="w-50 d-grid "/>
                    </div>                    

                </div> 
            </div>
            <div className="section text-black">
                <div className="container">
                <p className="display-5 text-center">Skills</p>
                <div>
                    <span>HTML</span><Progress progress ={90}/>
                    <span>CSS</span><Progress progress={80}/>
                    <span>Javascript</span><Progress progress={80}/>
                </div>
                                </div>
            </div>
            </div>

        </>

    )
}

export default About