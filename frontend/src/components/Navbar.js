import { useEffect, useRef, useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const navbarRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [triggerY, setTriggerY] = useState(0);

  useEffect(() => {
    if (navbarRef.current) {
      setTriggerY(navbarRef.current.offsetTop);
    }

    const onScroll = () => {
      setIsSticky(window.scrollY > triggerY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [triggerY]);

  return (
    <>
      {isSticky && (
        <div style={{ height: navbarRef.current?.offsetHeight }} />
      )}

      <nav
        ref={navbarRef}
        className={`navbar ${isSticky ? "is-sticky" : ""}`}
      >
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
           <li><a href="#education">Education</a></li>
           <li><a href="#projects">Projects</a></li>
           <li><a href="#skills">Skills</a></li>
           <li><a href="#experience">Experience</a></li>
           <li><a href="#contact">Contact</a></li>
          <button
          className="theme-toggle"
          onClick={() =>
            setDarkMode(darkMode => !darkMode)
          }
        >
          {!darkMode ? 
            <img 
                src="https://cdn-icons-png.freepik.com/256/5261/5261906.png?semt=ais_white_label" 
                alt="dark mode"
                style={{height: '25px', width: 'auto'}}>
            </img> 
            :
            <img 
                src="https://cdn-icons-png.flaticon.com/512/5262/5262027.png"
                alt="light mode"
                style={{height: '25px', width: 'auto'}}>
            </img>}
        </button>
        </ul>
      </nav>
    </>
  );
}
