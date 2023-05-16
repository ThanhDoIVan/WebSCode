import {useRef} from 'react'
import * as monaco from 'monaco-editor'
import { fileInstance } from '../App'

export function useValue() {

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null) 			// для сохранения значений

	function handleEditorDidMount (editor: monaco.editor.IStandaloneCodeEditor | null) {
		editorRef.current = editor
	}

	function getEditorValue(): string {
		if (editorRef.current !== null) {
			alert (editorRef.current.getValue())
			return editorRef.current.getValue()
		}
		else {
			return ""
		}
	}

	function getEditorInfo(name: string, path: string | undefined): fileInstance {
		const value = getEditorValue()

		const currentFile: fileInstance = {
			name: name,
			value: value,
			path: path
		}

		return currentFile
	}

    return {handleEditorDidMount, getEditorInfo}
}
