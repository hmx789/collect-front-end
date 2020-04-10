import React from 'react';
import "./centering.css";
function Login(props) {
  const isRedSquare = true;
  return isRedSquare ? 
    (<div class="red-square"></div>)
    : (
      <>
      <h1>Centering with CSS</h1>
      <h3>Text-Align Method</h3>
      <div class="blue-square-container">
        <div class="blue-square"></div>
      </div>

      <h3>Margin Auto Method</h3>
      <div class="yellow-square"></div>

      <h3>Absolute Positioning Method</h3>
      <div class="green-square"></div>
      </>
  );
}

export default Centering;