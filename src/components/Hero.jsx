import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    // Dismiss loader as soon as the main hero video is ready
    if (loadedVideos >= 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  // Safety fallback: Never keep the user stuck behind the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Preload remaining hero videos sequentially during idle time
  useEffect(() => {
    const preloadVideos = () => {
      [2, 3, 4].forEach((idx) => {
        const link = document.createElement("link");
        link.rel = "prefetch";
        link.as = "video";
        link.href = `videos/hero-${idx}.mp4`;
        document.head.appendChild(link);
      });
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(preloadVideos);
    } else {
      setTimeout(preloadVideos, 1500);
    }
  }, []);


  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const getPosterSrc = (index) => `videos/hero-${index}-poster.webp`;

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-obsidian">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-obsidian-surface"
      >
        <div>
          {/* Clickable mini video preview — keeps the GSAP expand transition */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={handleMiniVdClick}
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  poster={getPosterSrc((currentIndex % totalVideos) + 1)}
                  preload="metadata"
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            poster={getPosterSrc(currentIndex)}
            preload="metadata"
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            poster={getPosterSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            preload="auto"
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        {/* Bottom-right heading — visible through the video frame */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-amber">
          PR<b>A</b>D.
        </h1>

        {/* Top-left overlay content */}
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-20 px-5 sm:px-10 max-w-3xl">
            <span className="inline-block rounded-full border border-amber/30 bg-amber/10 px-3 py-1 font-general text-xs uppercase tracking-widest text-amber mb-3">
              Product Designer &bull; UX Engineer
            </span>
            
            <h1 className="font-zentry special-font text-4xl sm:text-6xl md:text-7xl font-black uppercase text-snow tracking-tight leading-tight">
              Designing digital products people <b>l</b>ove to use.
            </h1>

            <p className="mt-4 mb-6 font-robert-regular text-snow/80 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
              I turn complex problems into intuitive, accessible experiences through research, interaction design, prototyping, and frontend engineering.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                id="view-work-btn"
                title="Explore Selected Work"
                leftIcon={<TiLocationArrow />}
                containerClass="bg-amber text-obsidian flex-center gap-1 !text-black font-bold hover:bg-amber-light transition-colors"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
              <Button
                id="view-resume-hero-btn"
                title="View Résumé ↗"
                containerClass="border border-snow/20 bg-obsidian/80 text-snow hover:border-amber hover:text-amber font-medium transition-colors"
                onClick={() => window.open("/resume.pdf", "_blank")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shadow heading behind the video frame */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-white">
        PR<b>A</b>D.
      </h1>
    </div>
  );
};

export default Hero;
