import "../styles/Calc.css";
import { Key } from "./Key";
import { Screen } from "./Screen";
import { useState } from "react";

export function Calc() {
  const [screen, setScreen] = useState("");

  const addInput = val => {
    setScreen(screen + val);
  };

  const evaluate = () => {
    setScreen(eval(screen))
  };

  return (
    <div className="calc">
      <Screen input={screen} />
      <Key onPress={addInput}>1</Key>
      <Key onPress={addInput}>2</Key>
      <Key onPress={addInput}>3</Key>
      <Key onPress={addInput}>+</Key>
      <Key onPress={addInput}>4</Key>
      <Key onPress={addInput}>5</Key>
      <Key onPress={addInput}>6</Key>
      <Key onPress={addInput}>-</Key>
      <Key onPress={addInput}>7</Key>
      <Key onPress={addInput}>8</Key>
      <Key onPress={addInput}>9</Key>
      <Key onPress={addInput}>*</Key>
      <Key onPress={evaluate}>=</Key>
      <Key onPress={addInput}>0</Key>
      <Key onPress={addInput}>.</Key>
      <Key onPress={addInput}>/</Key>
      <Key onPress={()=>setScreen("")}>CE</Key>
    </div>
  );
}
