import {Dispatch, SetStateAction, useEffect, useState} from "react"
import { IFile } from "../models"
import { files } from "../data/files"

interface FileNavProps {
    fileName: string
    // onOpen: () => void
    onClose: (name: string) => void
    setFileName: Dispatch<SetStateAction<string>>
    file: IFile
    fileNameState: string
}

export function FileNav( {fileName, onClose, file, fileNameState, setFileName}: FileNavProps) {

    const [visible, setVisible] = useState(true)

    useEffect( () => {
            file = files[fileNameState]
            console.log("inside getfiles FILE", file)
    }, [fileNameState])

    return (
        <>
        { visible && (fileName!=="empty") && <button 
            className="upper-btn"
            onDoubleClick={ () => { 
                setVisible(false)
                onClose(fileName)
                setFileName("empty")
            }}
            onClick={ () => {
                setFileName(fileName)
                console.log(`state`, fileNameState);
                console.log(`fileName`, fileName);
                console.log(`file`, file);
            }}>
            { fileName }
        </button> }
        </>

    )
}