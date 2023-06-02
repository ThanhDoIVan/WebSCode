import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Inputs from "./Inputs";
import ExplorerStructure from "./ExplorerStructureElements/ExplorerStructure";
import { fileInstance } from "../../editor/App";
import { VirtualFileSystemUpdater } from "../classes/VirtualFilesSystem/VirtualFileSystemUpdater";
import File from "../classes/FileSystemElements/File";

function Explorer( props: { 
							setSharedFiles: Dispatch<SetStateAction<fileInstance | undefined>>,
							sharedFiles: fileInstance | undefined
						  }) 
{
	const [structureState, setStructureState] = useState<boolean>(true);
	const [inputServiceState, setInputServiceState] = useState<boolean>(false);
	const [operationType, setOperationType] = useState<string>("");

	useEffect(() =>
	{
		if (props.sharedFiles !== undefined)
		{
			VirtualFileSystemUpdater.changeFile(props.sharedFiles?.path!, new File(props.sharedFiles?.name!, props.sharedFiles?.value!, props.sharedFiles?.path!));
		}
	}, [props.sharedFiles]);

	return (
		<div className="Explorer">
			<Inputs 
				setStructureState={setStructureState} 
				setCreatorStatus={setInputServiceState}
				setElementType={setOperationType}
			/>

			<ExplorerStructure 
				structureState={structureState}
				setStructureState={setStructureState} 
				inputServiceState={inputServiceState} 
				setInputServiceState={setInputServiceState} 
				operationType={operationType}
				setSharedFiles={props.setSharedFiles}
				sharedFiles={props.sharedFiles}
			/>
		</div>
	);		
}

export default Explorer;
