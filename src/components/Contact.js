import React from 'react';
import Header from './Header';

const ContactInfo = () => (
    <div className="col-sm-6">
        <ul>
            <li>
                <span>Current Location: Greater San Francisco City Area</span>
            </li>
            <li>
                <span>GitHub: </span> 
                <a className="p-0" href="https://github.com/LWRGitHub">
                    <b>GitHub.com/LWRGitHub</b>
                </a> 
            </li>
            <li>
                <span>LinkedIn: </span> 
                <a className="p-0" href="https://www.linkedin.com/in/logan-reynolds/">
                    <b>Linkedin.com/in/Logan-Reynolds</b>
                </a>
            </li>
        </ul>  
</div>
);
const GMap = () => (
    <div className="col-sm-6">
        <iframe
            title="Greater San Francisco City Area"
            className="map-center ml-4 border-0"
            style={{width: '90%'}}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612559.5655974422!2d-123.7395892837902!3d37.871276926144155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808583a3a688d7b5%3A0x8c891b8457461fa9!2sSan%20Francisco%20Bay%20Area%2C%20CA!5e0!3m2!1sen!2sus!4v1793726903297!5m2!1sen!2sus" 
            frameborder="0"
            allowfullscreen="">
        </iframe>
    </div>
);

const Contact = () => (
    <div>
        <Header page={'Contact Me'} />

        <section className="container">
            <div className="row">

                <ContactInfo />
                <GMap />

            </div>
        </section>
    </div>
);

export default Contact;