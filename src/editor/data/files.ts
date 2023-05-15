import { TypeFiles } from "../models";

export const files: TypeFiles = {
	"empty": {
		name: "",
		language: "",
		value: ""
	},
	"index.js": {
		name: "index.js",
		language: "javascript",
		value: "console.log('Hello world')"
	},
	"index.html": {
		name: "index.html",
		language: "html",
		value: "<h1>Hello world</h1>"
	},
	"untitled": {
		name: "untitled",
		language: undefined,
		value: ""	
	}
}