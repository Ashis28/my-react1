
import React, { useState, useEffect } from 'react';

function DigitalClock() {
    let [time, setTime] = useState(new Date());

    // Helper function to pad numbers to two digits
    const pad = (num) => num.toString().padStart(2, '0');

    useEffect(() => {
        const intervalId = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Get hours, minutes, seconds
    let hours = time.getHours();
    let minutes = pad(time.getMinutes());
    let seconds = pad(time.getSeconds());

    // Determine AM/PM and convert to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    const displayHours = pad(hours);

    return (
        <div className="main-container">
            <div className="clock-container">
                <span>{`${displayHours}:${minutes}:${seconds} ${ampm}`}</span>
            </div>
        </div>
    );
}

export default DigitalClock;