
import React from 'react';

function Button() {
    const styles = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        fontWeight: "bold",
        transition: "background 0.2s"
    };

    return (
        <button style={styles}>
            Click me
        </button>
    );
}

export default Button;