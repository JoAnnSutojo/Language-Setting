import React, { useState } from 'react';
import Header from './Header';
import Content from './Content'
import LanguageContext from './contexts/LanguageContext'
import './App.css';

function App() {
  const [language, setLanguage] = useState('🇬🇧 English');
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={ value }> 
      <div className="container">
        <Header />
        <Content />
      </div>
    </LanguageContext.Provider>
    
  );
}

export default App;
