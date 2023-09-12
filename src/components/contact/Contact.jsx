import Footer from "../footer/Footer"
import Header from "../site-header/Header"
import ContactForm from "./ContactForm"
// import cellimg from '../../../images/contact.png'

const Contact = ()=>{
    return(
        <div>
            <Header/>
            <div className="section bg-black text-white">
                <div className="container center-xy">
                    <div>
                    <p className="display-4">Contact me</p>
                    </div>
                </div>
            </div> 
            <div className="m-3">
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    )
}
 export default Contact 