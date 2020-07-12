import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'


import paydrt from '../assets/images/fulls/paydrt.png'
import fabriq from '../assets/images/fulls/fabriq.jpg'
import knx from '../assets/images/fulls/knx.png'

import htmlicon from '../assets/images/icons/icons8-html-5-96.png'
import cssicon from '../assets/images/icons/icons8-css3-96.png'
import jsicon from '../assets/images/icons/icons8-javascript-96.png'
import reacticon from '../assets/images/icons/icon-reactjs-96.png'
import nodeicon from '../assets/images/icons/icons8-nodejs-96.png'
import rubyicon from '../assets/images/icons/icon-ruby-96.png'
import railsicon from '../assets/images/icons/icon-rails-96.png'
import phpicon from '../assets/images/icons/icon-php-96.png'
import sqlicon from '../assets/images/icons/icon-sql-96.png'


const DEFAULT_IMAGES = [
    { id: '1', src: paydrt, caption: 'Paydrt: Web',
    description: 'Business Management Web App for clients to add and track their social media and site engagement statistics utilizing various API services & Hubspot. Used Python & Django backend. Bought by local marketing advertising firm Monumetric. LINK: https://paydrt.com/' },
    { id: '2', src: fabriq, caption: 'FabrIQ: Desktop', 
    description: 'Desktop app for Windows, MacOS, & Linux built on Electron.js & React in which content creators, freelancers and remote workers are able to separate their work and passion projects into Workspaces. User has the ability to add thousands of Apps from App Store to their Workspace and to customize their URL as well as utilize split-screen web browsing & app switching. LINK: https://tryfabriq.com/'},
    { id: '3', src: knx, caption: 'KNX: Web', 
    description: 'Web application in which clients scan user-generated QR code and are directed to application which gathers information about requested services. This client data is sent to user data tables to keep track of customers per user. '},
    { id: '4', caption: 'TNG: iOS/Android',
    description: 'IN PROGRESS: I am working on a React Native based mobile Goal Tracking Application for a client running a Node backend and utilizing Amazon Firestore and AWS. Release for this application anticipated on iOS/Android soon. Would greatly appreciate a review at that time!'}
];


class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Micah Caffey: Web Developer"
        const siteDescription = "Portfolio Site"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h1>Welcome! </h1>
                        </header>
                        <p>I am a Developer passionate about using programming to solve problems and deliver quality products. I also have experience in Project Management including implementing new software, hardware and managing multiple client relations and teams.
                           When I'm not working on a project, I enjoy hiking, exercising, cooking and photography. </p>
                        <br/>
                        <br/>
                        <p>The majority of my work is with Javascript, both client and server side, and I do enjoy it. However, I do have exposure to Python & Ruby as well. I
                            have worked with tools such as Amazon Firebase, Google Cloud Console, Payment Processing API's (Stripe, Paypal) as well as set up of user
                            authentication methods such as Facebook, Google, Microsoft & Apple. 
                        </p>
                        <br/>
                        <br/>
                        <h1>Frontend Technologies:</h1>
                        <li>React</li>
                        <li>Redux</li>
                        <li>TypeScript</li>
                        <li>RESTful API's</li>
                        <li>HTML5</li>
                        <li>CSS3/SASS</li>
                        <br/>
                        <br/>
                        <h1>Backend Technologies:</h1>
                        <li>Node</li>
                        <li>Express</li>
                        <li>TypeScript</li>
                        <li>Knex.js</li>
                        <br/>
                        <br/>
                        <h1>Database</h1>
                        <li>PostgreSQL</li>
                        <li>Google Cloud DB</li>

         
                        <ul className="actions">
                            <li><a href="https://github.com/mrcaffey" className="button">Check me out on Github</a></li>
                        </ul>
                        <ul className="actions">
                            <li><a href="assets/images/fulls/MicahCaffeyResume.pdf" className="button" download>Download my Resume</a></li>
                        </ul>
                    </section>
               

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description, link }) => ({
                            src,
                            thumbnail,
                            caption,
                            description,
                            link
                        }))} />

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>

                    <section id="three">
                        <h2>Let's Get In Touch</h2>
                        <p>I am quite responsive via email, so please do not hesitate to contact me for my services!</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form 
                                 name="contact"
                                 method="POST"
                                 action="/success"
                                 data-netlify="true"
                                 data-netlify-honeypot="bot-field"
                                >
                                <input type="hidden" name="form-name" value="contact"/>
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                    <br/>
                                    <ul className="actions">
                                    <li><input type="submit" value="Send Message"/></li>
                                </ul>
                                </form>
                                <br/>
                                <p>Developed by Micah Caffey using <a href="https://reactjs.org/">React</a> and <a href="https://www.gatsbyjs.org/">GatsbyJS</a>.</p>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        801-707-5209
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:micah.the.dev@gmail.com">micah.the.dev@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex