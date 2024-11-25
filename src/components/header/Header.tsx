import React, { useEffect, useRef } from "react";
import DarkModeToggle from "../ui/DarkModeToggle";
import logo from "../../assets/logo_bg.png";

const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const img = new Image();
    img.src = logo;
    img.onload = () => {
      if (headerRef.current) {
        headerRef.current.style.backgroundImage = `url('${img.src}')`;
      }
    };
  }, []);

  return (
    <div className="flex border-b">
      <div ref={headerRef} className="w-full bg-gray-200 bg-contain bg-repeat">
        <h1 className="bg-white py-10 text-center text-6xl font-black uppercase mix-blend-lighten dark:bg-slate-950 dark:mix-blend-darken sm:text-9xl">
          Hello World
        </h1>
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Header;
