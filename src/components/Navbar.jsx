import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Work", target: "#projects" },
  { label: "Process", target: "#process" },
  { label: "Toolkit", target: "#skills" },
  { label: "Experience", target: "#experience" },
  { label: "About", target: "#about" },
  { label: "Contact", target: "#contact" },
];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef(null);
  const navContainerRef = useRef(null);
  const location = useLocation();

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (!audioElementRef.current) return;
    if (isAudioPlaying) {
      audioElementRef.current.play().catch(() => setIsAudioPlaying(false));
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

  useEffect(() => {
    if (!navContainerRef.current) return;
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (!navContainerRef.current) return;
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4 bg-obsidian/80 backdrop-blur-md rounded-full border border-snow/10 px-6">
          {/* Logo / Brand */}
          <div className="flex items-center gap-7">
            <Link
              to="/"
              className="font-zentry text-lg font-black uppercase tracking-widest text-amber"
            >
              PRAD<b>NISH</b>
            </Link>
          </div>

          {/* Navigation Links + Audio Toggle */}
          <div className="flex h-full items-center gap-6">
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={location.pathname === "/" ? item.target : `/${item.target}`}
                  className="font-general text-xs uppercase tracking-widest text-snow/70 hover:text-amber transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded px-1"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Audio Indicator */}
            <button
              onClick={toggleAudioIndicator}
              className="ml-4 flex items-center space-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber rounded p-1"
              aria-label={isAudioPlaying ? "Mute background audio" : "Play background audio"}
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={clsx("indicator-line", {
                    active: isIndicatorActive,
                  })}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
