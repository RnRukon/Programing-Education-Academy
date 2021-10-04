
import { Row } from 'react-bootstrap';
import HomeService from '../HomeService/HomeService';
import useServices from '../hooks/useServices';
import './HomeServiceCart.css'

const HomeServiceCart = () => {
    const [services] = useServices();

    return (
        <div>
            <div className=" d-flex justify-content-center pt-5">
                <h1 className=" border-bottom  text-center w-25 border-danger text-danger">Service</h1>
            </div>
            <Row id="home-service" className="justify-content-center">
                {
                    services.slice(0, 4).map(service => <HomeService key={service.id} service={service}></HomeService>)
                }
            </Row>
        </div>
    );
};

export default HomeServiceCart;