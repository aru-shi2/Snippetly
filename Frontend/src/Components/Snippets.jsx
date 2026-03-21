import React from 'react'
import Togglebtn from './Togglebtn'

const Snippets = () => {
  return (
    <div>
      <div className="topp">
        <div className="theme">
            <label htmlFor="Colour">Color:</label>
            <select name="Colour" id="Colour">
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="custom">Custom</option>
            </select>
        </div>
        <div className="bgd">
          <Togglebtn/>
        </div>

      </div>
    </div>
  )
}

export default Snippets
