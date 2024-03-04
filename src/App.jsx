import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import Editor from "@monaco-editor/react"
import './App.css'
const files = {
  "script.py": {
    name: "script.py",
    language:"python",
    value:"Write your code here"
  },
  "index.html":{
    name: "index.html",
    language:"html",
    value:"<div> </div>"
  }
   
}

function App() {
  const [fileName, setfileName] = useState("script.py")
  const editorRef = useRef(null);
  const file = files[fileName];

  function handleEditorDidMount(editor, monaco){
    editorRef.current = editor;
  }
  function getEditorValue(){
    alert(editorRef.current.getValue());
  }

  return (
    <div className="App">
      <button onClick={()=> setfileName("index.html")}> 
        Switch to index.html
      </button>
      <button onClick={()=> setfileName("script.py")}> 
        Switch to script.py
      </button>
      <button onClick={() => getEditorValue()}>
        Get Editor value
      </button>
      <Editor
      height="100vh"
      width="100%"
      theme="vs-dark"
      onMount={handleEditorDidMount}
      path= {file.name}
      defaultLanguage={file.language}
      defaultValue={file.value}
      />
      </div>
     
  )
}

export default App
