import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { fileInstance } from "../../../editor/App";

function FileComponent(props: { 
								path 		    : string, 
								text 		    : string, 
								index 		    : number, 
								selectState     : String, 
								setSelectState  : Dispatch<SetStateAction<String>>,
								setSharedFiles  : Dispatch<SetStateAction<fileInstance | undefined>>,
								sharedFiles     : fileInstance | undefined
							  })
{
	const divRef = useRef<HTMLDivElement>(null);
	
	const isSelected   : boolean = props.path === props.selectState.valueOf();
	const color        : string = isSelected ? '#efd777' : '#f5f5f5';
	const pathElements : string[] = props.path.split('/');
	const length 	   : number = pathElements.length - 1;

	// const setFiles = (currentFile: fileInstance):fileInstance[] => {
	// 	let array: fileInstance[] = []
	// 	for (let i = 0; i < props.sharedFiles.length; i++) {
	// 		array.push(props.sharedFiles[i])
	// 	}

	// 	if (array.find( (item) => { return item.path === currentFile.path}) === undefined) {
	// 		array.push(currentFile)
	// 	}

	// 	return array
	// }

	const handleClick = () =>
	{
		props.setSelectState(new String(props.path));
		const currentFile: fileInstance = {
			name: pathElements[length],
			path: props.path,
			value: props.text
		}

		// props.setSharedFiles(setFiles(currentFile))
		props.setSharedFiles(currentFile)
	}

	const setName = () => 
	{
		return pathElements[length];
	}
	
	return(
		<div  
			key={props.index} 
			onClick={handleClick} 
			//onFocus={handleClick}
			ref={divRef} 
			tabIndex={props.index}
			style={{ backgroundColor: color, paddingLeft: 10 * length }}>

			<p>{setName()}</p>
		
		</div>
	);
}

export default FileComponent;
