import React , {useState} from 'react'

function ColorPicker(){

    let [color, setColor] = useState('#ffffff');

    return (
        <div className='main-container'>
            <p>Color picker</p>

            <div style={{ backgroundColor: color  }} className="SndContainer">
                Selected Color : {color}
            </div>

            <p className='below-div'>Select a Color</p>
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
        </div>
    );
}

export default ColorPicker;