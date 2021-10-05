import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';
import './HomeService.css'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeService = (props) => {
    const { title, img, description, price } = props.service;
    return (

        <Col md={5} className="border  border-2 p-4 home-services-card" style={{ width: '500px', height: 'auto', margin: '15px', borderRadius: '7px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="150"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography className="text-danger text-bold" gutterBottom variant="h5" component="div">$
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to="/services">
                    <Button size="small" color="primary">
                        Learn More
                    </Button>
                </Link>
            </CardActions>
        </Col>

    );
};

export default HomeService;