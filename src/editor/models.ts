export interface IFile {
	name: string
	language: string | undefined
	value: string
}

export type TypeFiles = Record<string, IFile>
