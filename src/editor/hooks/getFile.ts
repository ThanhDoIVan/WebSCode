import { useEffect, useState } from "react"
import { createWindow } from '../methods/getLanguage'
import { TypeFiles, IFile } from "../models"
import { files } from "../data/files"
import { fileInstance } from "../App"

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

    function addFile(name: string, value: string, path: string | undefined) {

        const file = createWindow(name, value, path)
        files[name] = file
        console.log(file);

        if (!(fileKeys.includes(name))) {    
            setFileKeys( (prev) => [...prev, name] )
        }

        setFileName(name)
    }

	const [fileKeys, setFileKeys] = useState<string[]>(() => listFiles(files))
	
	const [fileName, setFileName] = useState("empty")

    // const [file, setFile] = useState<IFile>(files[fileName])
    let file: IFile = files[fileName]

    // useEffect( () => {
    //     //if(fileName !== "empty") {
    //         file = files[fileName]
    //         console.log("inside getfiles FILE", file)
    //         //setFile(newFile)
    //     //}
    // }, [fileName])

    return { 
        fileKeys, file, setFileName, addFile, setFileKeys, fileName
    }
}