import React, { useContext } from "react";
import createrRandArr from "../util/createrRandArr";
import { BarsContext } from "./BarsContext";

import { InputContainer } from "./styles";

import { Config } from "../global.config";
export default function Input() {
  const { algo, setAlgo, bars, setBars, setSortActive, sortActive } =
    useContext(BarsContext);

  return (
    <InputContainer>
      <h2>
        Array Size: <span>{bars.length}</span>
      </h2>
      <input
        type="range"
        min={Config.INPUT_RANGE_MIN}
        max={Config.INPUT_RANGE_MAX}
        value={bars.length}
        onChange={(e) => setBars(createrRandArr(e.target.value))}
      />

      <div className="btns-wrapper">
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="Insertion">Insertion</option>
          <option value="Bubble">Bubble</option>
          <option value="Selection">Selection</option>
        </select>
        <button onClick={(e) => setBars(createrRandArr(bars.length))}>
          New Array
        </button>
        <button className="btn-sort" onClick={() => setSortActive(!sortActive)}>
          Sort
        </button>
      </div>
    </InputContainer>
  );
}
