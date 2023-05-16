export interface IFile {
	name: string
	language: string | undefined
	value: string
	path: string | undefined
}

export type TypeFiles = Record<string, IFile>
