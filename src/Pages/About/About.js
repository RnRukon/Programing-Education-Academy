import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="container p-5">
            <div className="about-section">
                <h1 className="text-danger">About Us</h1>
                <h5 >Web and Software programmer</h5>
                <p>A programming team is a team of people who develop or maintain computer software. They may be organised in numerous ways, but the egoless programming team and chief programmer team have been common structures.</p>
            </div>

            <h2 className="text-center p-5 team-title">Our Team</h2>
            <div className="row-about">
                <div className="column-about">
                    <div className="card-about">
                        <img src="https://codetribe.com/wp-content/uploads/2020/07/9-important-privacy-settings-for-windows-10_1500.jpg" alt="Jane" style={{ width: "100%", height: '200px' }} />
                        <div className="container-about">
                            <h2>Jane Doe</h2>
                            <p className="title-about">CEO & Founder</p>
                            <p>Software Engineer/Technology blogger looking for challenging problems to solve. My background is in enterprise software development, however, I have an insatiable curiosity for </p>
                            <p>jane@example.com</p>
                            <p><button className="button-about">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column-about">
                    <div className="card-about">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_CGHRYpMDAWdioc5cSZ29ZSk5sKbmAAAjg&usqp=CAU" alt="Mike" style={{ width: "100%", height: '200px' }} />
                        <div className="container-about">
                            <h2>Mike Ross</h2>
                            <p className="title-about">Art Director</p>
                            <p>My name is David McCullough. I program as a hobby or for small side jobs and love the challenge. Since then I've used C, C++, Java, and finally found my love in C#.</p>
                            <p>mike@example.com</p>
                            <p><button className="button-about">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className="column-about">
                    <div className="card-about">
                        <img src="https://image.shutterstock.com/image-photo/serious-young-man-working-on-260nw-1693266112.jpg" alt="John" style={{ width: "100%", height: '200px' }} />
                        <div className="container-about">
                            <h2>John Doe</h2>
                            <p className="title-about">Designer</p>
                            <p>I like candlelight dinners and long walks on the beach. Very long walks. Lots of people say they like long walks on the beach, but then they get out on the beach and after just an hour or two, they say they’re getting tired.</p>
                            <p>john@example.com</p>
                            <p><button className="button-about">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;