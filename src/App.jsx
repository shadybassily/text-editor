import { createContext, useReducer, useState } from 'react';

import Editor from '@/components/Organisms/editor/Editor';
import TextReview from '@/components/Organisms/text-review/TextReview';
import useTextEditor from '@/utils/hooks/useTextEditor';
import CopyRights from '@/components/Organisms/copy-rights/CopyRights';
import tabsReducer from '@/utils/reducers/tabsReducer';
import './App.css';

export const TabContext = createContext();
export const TabDispatchContext = createContext();
const initialState = {
   selectedTab: null,
   tabs: [],
};
function App() {
   const [tabs, dispatch] = useReducer(tabsReducer, initialState);
   const { editorState, setEditorState, toolbarOptions, convertToHTML } = useTextEditor();

   return (
      <TabContext.Provider value={tabs}>
         <TabDispatchContext.Provider value={dispatch}>
            <CopyRights />
            <div className="App">
               <Editor
                  editorState={editorState}
                  setEditorState={setEditorState}
                  toolbarOptions={toolbarOptions}
               />
               <TextReview html={convertToHTML()} />
            </div>
         </TabDispatchContext.Provider>
      </TabContext.Provider>
   );
}

export default App;
