import React, { Dispatch, SetStateAction, DragEvent, useState } from "react";
//import "../styles/dropzone.css";
import { RootBuilder } from "../classes/VirtualFilesSystem/RootBuilder";
import LocalStorageWorker from "../classes/VirtualFilesSystem/LocalStorageWorker";

function Inputs(props : { 
                            setStructureState : Dispatch<SetStateAction<boolean>>,
                            setCreatorStatus  : Dispatch<SetStateAction<boolean>>,
                            setElementType    : Dispatch<SetStateAction<string>>
                        })
{
    const inputHandler = async (event : DragEvent<HTMLDivElement>) => 
    {
        event.preventDefault();

        const newEntry : FileSystemEntry | null = event.dataTransfer.items[0].webkitGetAsEntry();

        if (newEntry !== null)
        { 
            RootBuilder.entry = newEntry;
            props.setStructureState(false);
        }
    }

    const addElement = (elementType : string) =>
    {
        props.setCreatorStatus(true);
        props.setElementType(elementType);
    }

    return(
        <div>
            <div draggable className="dropzone" onDrop={inputHandler} onDragOver={(event) => { event.preventDefault(); }}>
                <div>Drop Files Here</div>
            </div>

            <div className="explorer-btn-container">
                <button className="explorer-btn" onClick={() => LocalStorageWorker.saveProject()}>Save project</button>
                <button className="explorer-btn" onClick={() => addElement('ADD FILE')}>Add file</button>
                <button className="explorer-btn" onClick={() => addElement('ADD DIRECTORY')}>Add directory</button>
            </div>
        </div>
    );
}

export default Inputs;
