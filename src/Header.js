import React from 'react';
import LanguageChooser from './LanguageChooser'
import './App.css'

function Header() {

    return(
        <div  className="header">
            <span>Please select your language:</span>
            <LanguageChooser />
        </div> 
    );
}

export default Header;