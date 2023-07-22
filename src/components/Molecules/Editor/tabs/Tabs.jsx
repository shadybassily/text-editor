import Tab from '@/components/Atoms/tab/Tab';
import { useContext, useState } from 'react';
import { TabContext, TabDispatchContext } from '@/App';
import './tabs.css';
import AddTab from '../../../Atoms/add-tab/AddTab';

export default function Tabs() {
   const { tabs } = useContext(TabContext);
   const isTabs = tabs.length > 0;

   return (
      <>
         <div className="tabs-container">
            <AddTab />
            {isTabs && tabs.map((tab) => <Tab key={tab.id} tab={tab} />)}
         </div>
      </>
   );
}
