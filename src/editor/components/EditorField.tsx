import React from 'react';
import Editor from '@monaco-editor/react'
import { IFile } from "../models";
import * as monaco from 'monaco-editor'

interface EditorProps {
    file: IFile
    editorMount: (editor: monaco.editor.IStandaloneCodeEditor | null) => void
}

export function EditorField( {file, editorMount}: EditorProps) {
	
    return (
        <div className="editor-window">
				<Editor
					options={{
						letterSpacing: 1,
						fontFamily: 'JetBrains Mono',
						fontSize: 20
					}}
					theme="vs-dark"
					path={file.name}
					defaultLanguage={file.language}
					defaultValue={file.value}
					onMount={editorMount}
				/>
			</div>
    )
}