import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(prevMode => !prevMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [darkMode]);

    return (
        <button onClick={toggleTheme}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
    );
};

export default ThemeToggle;