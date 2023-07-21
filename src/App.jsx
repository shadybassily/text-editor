import Editor from './components/Organisms/editor/Editor';
import TextReview from './components/Organisms/text-review/TextReview';
import useTextEditor from './hooks/useTextEditor';
import './App.css';
function App() {
   const { editorState, setEditorState, toolbarOptions, convertToHTML } = useTextEditor();

   return (
      <div>
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
