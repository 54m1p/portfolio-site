const ContactForm = ()=>{
    return(
        <div className="contact-form container center-xy">
            <form action="" onSubmit={onsubmit}>
                <div><input type="text" placeholder="Full Name" className="w-100"/></div>
                <div><input type="email" placeholder="Email" className="w-100"/></div>
                <div><textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="w-100"></textarea></div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactForm