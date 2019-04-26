import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/profile.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>Micah Caffey</strong></h1>
                    <h1><strong>Software Developer / Project Manager</strong></h1>
                    <h1 className="icon fa-map-marker"> SLC, UT. </h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
