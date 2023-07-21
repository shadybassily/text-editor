import { Editor } from 'react-draft-wysiwyg';
import useTextEditor from '../../../hooks/useTextEditor';
// styling
import './editor.css';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import AddStar from '../../Molecules/Editor/customOptions/addStart/AddStar';
import { useEffect } from 'react';

export default function TextEditor({ editorState, setEditorState, toolbarOptions }) {
   return (
      <div className="editor-container">
         <Editor
            editorState={editorState}
            toolbar={toolbarOptions}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            toolbarCustomButtons={[<AddStar />]}
         />
      </div>
   );
}
