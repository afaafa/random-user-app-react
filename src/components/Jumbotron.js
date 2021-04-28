import React from 'react';

class Jumbotron extends React.Component {
    render() {
        return (
        <div className="jumbotron">
            <div className="intro">
                <h4><strong>Hello</strong>, I am Fathonah Zuchriyah</h4>
                <h1><span className="intro-text-web">Web</span> Developer</h1>
                <p>Developing your success online.</p>
                <div className="btn_wrapper">
                    <button className="btn hire">Hire me</button>
                    <button className="btn downloadcv">Download CV</button>
                </div>
            </div>
            <img src="assets/image/web_dev.svg" alt="web developer illustration" className="web-dev-img" />
        </div>
        );
    }

}

export default Jumbotron;

