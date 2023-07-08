import { useState, useEffect } from 'react';

const ToggleSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <label className="flex items-center h-6   ">
     
      <div
        className={`${
          isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
        } relative rounded-full w-[35px] h-8 transition-colors duration-300`}
      >
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={isDarkMode}
          onChange={toggleTheme}
        />
        <span
          className={`${
            isDarkMode ? 'translate-x-6' : 'translate-x-1'
          } absolute left-1 top-1 bg-white rounded-full w-6 h-6 transition-transform duration-300`}
        />
      </div>
      
    </label>
  );
};

export default ToggleSwitch;
