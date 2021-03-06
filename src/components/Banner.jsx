import { Button } from '@material-ui/core';
import React from 'react';
import '../Banner.css';
import { useHistory } from "react-router-dom";


function Banner() {
    const history = useHistory();

    return (
        <div className="banner">
            <div className="banner__info">
                <h1>The Greatest Outdoors</h1>
                <h5>Plan your escape today</h5>
                <Button onClick={() => history.push('/search')} variant="outlined">Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner;