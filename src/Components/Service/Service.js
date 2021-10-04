import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';
import React from 'react';

const Service = (props) => {
    const { title, img, description, price } = props?.service;

    return (


        <Card className="lg-col-4 md-col-2 col-sm-12 my-3" style={{ width: '300px', margin: '15px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
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
                    <Typography style={{ color: 'red', fontWeight: 'bold' }} gutterBottom variant="h5" component="div">$
                        {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>


    );
};

export default Service;