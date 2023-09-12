import Header from "../site-header/Header"
// import bgimg from '../../../images/bg_2.jpg'
//   import BackgroundImage from "../BackgroundImage"
// import abtimg from '../../../images/AboutMe1.jpg'
import Footer from "../footer/Footer";
import skills from '../../../json/skills.json'
import experiences from '../../../json/experience.json'
import Progress from "../others/progress";
import { GoDot, GoDotFill } from 'react-icons/go';

const About = () => {
    console.log(skills.skills, 'skills from abt page')
    return (
        <>
            <Header />
            <div className="body">
                {/* <BackgroundImage 
                img = {bgimg}
            /> */}
                <div className="section bg-black text-white">
                    <div className="container center-xy">
                        <p className="display-4">About Me</p>
                    </div>
                </div>
                <div className="section bg-white text-black">
                    <div className="container d-flex justify-content-between p-5">
                        <div className="w-50">
                            <div>
                                <p className="display-6 text-center text-secondary  ">Samip Neupane</p>
                                <p className="lead">Hello, I'm Samip Neupane, a passionate Computer Engineer and Front-End Web Developer with a relentless curiosity for technology and a creative flair for designing captivating digital experiences. Welcome to my personal corner of the web!</p>
                                <div>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="w-50 profile-img">
                            <img src="../../../images/profile.png" alt="profile" className="w-50 mx-auto d-grid " />
                        </div>

                    </div>
                </div>
                <div className="section pt-5 mt-3">
                    <div className="container mt-4 d-flex justify-content-around">
                        <div className="w-50">
                            <p className="display-6 text-center">Skills</p>
                            <div className="d-flex justify-content-center align-items-center">
                                <div className="w-100">
                                    {skills.skills.map((skill) => (
                                        <>
                                            <span>{skill.name}</span>
                                            <Progress
                                                progress={skill.percentage}
                                            />
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className="display-6 text-center">Experiences</p>
                            <div>
                                {experiences.experience.map((experience) => (
                                    <ul>
                                        <li>
                                            <GoDotFill /> <strong>({experience.duration})</strong><span> {experience.name} </span>{experience.company && <span> at {experience.company}</span>}
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="section">
                    <div className="container d-flex justify-content-around">
                        <div>
                            <p className="display-6 ">Education</p>
                            <div>
                                <span className="d-block"><GoDotFill />  2017-2022</span>
                                <span className="d-block">Everest Engineering College</span>
                                <span className="d-block">Bachelor's in Computer Enginnering</span>
                            </div>
                        </div>
                        <div>
                            <p className="display-6">Projects</p>
                            <div className="d-grid">
                                <span><GoDotFill/>Media Player</span>    
                                <span><GoDotFill/>Online Vehicle Tax Payment</span>
                                <span><GoDotFill/>Smart Agriculture Android App</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About;   