import { createContext, useReducer } from 'react';

import Editor from '@/components/Organisms/editor/Editor';
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

   return (
      <TabContext.Provider value={tabs}>
         <TabDispatchContext.Provider value={dispatch}>
            <CopyRights />
            <Editor />
         </TabDispatchContext.Provider>
      </TabContext.Provider>
   );
}

export default App;
