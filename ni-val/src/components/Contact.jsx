import React from 'react'

const Contact = () => {
    return (
        <section id="contact" class="contact section-padding">
            <div class='container contact-main'>
                <div class='row'>
                    <div className="col-lg-7 mb-4">
                        <div class='p-3 p-lg-5 contact-form h-100'>
                            <h4 class='text-uppercase section-subheading mb-5 fw-bold'>Send us a message</h4>
                            <form id="form1" method="post" action="#">
                                <div>
                                    <input id="name" name="name" type='text' placeholder='Your Name' class='form-input mb-4 pb-4 w-100'
                                        required />
                                </div>
                                <div>
                                    <input id="email" name="email" type='email' placeholder='Your Email'
                                        class='form-input mb-4 pb-4 w-100'
                                        pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" required />
                                </div>
                                <div>
                                    <input id="subject" name="subject" type='text' placeholder='Subject' class='form-input mb-4 pb-4 w-100'
                                        required />
                                </div>
                                <div>
                                    <textarea id="message" name="message" type='text' placeholder='Your Message'
                                        class='form-input mb-4 pb-4 w-100' rows='10' cols='50' required></textarea>
                                </div>
                                <div>
                                    <button type="submit" id="button123" class=' w-100 py-3 btn-form text-uppercase border border-0'>Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div class='p-3 p-lg-5 contact-info h-100'>
                            <h4 class='text-uppercase section-subheading fw-bold'>Contact info</h4>
                            <h2 className='section-heading'>Get in touch, send us an e-mail or call us</h2>
                            <div>
                                <h3 class='sub-contact'>Address</h3>
                                <p class='text-black opacity-75 sub-contact-para mb-3'>S. No 13 Kharadi, Near Zensar, Thite Nagar, Kharadi, <br/>Pune, Maharashtra 411014</p>
                            </div>
                            <div>
                                <h3 class='sub-contact'>Email</h3>
                                <p class='text-black opacity-75 sub-contact-para mb-3'>
                                    <a href="mailto:xyx@gmail.com">xyz@gmail.com</a>
                                </p>
                            </div>
                            <div>
                                <h3 class='sub-contact'>Call</h3>
                                <p class='text-black opacity-75 sub-contact-para mb-3'>
                                    <a href="tel:+91 9876543210">+91 9876543210</a>
                                </p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.618133955086!2d73.9363707749636!3d18.546150782552374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d7a6adb4ff%3A0xeb1184007148aedc!2sGulmohar%20Paradise%20Homes!5e0!3m2!1sen!2sin!4v1724788115289!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact