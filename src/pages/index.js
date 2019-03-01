import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'


import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'

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
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Enterprise International',
    description: 'American travel site for International business clientele.' },
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Caffey, Inc.', 
    description: 'Design-Build Medical Construction website.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Mugshot', 
    description: 'Facebook clone for those who prefer jumpsuits.'},
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
        const siteTitle = "Micah Caffey: Software Developer"
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
                            <h2>Welcome! </h2>
                        </header>
                        <p>I am a freelance Full Stack web developer passionate about using programming to solve problems and deliver quality products.
                           When I'm not working on a project, I enjoy hiking, exercising, cooking and photography. </p>
                        <br/>
                        <br/>
                        <p>Currently, I work with mainly JavaScript, HTML/CSS/Bootstrap, React and React Native on the front end with 
                           NodeJS and Ruby on Rails for the backend.</p>
                        <br/>
                        <br/>
                        <img src={htmlicon} alt="HTML"/>
                        <img src={cssicon} alt="CSS"/>
                        <img src={jsicon} alt="JavaScript"/>
                        <img src={reacticon} alt="React"/>
                        <br/>
                        <img src={nodeicon} alt="Node"/>
                        &emsp;
                        <img src={rubyicon} alt="Ruby"/>
                        &emsp;
                        <img src={railsicon} alt="Rails"/>
                        &emsp;
                        <img src={phpicon} alt="PHP"/>
                        &emsp;
                        <img src={sqlicon} alt="SQL"/>
                        <br/>
                        <br/>


                        <ul className="actions">
                            <li><a href="https://github.com/mrcaffey" className="button">Check me out on Github</a></li>
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
                                    <ul className="actions">
                                    <li><input type="submit" value="Send Message"/></li>
                                </ul>
                                </form>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        207 S 600 E<br />
                                        Salt Lake City, UT.<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        228-493-2200
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