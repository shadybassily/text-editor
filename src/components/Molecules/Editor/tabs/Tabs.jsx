import Tab from '@/components/Atoms/tab/Tab';
import { useContext, useState } from 'react';
import { TabContext, TabDispatchContext } from '@/App';
import './tabs.css';

export default function Tabs() {
   const { tabs } = useContext(TabContext);
   const isTabs = tabs.length > 0;

   return (
      <>
         <div className="tabs-container">
            {isTabs && tabs.map((tab) => <Tab key={tab.id} tab={tab} />)}
         </div>
      </>
   );
}
