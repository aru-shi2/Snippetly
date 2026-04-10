import React from "react";
import { useState } from "react";
import Togglebtn from "./Togglebtn";
import Footer from "./Footer";

const Snippets = () => {

  const [text, settext] = useState("")
  const [bgToggle, setbgToggle] = useState(true)
  const [themeToggle, setthemeToggle] = useState(false)
  const [lineToggle, setlineToggle] = useState(false)
  

  return (
    <div className="h-screen flex flex-col gap-10">
      <div className="topp flex gap-5 p-1">
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
          <Togglebtn toggled={bgToggle}
          isOn={()=>setbgToggle(!bgToggle)}
          />
        </div>

        <div className="theme">
          <label htmlFor="theme">Card Theme</label>
          <Togglebtn toggled={themeToggle}
          isOn={()=>setthemeToggle(!themeToggle)}/>
        </div>
        <div className="no">
          <label htmlFor="line">Line Numbers</label>
          <Togglebtn toggled={lineToggle}
          isOn={()=>setlineToggle(!lineToggle)}/>
        </div>

        <div className="font">
          <label htmlFor="fntsize">Font size</label>
          <select name="fntsize" id="fntsize">
            <option value="o">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
          </select>
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

        <div className="txt min-w-md min-h-[30%] max-w-3xl flex mx-auto justify-center ">
        <textarea
        onChange={(e)=>settext(e.target.value)}
          className="w-full border p-2"
          name=""
          id=""
          placeholder="Enter your code here.."
        ></textarea>
      </div>

      <div className="preview flex min-w-md h-auto mx-auto justify-center">
      <div className={`${bgToggle?"bg-red-500":"bg-transparent"} w-full p-6 flex justify-center items-center`}>
          <pre className="visible bg-gray-500 overflow-x-auto w-full flex items-center text-white whitespace-pre-wrap font-mono p-5">
            <code>
              {text?text:`//Your code 
function sayHello(){
  console.log("Hello World!")
}`}
            </code>
          </pre>
        </div>
      </div>

      <div className="foot bottom-0 fixed p-2">
        <Footer/>
      </div>
    </div>
  );
};

export default Snippets;
