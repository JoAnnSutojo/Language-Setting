import React, { useContext } from 'react';
import LanguageContext from './contexts/LanguageContext';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import './App.css'

function LanguageChooser() {
    const { language, setLanguage } = useContext(LanguageContext);
    const languages = ['🇬🇧 English', '🇩🇪 German', '🇮🇩 Bahasa Indonesia', '🇰🇷 Korean', '🇹🇭 Thai', '🇸🇪 Swedish']

    return(
        <div>
            <Dropdown>
                <Dropdown.Toggle className='custom-btn' variant='custom-btn'>{language}</Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu'>
                    {languages.map(lang => <Dropdown.Item className='dropdown-item' onClick={() => setLanguage(lang)}>{lang}</Dropdown.Item>)}
                 </Dropdown.Menu>
            </Dropdown>
        </div> 
    );
}

// ALTERNATIVE
// return (
//     <div className="select">
//       <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option value="DE">🇩🇪&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;German</option>
//         <option value="US">🇺🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;English</option>
//         <option value="TR">🇹🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Turkish</option>
//         <option value="IR">🇮🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Persian</option>
//         <option value="FR">🇫🇷&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;French</option>
//         <option value="SP">🇪🇸&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Spanish</option>
//         <option value="DU">🇳🇱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dutch</option>
//       </select>
//     </div>
//   )

export default LanguageChooser;