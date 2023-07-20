import { Editor } from 'react-draft-wysiwyg';
import useTextEditor from '../../../hooks/useTextEditor';
// styling
import './editor.css';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

export default function TextEditor() {
   const { editorState, setEditorState, toolbarOptions } = useTextEditor();
   return (
      <div className="editor-container">
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
