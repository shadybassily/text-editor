import { useContext, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import useTextEditor from '@/utils/hooks/useTextEditor';

import AddStar from '@/components/Molecules/Editor/custom-options/add-star/AddStar';
import AddTab from '@/components/Molecules/Editor/custom-options/add-tab/AddTab';
import DeleteTab from '@/components/Molecules/Editor/custom-options/delete-tab/DeleteTab';
import Tabs from '@/components/Molecules/Editor/tabs/Tabs';
// styling
import './editor.css';
import '~/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { TabDispatchContext, TabContext } from '@/App';

export default function TextEditor() {
   const { editorState, setEditorState, toolbarOptions, convertToHTML, displayInEditor } =
      useTextEditor();
   const { selectedTab } = useContext(TabContext);
   const dispatch = useContext(TabDispatchContext);

   const handleTabSelect = (tab) => {
      //update content of prev tab
      dispatch({
         type: 'update',
         payload: { ...selectedTab, content: convertToHTML() },
      });
      //select tab
      dispatch({
         type: 'select',
         payload: tab,
      });
   };

   useEffect(() => {
      let contentToDisplay = selectedTab?.content || '';
      displayInEditor(contentToDisplay);
   }, [selectedTab]);

   return (
      <div className="editor-container">
         <Tabs handleTabSelect={handleTabSelect} />
         <Editor
            editorState={editorState}
            toolbar={toolbarOptions}
            onEditorStateChange={setEditorState}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
            toolbarCustomButtons={[
               <AddStar />,
               <AddTab editorContent={convertToHTML()} handleTabSelect={handleTabSelect}/>,
               <DeleteTab />,
            ]}
         />
      </div>
   );
}
