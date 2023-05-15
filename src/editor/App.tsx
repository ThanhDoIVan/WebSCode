import { useEffect, useRef, useState } from 'react'
import Explorer from '../explorer/subComponents/Explorer'
import { AddFile } from './components/AddFile'
import { EditorField } from './components/EditorField'
import { FileGetValue } from './components/FileGetValue'
import { FileNav } from './components/FileNav'
import { file1, file2, file3 } from './data/passFile'
import { useFiles } from './hooks/getFile'
import { useValue } from './hooks/getValue'

export interface fileInstance {
	name: string
	value: string
	path: string
} 


// delete files['untitled']

function App() {
	
	const { fileKeys, file, setFileName, setFileKeys, addFile } = useFiles()
	
	const { handleEditorDidMount, getEditorInfo, saveEditorInfo} = useValue()

	const isSaved = useRef(false)

	if (!isSaved.current) {
		saveEditorInfo(file.name, "path/file")
		isSaved.current = true
	}

	const [sharedFiles, setSharedFiles] = useState<fileInstance>()

	useEffect( () => {
		if (sharedFiles !== undefined) {
			addFile(sharedFiles.name, sharedFiles.value)
			console.log(sharedFiles)
		}
	}, [sharedFiles])

	return (
		<div className='container'>

			<div className="explorer-container">
				<Explorer setSharedFiles={setSharedFiles} sharedFiles={sharedFiles}/>
			</div>

			<div className='editor-container'>
				<div className='btn-wrapper'>
					<div className='nav-btn'>
						{ fileKeys.map( (name) =>
						<FileNav
							fileName={ name }
							setName={ () => setFileName(name) }
							onClose={ () => { 
								setFileKeys(fileKeys.filter( (key) => key !== name ))
								setFileName("empty")
							} }
							key={ name }
						/> ) }
					</div>
					{/* Можно убрать FileGetValue */}
					<FileGetValue 
						getValue = { () => {getEditorInfo(file.name, "path/file")} }
					/> 
				</div>

				<EditorField file={file} editorMount={handleEditorDidMount}/>

				<AddFile id='add-1' file={file1.name} setKeys={() => addFile(file1.name, file1.value)}/>

				<AddFile id='add-2' file={file2.name} setKeys={() => addFile(file2.name, file2.value)}/>

				<AddFile id='add-3' file={file3.name} setKeys={() => addFile(file3.name, file3.value)}/>

			</div>
		</div>
	)
}

export default App
