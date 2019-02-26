import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/fulls/pic11.jpg'

const Success = (props) => (
    <Layout>
        <Helmet>
            <title>Success Page</title>
            <meta name="description" content="Success Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Thanks!</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>I'll be in contact with you shortly. Have a great day!</p>
                    <a href="/#">Home</a>
                </div>
            </section>
        </div>
    </Layout>
)

export default Success