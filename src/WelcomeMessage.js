import React, { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';
import './App.css';

function WelcomeMessage() {
    const { language } = useContext(LanguageContext);

    const welcomeMessages = {
        '🇬🇧 English': 'Hello World',
        '🇩🇪 German': 'Hallo Welt',
        '🇮🇩 Bahasa Indonesia': 'Halo Dunia',
        '🇰🇷 Korean': '안녕하세요 세계',
        '🇹🇭 Thai': 'สวัสดีชาวโลก',
        '🇸🇪 Swedish': 'Hej världen'
    }

    return(
        <h1>{welcomeMessages[language]}!</h1>
    );
}

export default WelcomeMessage;