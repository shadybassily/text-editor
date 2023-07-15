import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { useState } from 'react';
// styling
import './editor.css';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//icons
import bold from "../../../assets/editor-icons/bold.png"

export default function TextEditor() {
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

   const toolbarOptions = {
      options: ['inline', 'list', 'colorPicker', 'image', 'history'],
      inline: {
         className: 'toolbar-inline-options',
         component: undefined,
         dropdownClassName: undefined,
         options: ['bold', 'italic', 'underline'],
         bold: { icon: bold },
      },
   };

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
