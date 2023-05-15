import React from 'react';

interface AddFileProps {
    id: string         
    file: string             // убрать потом
    setKeys: () => void
}

export function AddFile( {setKeys, id, file}: AddFileProps) {
    return (       
        <button 
            className='upper-btn add-btn'
            id={ id }
            onClick={ () => setKeys()}>
            { file }
        </button>
    )
}