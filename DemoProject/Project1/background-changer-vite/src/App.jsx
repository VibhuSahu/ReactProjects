import { useState } from 'react';
import './App.css';

const data = {
  "colors": [
    { "name": "Red", "hex": "#FF0000" },
    { "name": "Green", "hex": "#00FF00" },
    { "name": "Blue", "hex": "#0000FF" },
    { "name": "Black", "hex": "#000000" },
    { "name": "White", "hex": "#FFFFFF" },
    { "name": "Orange", "hex": "#FFA500" },
    { "name": "Purple", "hex": "#800080" },
    { "name": "Pink", "hex": "#FFC0CB" }
  ]
};

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#9dae11');

  const toggleBackgroundColor = (colorHex) => {
    setBackgroundColor(colorHex);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen min-w-full relative' style={{ backgroundColor }}>
      <h1 className='text-3xl font-bold mb-4 text-gray-500'>Background Color Changer</h1>


      <div className='flex flex-row gap-4 items-center justify-center bg-gray-100 p-6 rounded shadow-lg bottom-5 absolute'>
        {data.colors.map((color, index) => (
          <button
            key={index}
            className='px-4 py-2 bg-gray-200 rounded text-gray-500 hover:bg-gray-300 transition-colors'
            onClick={() => toggleBackgroundColor(color.hex)}
            style={{ backgroundColor: color.hex, fontWeight: "bold" }}
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
