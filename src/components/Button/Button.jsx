import React, { useContext } from "react";
import { calcContext } from "../../contexts/calcContext";
import styles from "./Button.module.css";

function Button({ buttonText }) {
  const { buttonClickHanlder } = useContext(calcContext);

  const buttonClasses = `${styles.button__outer} ${
    buttonText === "C" || buttonText === "0" ? styles.special__btn : ""
  }`;

  let displayText = buttonText;
  if (displayText === "/") {
    displayText = "÷";
  } else if (displayText === "*") {
    displayText = "x";
  }

  return (
    <div onClick={() => buttonClickHanlder(buttonText)} className={buttonClasses}>
      <div className={styles.button__inner}>
        <p>{displayText}</p>
      </div>
    </div>
  );
}

export default Button;
