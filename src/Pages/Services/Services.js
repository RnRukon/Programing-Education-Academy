import React from 'react';
import useServices from '../../Components/hooks/useServices';
import Service from '../../Components/Service/Service';

const Services = () => {
    const [services] = useServices();
    // console.log(services)

    return (

        // services page

        <div className="container">
            <div className=" d-flex justify-content-center py-5 text-danger">
                <h1 className=" border-bottom border-danger w-25 text-center">Services</h1>
            </div>
            <div >
                <div className="  d-flex justify-content-around  flex-wrap">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;