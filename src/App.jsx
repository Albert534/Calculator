import React from "react";
import { useState } from "react";
const App = () => {
  const [value, setValue] = useState("0");
  const handleClick = (e) => {
    setValue((prev) => prev.concat(e.target.id));
  };
  const clearAll = () => setValue("");
  const deleteOne = () => {
    console.log([...value]);
    setValue(value.slice(0, -1));
  };
  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch (error) {
      setValue("Error");
    }
  };

  function handleKeyPress(e) {
    const key = e.key;
    const button = document.getElementById(key);
    if (button) {
      button.click();
    }
  }
  return (
    <div className="min-h-screen w-screen flex flex-col items-center gap-10 px-3 py-10">
      <h1 className="text-4xl text-indigo-500 font-bold tracking-wider ">
        Calculator
      </h1>
      <div className="bg-cyan-400 p-4 max-w-96 rounded-md border-4 border-blue-200 shadow-[0_1px_6px_5px#000000]">
        <input
          className="bg-blue-900/80 rounded-md p-4 w-full text-2xl font-semibold text-white text-right tracking-wider border-2 border-blue-200  shadow-inner shadow-current "
          value={value}
          disabled
        ></input>
        <p className="bg-sky-200 inline-block rounded-full px-3 py-1 my-2 text-indigo-500 text-sw track-wider border border-blue-200">
          Albert's Calculator
        </p>
        <div onKeyDown={handleKeyPress} className="grid grid-cols-4 gap-2">
          <button onClick={clearAll} type="button" className="operator">
            AC
          </button>
          <button onClick={deleteOne} type="button" className="operator">
            DEL
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="."
          >
            .
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="/"
          >
            /
          </button>
          <button onClick={handleClick} type="button" className="number" id="7">
            7
          </button>
          <button onClick={handleClick} type="button" className="number" id="8">
            8
          </button>
          <button onClick={handleClick} type="button" className="number" id="9">
            9
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="*"
          >
            *
          </button>

          <button onClick={handleClick} type="button" className="number" id="4">
            4
          </button>
          <button onClick={handleClick} type="button" className="number" id="5">
            5
          </button>
          <button onClick={handleClick} type="button" className="number" id="6">
            6
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="-"
          >
            -
          </button>
          <button onClick={handleClick} type="button" className="number" id="1">
            1
          </button>
          <button onClick={handleClick} type="button" className="number" id="2">
            2
          </button>
          <button onClick={handleClick} type="button" className="number" id="3">
            3
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="operator"
            id="+"
          >
            +
          </button>
          <button
            onClick={handleClick}
            type="button"
            className="number"
            id="00"
          >
            00
          </button>
          <button onClick={handleClick} type="button" className="number" id="0">
            0
          </button>
          <button onClick={calculate} type="button" className="operator" id="=">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
