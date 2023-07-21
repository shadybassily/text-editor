import Editor from './components/Organisms/editor/Editor';
import TextReview from './components/Organisms/text-review/TextReview';
import useTextEditor from './hooks/useTextEditor';
import './App.css';
import CopyRights from './components/Organisms/copy-rights/CopyRights';
function App() {
   const { editorState, setEditorState, toolbarOptions, convertToHTML } = useTextEditor();

   return (
      <div>
         <CopyRights />
         <Editor
            editorState={editorState}
            setEditorState={setEditorState}
            toolbarOptions={toolbarOptions}
         />
         <TextReview html={convertToHTML()} />
      </div>
   );
}

export default App;
