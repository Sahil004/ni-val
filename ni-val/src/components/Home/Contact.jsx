import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState(null);

    // Google Form URL (replace with your form's action URL)
    const googleFormAction = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSd-OLhRRPm97FEhZrfDnj1gMYAJ69wfg6QKMN7G3oMH-uXwjw/formResponse';

    // Replace with actual entry IDs from your Google Form
    const nameField = 'entry.355816204';
    const emailField = 'entry.1427367381';
    const subjectField = 'entry.131431442';
    const messageField = 'entry.973263743';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append(nameField, formData.name);
        form.append(emailField, formData.email);
        form.append(subjectField, formData.subject);
        form.append(messageField, formData.message);

        fetch(googleFormAction, {
            method: 'POST',
            body: form,
            mode: 'no-cors', // prevent CORS issues
        })
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="contact section-padding">
            <div className='container contact-main'>
                <span className='section-subheading' data-aos="fade-up" data-aos-duration="1000">Contact Us</span>
                <h2 className='section-heading' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    Get in touch, send us an e-mail or call us
                </h2>

                <div className='row'>
                    <div className="col-md-10 mx-auto col-lg-7 mb-4">
                        <div className='p-3 p-lg-5 contact-form h-100' data-aos="fade-right" data-aos-duration="1000">
                            <span className='text-uppercase section-subheading mb-5 fw-bold'>Send us a message</span>
                            <form id="form1" onSubmit={handleSubmit}>
                                <div>
                                    <input
                                        id="name"
                                        name="name"
                                        type='text'
                                        placeholder='Your Name'
                                        className='form-input mb-4 pb-4 w-100'
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        id="email"
                                        name="email"
                                        type='email'
                                        placeholder='Your Email'
                                        className='form-input mb-4 pb-4 w-100'
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type='text'
                                        placeholder='Subject'
                                        className='form-input mb-4 pb-4 w-100'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder='Your Message'
                                        className='form-input mb-4 pb-4 w-100'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows='10'
                                        required
                                    ></textarea>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        id="button123"
                                        className='w-100 py-3 btn-form text-uppercase border border-0'
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>

                            {status === 'success' && <p>Your message has been sent successfully!</p>}
                            {status === 'error' && <p>There was an error sending your message. Please try again.</p>}
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="col-md-10 mx-auto col-lg-5 mb-4">
                        <div className='p-3 p-lg-5 contact-info h-100' data-aos="fade-left" data-aos-duration="1000">
                            <h4 className='text-uppercase section-subheading fw-bold'>Contact info</h4>
                            <div>
                                <h3 className='sub-contact'>Address</h3>
                                <p className='text-black opacity-75 sub-contact-para mb-3'>
                                    S. No 13 Kharadi, Near Zensar, Kharadi,
                                    Pune, Maharashtra 411014
                                </p>
                            </div>
                            <div>
                                <h3 className='sub-contact'>Email</h3>
                                <p className='text-black opacity-75 sub-contact-para mb-3'>
                                    <a href="mailto:info@ni-val.com">info@ni-val.com</a>
                                </p>
                            </div>
                            <div>
                                <h3 className='sub-contact'>Call</h3>
                                <p className='text-black opacity-75 sub-contact-para mb-3'>
                                    <a href="tel:+1 4696511980">+1 4696511980</a>
                                </p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.618133955086!2d73.9363707749636!3d18.546150782552374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d7a6adb4ff%3A0xeb1184007148aedc!2sGulmohar%20Paradise%20Homes!5e0!3m2!1sen!2sin!4v1724788115289!5m2!1sen!2sin"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title='google-map'
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;
