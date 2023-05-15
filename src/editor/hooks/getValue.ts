import {useRef} from 'react'
import * as monaco from 'monaco-editor'

export function useValue() {

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null) 			// для сохранения значений

	function handleEditorDidMount (editor: monaco.editor.IStandaloneCodeEditor | null) {
		editorRef.current = editor
	}

	function getEditorValue() {
		if (editorRef.current !== null) {
			alert(editorRef.current.getValue())
			console.log(editorRef.current.getValue())

			// return editorRef.current.getValue()
		}
	}

	function getEditorInfo(name: string, path: string) {
		getEditorValue()
		console.log(name)
		console.log(path)

		// return {name, path, value}
	}

	function saveEditorInfo(name: string, path: string) {
		document.addEventListener("keydown", (event: KeyboardEvent) => {
			if (event.key === 's' && event.ctrlKey) {
				event.preventDefault()
				getEditorInfo(name, path)
				console.log('----------------');
				// console.log(123);
			}
		})
	}

    return {handleEditorDidMount, getEditorInfo, saveEditorInfo}
}
