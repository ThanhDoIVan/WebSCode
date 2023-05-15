import { IFile } from "../models";

export function createWindow(name: string, value: string): IFile {

    let definedLanguage = ''

    switch(true) {

        case (name.includes(".css")):
            definedLanguage = "css"
            break

        case (name.includes(".html") || name.includes(".htm")):
            definedLanguage = "html"
            break

        case (name.includes(".cpp") || (name.includes(".cc")) ||
              name.includes(".hpp") || (name.includes(".hh")) || 
              name.includes(".hxx")):
            definedLanguage = "cpp"
            break

        case (name.includes(".cs")):
            definedLanguage = "csharp"
            break

        case (name.includes(".c") || name.includes(".h")):
            definedLanguage = "c"
            break

        case (name.includes(".java")):
            definedLanguage = "java"
            break   
            
        case (name.includes(".json")):
            definedLanguage = "json"
            break
            
        case (name.includes(".js")):
            definedLanguage = "javascript"
            break

        case (name.includes(".php")):
            definedLanguage = "php"
            break   

        case (name.includes(".py")):
            definedLanguage = "python"
            break   
        
        case (name.includes(".rb")):
            definedLanguage = "ruby"
            break   

        case (name.includes(".rs")):
            definedLanguage = "rust"
            break 
        
        case (name.includes(".sql")):
            definedLanguage = "sql"
            break 

        case (name.includes(".ts")):
            definedLanguage = "typescript"
            break 

        case (name.includes(".xml")):
            definedLanguage = "xml"
            break

        case (name.includes(".yaml")):
            definedLanguage = "yaml"
            break

        default:
            definedLanguage = "undefined"	
            break        
    }

    return {
        name: name,
        language: definedLanguage,
        value: value
    }
}
