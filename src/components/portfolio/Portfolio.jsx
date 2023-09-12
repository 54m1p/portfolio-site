import Footer from '../footer/Footer';
import Header from '../site-header/Header';

const Portfolio = ()=>{
    return(
        <div>
            <Header/>
            <div className='body'>
                <div className='section bg-black text-white'>
                    <div className='container'>
                        <p className='display-4 center-xy'>My Portfolio</p>
                    </div>
                </div>
                <div className='section pt-5'>
                    <div className='container'>
                        <div> </div>
                        <div>
                            <h2>About me</h2>
                            <p className='lead '><em>I'm Samip Neupane, a Frontend Developer known for creating user-friendly and visually appealing web interfaces. With a strong focus on user experience, I excel in crafting responsive layouts, optimizing website performance, and adding captivating animations. I'm dedicated to pushing the boundaries of frontend development and consistently delivering outstanding web experiences.</em></p>
                        </div>
                        <div>
                            <h2>My projects</h2>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Portfolio;