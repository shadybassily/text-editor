import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { useState } from 'react';
// styling
import './editor.css';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//icons

export default function TextEditor() {
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  
   return (
      <div>
         <Editor
            editorState={editorState}
            toolbar={toolbarOptions}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            onEditorStateChange={setEditorState}
         />
      </div>
   );
}
