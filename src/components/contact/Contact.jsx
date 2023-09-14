import Footer from "../footer/Footer"
import Header from "../site-header/Header"
import ContactForm from "./ContactForm"
import '../../css/contact.css'

const Contact = ()=>{
    return(
        <div>
            <Header/>
            <div className="section bg-black text-white contact-page">
                <div className="container center-xy">
                    <div>
                    <p className="display-4">Contact me</p>
                    </div>
                </div>
            </div> 
            <div className="m-3 w-50 mx-auto">
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    )
}
 export default Contact 