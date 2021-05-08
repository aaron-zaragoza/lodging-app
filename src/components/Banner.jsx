import { Button } from '@material-ui/core';
import React from 'react';
import '../Banner.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>The Greatest Outdoors</h1>
                <h5>Plan your escape today</h5>
                <Button variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;