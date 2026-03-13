import { useState, useEffect } from "react";
import PropTypes from "prop-types";

/**
 * Typewriter component for animating text appearance.
 * 
 * @param {string} text - The full text to type out.
 * @param {number} speed - Typing speed in milliseconds (default: 80).
 * @param {number} delay - Initial delay before typing starts in milliseconds (default: 400).
 * @param {string} className - Optional CSS classes for the container.
 * @param {boolean} showCursor - Whether to show the blinking cursor (default: true).
 */
export default function Typewriter({
    text,
    speed = 80,
    delay = 400,
    className = "",
    showCursor = true
}) {
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;
        setDisplayText("");

        const type = () => {
            if (i < text.length) {
                setDisplayText(text.slice(0, i + 1));
                i++;
                setTimeout(type, speed);
            }
        };

        const timeoutId = setTimeout(type, delay);
        return () => clearTimeout(timeoutId);
    }, [text, speed, delay]);

    return (
        <span className={className}>
            {displayText}
            {showCursor && <span className="cursor-blink text-primary">_</span>}
        </span>
    );
}

Typewriter.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number,
    delay: PropTypes.number,
    className: PropTypes.string,
    showCursor: PropTypes.bool
};
