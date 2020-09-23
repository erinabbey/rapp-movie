import React from 'react'
import './Footer.css'
import {Button} from '../../Button'
import {Link} from 'react-router-dom'
import{
    FaFacebook, FaInstagram, FaYoutube, FaTwitter
} from 'react-icons/fa'
import {MdFingerprint} from 'react-icons/md'
import '../../Navbar.css'
function Footer() {
    return (
        
            <div className = 'footer-container'>
                <section className = 'footer-subcription'>
                    <p className = 'footer-subcription-heading'>
                    Join our exclusive membership to receive the latest news and trends
                    </p>
                    <p className = 'footer-subcription-text'>
                    You can unsubscribe at any time.
                    </p>
                    <div className ='input-area'>
                        <form>
                            <input 
                            className= 'footer-input'
                            name= 'email'
                            type='email'
                            placeholder = 'Enter your Email'
                            >
                            </input>
                            <Button buttonStyle= 'btn--wide'>Subscribe</Button>
                        </form>
                    </div>
                </section>
                <div className= 'footer-links'>
                    <div className = 'footer-link-wrapper'>
                        <div className = 'footer-link-item'>
                            <h2>About me</h2>
                            <Link to ='/sign-up'>How it work</Link>
                            <Link to ='/'>Career</Link>
                            <Link to ='/'>Dream</Link>
                            <Link to ='/'>Passion</Link>
                            <Link to ='/'>Terms of service</Link>
                        </div>
                        <div className = 'footer-link-item'>
                            <h2>Contact us</h2>
                            <Link to ='/'>Contact</Link>
                            <Link to ='/'>Support</Link>
                            <Link to ='/'>Destination</Link>
                            <Link to ='/'>Sponsorship</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                        <div className='footer-link-item'>
                            <h2>Videos</h2>
                            <Link to='/'>Submit Video</Link>
                            <Link to='/'>Ambassadors</Link>
                            <Link to='/'>Agency</Link>
                            <Link to='/'>Influencer</Link>
                         </div>
                        <div className='footer-link-item'>
                            <h2>Social Media</h2>
                            <Link to='/'>Instagram</Link>
                            <Link to='/'>Facebook</Link>
                            <Link to='/'>Youtube</Link>
                            <Link to='/'>Twitter</Link>
                        </div>
                    </div>
                </div>
                <section className='social-media'>
                    <div className = 'social-media-wrap'>
                        <div className = 'footer-logo'>
                            <Link to ="/" className = 'social-logo'>
                            <MdFingerprint className = 'navbar-icon'/>
                            Erin Abbey
                            </Link>
                        </div>
                        <small className = 'website-right'>Erin Abbey</small>
                        <div className = 'social-icons'>
                            <Link to ="/"
                            className = 'social-icon-link'
                            target='_blank'
                            aria-label= 'Facebook'
                            ><FaFacebook/>
                            </Link>
                            <Link to ="/"
                            className = 'social-icon-link'
                            target='_blank'
                            aria-label= 'Instagram'
                            ><FaInstagram/>
                            </Link>
                            <Link to ="/"
                            className = 'social-icon-link'
                            target='_blank'
                            aria-label= 'Twitter'
                            ><FaTwitter/>
                            </Link>
                            <Link to ="/"
                            className = 'social-icon-link'
                            target='_blank'
                            aria-label= 'Youtube'
                            ><FaYoutube/>
                            </Link>
                        </div>
                    </div>
                </section>
             </div>
           
    )
}

export default Footer
