import React, { useEffect } from 'react'
import VanillaTilt from 'vanilla-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.scss'

function Contact() {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll('.contact__body--parallax-item'), {
            max: 20,
            speed: 200
        })
    })
    return (
        <div id="contact">
            <section className="contact">
                <div className="contact__header">
                    <h3>Let's get in touch!</h3>
                    <hr />
                    <span>
                    <a href="https://www.linkedin.com/in/an-tran-650b2199/" >
                        <i class="fab fa-linkedin fa-2x"></i>
                      </a>
                      <a href="https://github.com/antrannguyen">
                        <i class="fab fa-github-square fa-2x"></i>
                        </a>

                    </span>
                    <p>
                        I'm always interested in new projects and opportunities.<br />Don't hesitate to give me a call or send an email, I'll get back to you as soon as I can!
                    </p>
                </div>
                <div className="contact__body">
                    <div className="contact__body--parallax-item">
                        <div className="inner-parallax">
                             <i class="fas fa-phone"></i>
                            <p>+358 45 78 777 889</p>
                        </div>
                    </div>              
                    <div className="contact__body--parallax-item">
                        <div className="inner-parallax">
                            <i class="fas fa-envelope"></i>
                            <p>antran1149@gmail.com</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact