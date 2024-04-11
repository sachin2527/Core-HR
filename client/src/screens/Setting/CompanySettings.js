import React, { useState } from 'react';

const CompanySettings = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [selectedTheme, setSelectedTheme] = useState('Light');
  const [profileUpdated, setProfileUpdated] = useState(false);
  const [passwordUpdated, setPasswordUpdated] = useState(false);

  const languageOptions = ['English', 'Spanish', 'French', 'German'];
  const themeOptions = ['Light', 'Dark'];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleThemeChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleProfileUpdate = () => {
    // Perform update profile logic
    setProfileUpdated(true);
  };

  const handlePasswordUpdate = () => {
    // Perform update password logic
    setPasswordUpdated(true);
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.5)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
    }}>
      <h2 style={{ textAlign: 'left', marginBottom: '30px', color: '#333' }}>Settings</h2>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#555', marginBottom: '10px' }}>Account</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handleProfileUpdate()}>Update Profile {profileUpdated && <span style={{ color: 'green' }}>✔</span>}</li>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }} onClick={() => handlePasswordUpdate()}>Change Password {passwordUpdated && <span style={{ color: 'green' }}>✔</span>}</li>
        </ul>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#555', marginBottom: '10px' }}>Preferences</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Language
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              style={{
                marginLeft: '10px',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              {languageOptions.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}
            </select>
          </li>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Theme
            <select
              value={selectedTheme}
              onChange={(e) => handleThemeChange(e.target.value)}
              style={{
                marginLeft: '20px',
                padding: '8px',
                borderRadius: '5px',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                background: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              {themeOptions.map((theme, index) => (
                <option key={index} value={theme}>{theme}</option>
              ))}
            </select>
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: '30px' }}>
        <h3 style={{ color: '#555', marginBottom: '10px' }}>Support</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Contact Us</li>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }}>FAQ</li>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }}>About Us</li>
          <li style={{ marginBottom: '10px', cursor: 'pointer' }}>Legal Terms and Conditions</li>
        </ul>
      </div>
      <div style={{ textAlign: 'left' }}>
        <button style={{ backgroundColor: '#009688', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '16px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>Logout</button>
      </div>
    </div>
  );
}

export default CompanySettings;
