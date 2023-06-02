import React from "react";

interface FileGetValue {
    getValue: () => void 
}

export function FileGetValue( {getValue}: FileGetValue) {
    return (
        <button 
            className="upper-btn"
            onClick={ () => {
                getValue()
            } }>
            Save File
        </button>
    )
}