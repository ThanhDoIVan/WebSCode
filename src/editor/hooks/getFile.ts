import { useState } from "react"
import { createWindow } from '../methods/getLanguage'
import { TypeFiles, IFile } from "../models"
import { files } from "../data/files"

export function useFiles() {

	function listFiles(files: TypeFiles): string[] {
	
		const keys: string[] = []
	
		for (const key in files) {
			keys.push(key)
			console.log(files[key]); 		// all objects
		}
        console.log(`----------------`);
	
		return keys
	}

    function addFile(name: string, value: string) {

        if (!(fileKeys.includes(name))) {

            const file = createWindow(name, value)
            files[name] = file
    
            setFileKeys( (prev) => [...prev, name] )
            setFileName(name)
        }
        else {
            setFileName(name)
        }
    }

	const [fileKeys, setFileKeys] = useState<string[]>(() => listFiles(files))
	
	const [fileName, setFileName] = useState("index.js")
	const file: IFile = files[fileName]

    // const [file_name, setFile_Name] = useState("")
    // const [file_value, setFile_Value] = useState("")

    return { 
        fileKeys, file, setFileName, addFile, setFileKeys
        // file_name, file_value, setFile_Name, setFile_Value
    }
}