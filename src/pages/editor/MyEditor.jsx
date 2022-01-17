import React, { useState } from 'react'
import {Editor, EditorState} from 'draft.js'
// import 'draft.js/dist/draft.css'

export default function MyEditor() {
    const [editorState, setEditorState] = useState()
    return (
        <Editor editorState={editorState} onChange={(e)=>setEditorState(e.target.value)} />
            
    )
}
