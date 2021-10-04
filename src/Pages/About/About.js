import React from 'react';
import Abouts from '../../Components/Abouts/Abouts';
import useAboutData from '../../Components/hooks/useAboutData';
import './About.css'

const About = () => {
    const [aboutData] = useAboutData();
    return (
        <div className="container p-5">
            <div className="about-section">
                <h1 className="text-danger">About Us</h1>
                <h5 >Web and Software programmer</h5>
                <p>A programming team is a team of people who develop or maintain computer software. They may be organised in numerous ways, but the egoless programming team and chief programmer team have been common structures.</p>
            </div>

            <h2 className="text-center p-5 team-title">Our Team</h2>
            <div className="row-about">
                {
                    aboutData.map(about => <Abouts key={about.id} about={about}></Abouts>)
                }
            </div>
        </div>
    );
};

export default About;