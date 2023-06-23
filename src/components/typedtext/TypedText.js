"use client";
import React, { useEffect } from "react";
import styles from "./TypedText.module.css";

const TypedText = () => {
  useEffect(() => {
    const typeString = [
      "Web Designer",
      "Web Developer",
      "Front End Developer",
      "Apps Designer",
      "React & Next js Developer",
    ];

    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let typingTimeout;

    const typedTextElement = document.querySelector(`.${styles.typedText}`);
    const cursorElement = document.querySelector(`.${styles.cursor}`);

    const type = () => {
      if (currentCharIndex < typeString[currentTextIndex].length) {
        typedTextElement.textContent +=
          typeString[currentTextIndex].charAt(currentCharIndex);
        currentCharIndex++;
        typingTimeout = setTimeout(type, 100); // Delay between typing each character
      } else {
        clearTimeout(typingTimeout);
        setTimeout(backspace, 500); // Delay before starting the backspacing
      }
    };

    const backspace = () => {
      if (currentCharIndex >= 0) {
        typedTextElement.textContent = typeString[currentTextIndex].substring(
          0,
          currentCharIndex
        );
        currentCharIndex--;
        typingTimeout = setTimeout(backspace, 50); // Delay between backspacing each character
      } else {
        clearTimeout(typingTimeout);
        currentTextIndex = (currentTextIndex + 1) % typeString.length;
        setTimeout(type, 500); // Delay before starting the next text
      }
    };

    type();

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h4 className={styles.typedText}></h4>
      <span className={styles.cursor}></span>
    </div>
  );
};

export default TypedText;
