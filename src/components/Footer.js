import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="https://www.linkedin.com/in/micah-caffey/" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
                        <li><a href="https://github.com/mrcaffey" className="icon fa-github"><span className="label">Github</span></a></li>
                        <li><a href="mailto:micah.the.dev@gmail.com" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>  
            </div>
        )
    }
}

export default Footer
