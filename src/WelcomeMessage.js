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
        '🇸🇪 Swedish': 'Hej världen',
        '🇨🇳 Mandarin Chinese': '你好世界',
        '🇪🇸 Spanish': 'Hola Mundo',
        '🇫🇷 French': 'Bonjour le monde',
        '🇵🇹 Portuguese': 'Olá Mundo',
        '🇮🇳 Hindi': 'हैलो वर्ल्ड',
        '🇷🇺 Russian': 'Привет, мир',
        '🇧🇩 Bangla': 'ওহে বিশ্ব',
        '🇵🇰 Urdu': 'ہیلو ورلڈ',
        '🇯🇵 Japanese': 'こんにちは世界',
        '🇹🇷 Turkish': 'Selam Dünya',
        '🇩🇰 Danish': 'Hej Verden',
        '🇮🇹 Italian': 'Ciao mondo',
        '🇻🇳 Vietnamese': 'Chào thế giới',
        '🇳🇱 Dutch': 'Hallo Wereld'
    }

    return(
        <h1>{welcomeMessages[language]}!</h1>
    );
}

export default WelcomeMessage;