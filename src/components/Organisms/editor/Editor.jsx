import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import { useState } from 'react';
// styling
import './editor.css';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//icons
import bold from '../../../assets/editor-icons/bold.png';

export default function TextEditor() {
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

   const toolbarOptions = {
      options: ['inline', 'list', 'colorPicker', 'image','fontFamily',  'history'],
      inline: {
         className: 'toolbar-inline-options',
         component: undefined,
         dropdownClassName: undefined,
         options: ['bold', 'italic', 'underline'],
         bold: { icon: bold },
      },
      list: {
         inDropdown: false,
         className: undefined,
         component: undefined,
         dropdownClassName: undefined,
         options: ['unordered', 'ordered'],
       },
      fontFamily: {
         // to add more fonts, make sure to use the corresponding CDN in index.html
         options: [
            'Arial',
            'Georgia',
            'Lumanosimo',
            'Impact',
            'Tahoma',
            'Times New Roman',
            'Verdana',
         ],
         className: undefined,
         component: undefined,
         dropdownClassName: 'dropdown',
      },
   };

   return (
      <div className='editor-container'>
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
