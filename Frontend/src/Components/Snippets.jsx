import React from "react";
import Togglebtn from "./Togglebtn";

const Snippets = () => {
  return (
    <div className="h-screen">
      <div className="topp flex gap-5">
        <div className="theme">
          <label htmlFor="Colour">Theme</label>
          <select name="Colour" id="Colour">
            <option value="one">One</option>
            <option value="two">Two</option>
            <option value="custom">Custom</option>
          </select>
        </div>
        <div className="bgd">
          <label htmlFor="bg">Background</label>
          <Togglebtn />
        </div>

        <div className="theme">
          <label htmlFor="theme">Card Theme</label>
          <Togglebtn />
        </div>

        <div className="no">
          <label htmlFor="line">Line Numbers</label>
          <Togglebtn />
        </div>

        <div className="font">
          <label htmlFor="fntsize">Font size</label>
          <select name="fntsize" id="fntsize">
            <option value="o">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>

        <div className="round">
          <label htmlFor="radius">Rounded Corners</label>
          <Togglebtn />
        </div>

        <div className="padding">
          <label htmlFor="space">Padding</label>
          <select name="space" id="space">
            <option value="n">None</option>
            <option value="n">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
        </div>

        <div className="lng">
          <label htmlFor="lang">Language</label>
          <select name="Language" id="Language">
            <option value="a">Auto Detect (Default)</option>
            <option value="j">JavaScript</option>
            <option value="">C</option>
            <option value="">C++</option>
            <option value="">Python</option>
            <option value="">Java</option>
            <option value="">HTML</option>
            <option value="">CSS</option>
          </select>
        </div>

        <div className="s">
          <label htmlFor="st">Style</label>
          <select name="st" id="st">
            <option value="">Mac</option>
            <option value="">VS Code</option>
            <option value="">Minimal (No Header)</option>
          </select>
        </div>

        <div className="save">
          <button>Download</button>
        </div>
      </div>

      <div className="txt flex h-[45%] items-center justify-center">
        <textarea
          className="min-h-40 min-w-100"
          name=""
          id=""
          placeholder="Enter your code here.."
        ></textarea>
      </div>

      <div className="preview flex justify-center">
        <div className="bg-red-500 min-h-50 min-w-100 flex justify-center items-center">
        <pre className="bg-gray-500 h-30 min-w-80 flex items-center text-white whitespace-pre-wrap font-mono p-5">
          <code>
            {`//Your code 
function sayHello(){
  console.log("Hello World!")
}`}
          </code>
        </pre>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
