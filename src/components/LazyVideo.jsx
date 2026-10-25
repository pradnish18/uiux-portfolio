import { useEffect, useRef, useState } from "react";

/**
 * LazyVideo
 * An intersection-observer powered video component that only loads & plays
 * when near the viewport, shows an instant lightweight poster frame,
 * and pauses when scrolled away to save GPU and battery.
 */
const LazyVideo = ({
  src,
  poster,
  className = "",
  loop = true,
  muted = true,
  autoPlay = true,
  playsInline = true,
  rootMargin = "250px 0px",
  ...props
}) => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Generate fallback poster path if not provided
  const computedPoster =
    poster ||
    (typeof src === "string" ? src.replace(/\.mp4$/, "-poster.webp") : undefined);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (autoPlay) {
            el.play().catch(() => {
              // Browser autoplay policy catch
            });
          }
        } else {
          el.pause();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [autoPlay, rootMargin]);

  return (
    <video
      ref={videoRef}
      src={isInView ? src : undefined}
      poster={computedPoster}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      preload="none"
      className={className}
      {...props}
    />
  );
};

export default LazyVideo;
