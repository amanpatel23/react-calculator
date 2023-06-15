import React, { useContext } from 'react';
import { calcContext } from '../../contexts/calcContext';
import buttons from '../../buttons';
import Button from '../../components/Button/Button';
import styles from './Calculator.module.css';

function Calculator() {

  const { inputString } = useContext(calcContext);

  return (
    <>
    <div className={styles.calc__outer}>
      <div className={styles.calc__inner}>
        <div className={styles.calc__ff}>
          <div className={styles.calc__screen}>
            <p>{inputString}</p>
          </div>
        </div>
        <div className={styles.calc__ss}>
          <div className={styles.calc__buttons}>
            {buttons.map((button, index) => <Button key={index} buttonText={button} />)}
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Calculator;