import React from "react";
import { FaMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import useDarkMode from "../../hooks/useDarkMode";

const DarkModeToggle: React.FC = () => {
  const { toggleDarkMode, isDarkMode } = useDarkMode();
  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={toggleDarkMode}
        className="rounded-full border border-gray-500 p-2 text-gray-500 dark:border-white dark:text-white"
      >
        {isDarkMode ? <FaMoon /> : <GoSun />}
      </button>
    </div>
  );
};

export default DarkModeToggle;
