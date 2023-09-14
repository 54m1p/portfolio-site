const ContactForm = ()=>{
    return(
        // <div className="contact-form container center-xy">
        //     <form action="" onSubmit={onsubmit}>
        //         <div><input type="text" placeholder="Full Name" className="w-100"/></div>
        //         <div><input type="email" placeholder="Email" className="w-100"/></div>
        //         <div><textarea name="message" id="" cols="30" rows="10" placeholder="Message" className="w-100"></textarea></div>
        //         <button type="submit">Send</button>
        //     </form>
        // </div>

        // <!--Section: Contact v.2-->
        <div>
<section className="mb-4">

    {/* <!--Section heading--> */}
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact me</h2>
    {/* <!--Section description--> */}
    <p className="text-center w-responsive mx-auto mb-5">Please feel free to drop a query or a message to me.</p>

    <div className="row">

        {/* <!--Grid column--> */}
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control"/>
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                    {/* <!--Grid column--> */}
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control"/>
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>
                    {/* <!--Grid column--> */}

                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control"/>
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>
                {/* <!--Grid row--> */}

                {/* <!--Grid row--> */}
                <div className="row">

                    {/* <!--Grid column--> */}
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
                {/* <!--Grid row--> */}

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        {/* <!--Grid column--> */}

        {/* <!--Grid column--> */}
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Kathmandu, Nepal</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+977 9860866680 </p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>samipneupane.18@gmail.com</p>
                </li>
            </ul>
        </div>
        {/* <!--Grid column--> */}

    </div>

</section>
{/* <!--Section: Contact v.2--> */}
</div>
    )
}

export default ContactForm