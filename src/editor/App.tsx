import { useEffect, useRef, useState } from 'react'
import Explorer from '../explorer/subComponents/Explorer'
import { EditorField } from './components/EditorField'
import { FileGetValue } from './components/FileGetValue'
import { FileNav } from './components/FileNav'
import { useFiles } from './hooks/getFile'
import { useValue } from './hooks/getValue'
import { files } from './data/files'

export interface fileInstance {
	name: string
	value: string
	path: string | undefined
}

// delete files['untitled']

function App() {

	const { fileKeys, file, setFileName, setFileKeys, addFile, fileName} = useFiles()

	const { handleEditorDidMount, getEditorInfo } = useValue()

	const [sharedFiles, setSharedFiles] = useState<fileInstance>()

	const fileInstance = useRef<fileInstance>();

	useEffect(() => {
		if (sharedFiles !== undefined) 
		{
			fileInstance.current = sharedFiles;
			addFile(sharedFiles.name, sharedFiles.value, sharedFiles.path)
			console.log("shared", sharedFiles)
		}
		else
		{
			if (fileInstance.current !== undefined) 
			{
				setFileKeys(fileKeys.filter((key) => key !== fileInstance.current?.name));
				delete files[fileInstance.current.name];
				fileInstance.current = undefined;
				console.log("Keys", fileKeys);
				setFileName("empty");
			}
		}
	}, [sharedFiles])


	return (
		<div className='container'>

			<div className="explorer-container">
				<Explorer setSharedFiles={setSharedFiles} sharedFiles={sharedFiles} />
			</div>

			<div className='editor-container' onKeyDown={ (event) => {
				if (event.code === 'KeyS' && event.ctrlKey) {
					event.preventDefault()
					// debugger;
					const currentFile = getEditorInfo(file.name, file.path)
					setSharedFiles(currentFile)
				}
			}}>
				<div className='btn-wrapper'>
					<div className='nav-btn'>
						{fileKeys.map((name) =>
							<FileNav
								fileName={name}
								file={file}
								setFileName={setFileName}
								fileNameState={fileName}
								onClose={() => {
									setFileKeys(fileKeys.filter((key) => key !== name))
								}}
								key={name}
							/>)}
					</div>
					{/* Можно убрать FileGetValue */}
					<FileGetValue
						getValue={() => {
							const currentFile = getEditorInfo(file.name, file.path)
							setSharedFiles(currentFile)
						}}
					/>
				</div>

				<EditorField file={file} editorMount={handleEditorDidMount} />

			</div>
		</div>
	)
}

export default App
