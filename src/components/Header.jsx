import React from 'react';
import '../Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, Button } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo" />
            <div className="header__center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="header__right">
                <Button>Become a Host</Button>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header;