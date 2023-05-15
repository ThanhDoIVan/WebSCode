import {useState} from "react"

interface FileNavProps {
    fileName: string
    setName: () => void
    onClose: (name: string) => void
}

export function FileNav( {fileName, setName, onClose}: FileNavProps) {

    const [visible, setVisible] = useState(true)

    return (
        <>
        { visible && (fileName!=="empty") && <button 
            className="upper-btn"
            onDoubleClick={ () => { 
                setVisible(false)
                onClose(fileName)
            }}
            onClick={ () => { setName() } }>
            { fileName }
        </button> }
        </>

    )
}