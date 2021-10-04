import React from 'react';
import './Abouts.css';

const Abouts = (props) => {
    const { name, job, email, description, img } = props?.about;
    return (
        <div>
            <div className="column-about">
                <div className="card-about">
                    <img src={img} alt="Jane" style={{ width: "100%", height: '200px' }} />
                    <div className="container-about">
                        <h2>{name}</h2>
                        <p className="title-about">{job}</p>
                        <p>{description.slice(0, 165)} ...</p>
                        <p>{email}</p>
                        <p><button className="button-about">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Abouts;