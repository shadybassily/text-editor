import { Editor } from 'react-draft-wysiwyg';
import AddStar from '@/components/Molecules/Editor/custom-options/add-star/AddStar';
import Tabs from '@/components/Molecules/Editor/tabs/Tabs';
// styling
import './editor.css';
import '~/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default function TextEditor({ editorState, setEditorState, toolbarOptions }) {
   return (
      <div className="editor-container">
         <Tabs />
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
