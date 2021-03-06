import React from 'react';
import { Col } from 'react-bootstrap';
import './Blog.css';
const Blog = () => {

    return (
        <div>
            <div className="d-flex justify-content-center">
                <h1 className="text-danger text-center border-bottom border-danger pt-2 w-25">Blog</h1>
            </div>
            <div className='container block-bg-style mt-3 card'>

                <div div className="leftcolumn  d-lg-flex" >
                    <Col>
                        <h2>Better Programming</h2>
                        <h5>Description, 4 October, 2021</h5>
                        <p>Programing</p>
                        <p>Programming is an intriguing sector as it gives us the superpower to regulate computer programs on the go. It can be used for ships, traffic control, robotics, self-driving vehicles, smartphone applications, websites, and many other things.

                            To ensure that you remain up to date on standards and protocols, and even more so in the field of coding, it is important to track developments in your field. Programmers of all specialties can easily benefit from keeping track of the new developments & following industry-leading blogs and websites.

                            These bloggers have made a name for themselves in the programming world by posting important, high-quality data and tips for coders. You can learn tricks and shortcuts you would never have dreamed of doing otherwise by following programming blogs.

                            You’ll surely want to subscribe to these helpful programming websites and blogs written by the best blogging coders. So, let’s get started!</p>
                    </Col>
                    <Col className=" d-flex justify-content-center align-items-center">
                        <img className="img-fluid" src="https://content.techgig.com/thumb/msid-79844104,width-860,resizemode-4/5-Best-programming-languages-to-learn-in-2021.jpg?140622" alt="" />
                    </Col>
                </div >
            </div >
        </div>
    );
};

export default Blog;