import React from 'react';
import '../Header.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";


function Header() {
    const history = useHistory();

    return (
        <div className="header">
            <img onClick={() => history.push('/')} className="header__logo" src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
            <div className="header__center">
                <input type="text" placeholder="Where are you going?" />
                <LocationOnIcon className="location__icon" />
            </div>
            <div className="header__right">
                <Button variant="outlined">Become a Host</Button>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;