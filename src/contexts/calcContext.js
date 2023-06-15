import { createContext, useState } from "react";

const calcContext = createContext();

function CalcProvider({ children }) {
  const [inputString, setInputString] = useState("");

  const evaluateExpression = () => {
    try {
      const result = eval(inputString);
      setInputString(result);
    } catch (error) {
      setInputString("Error");
    }
  };

  const buttonClickHanlder = (buttonText) => {
    if (buttonText === "C") {
      setInputString("");
    } else if (buttonText === "=") {
      evaluateExpression();
    } else {
      setInputString((prevInputString) => prevInputString + buttonText);
    }
  };

  return (
    <calcContext.Provider value={{ inputString, buttonClickHanlder }}>
      {children}
    </calcContext.Provider>
  );
}

export default CalcProvider;
export { calcContext };
