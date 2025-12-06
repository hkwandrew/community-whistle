import { useEffect, useRef, useState } from "react";
import HotlineButton from "../components/HotlineButton";
import { IconCallMade, IconChevron } from "../components/Icons";

function ResourcesSection({
  localResources,
  title = "Resources",
  intro = "Has someone in your family been detained by agents or are you a witness of an agent raid in your community?",
  toggleLabel = "More local resources",
  hotlineLabel = "Find a Hotline",
}) {
  const [isOpenByClick, setIsOpenByClick] = useState(false);
  const [hoverCapable, setHoverCapable] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const hoverQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );
    const updateHoverCapable = (event) => setHoverCapable(event.matches);
    const hasAddEventListener =
      typeof hoverQuery.addEventListener === "function";

    updateHoverCapable(hoverQuery);

    if (hasAddEventListener) {
      hoverQuery.addEventListener("change", updateHoverCapable);
    } else {
      hoverQuery.onchange = updateHoverCapable;
    }

    return () => {
      if (hasAddEventListener) {
        hoverQuery.removeEventListener("change", updateHoverCapable);
      } else if (hoverQuery.onchange === updateHoverCapable) {
        hoverQuery.onchange = null;
      }
    };
  }, []);

  const handleToggle = () => setIsOpenByClick((prev) => !prev);

  const handlePointerEnter = () => {
    if (hoverCapable) setIsHovering(true);
  };

  const handlePointerLeave = () => {
    if (hoverCapable) setIsHovering(false);
  };

  const handleFocusCapture = (event) => {
    if (!hoverCapable) return;
    setIsHovering(true);
  };

  const handleBlurCapture = (event) => {
    if (!hoverCapable) return;
    const nextFocused = event.relatedTarget;
    if (!sectionRef.current?.contains(nextFocused)) {
      setIsHovering(false);
    }
  };

  const isMenuOpen = hoverCapable
    ? isHovering || isOpenByClick
    : isOpenByClick;

  return (
    <section
      id="resources"
      ref={sectionRef}
      className="panel flex-container flex-dir-col"
      data-hoverable={hoverCapable ? "true" : "false"}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocusCapture={handleFocusCapture}
      onBlurCapture={handleBlurCapture}
    >
      <h2 className="section-title archivo-800">{title}</h2>
      <p className="body-medium text-center roboto-400">{intro}</p>
      <HotlineButton>{hotlineLabel}</HotlineButton>
      <button
        type="button"
        className="resource-toggle text-center flex-container"
        onClick={handleToggle}
        aria-expanded={isMenuOpen}
      >
        <span className="body-xlarge archivo-800">{toggleLabel} </span>
        <IconChevron />
      </button>
      {!hoverCapable && isOpenByClick && (
        <button
          type="button"
          aria-label="Close local resources menu"
          className="resources-overlay"
          onClick={() => setIsOpenByClick(false)}
        />
      )}
      <ul
        className="local-resources"
        aria-label="Local resource cards"
        hidden={!isMenuOpen}
      >
        {localResources.map((city) => (
          <li key={city.label} className="local-resource-card">
            <a
              className="archivo-800"
              href={city.url}
              target="_blank"
              rel="noreferrer"
            >
              {city.label}
              <IconCallMade />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ResourcesSection;
