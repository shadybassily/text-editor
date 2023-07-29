import { useContext } from 'react';
import { TabContext } from '@/App';
import './tab.css';

export default function Tab({ tab, handleTabSelect }) {
   const { selectedTab } = useContext(TabContext);

   const isSelected = selectedTab?.id === tab.id;
   const tabClassName = `tab show-tab ${isSelected && 'active'}`;

   return (
      <div className={tabClassName} onClick={() => handleTabSelect(tab)}>
         {tab.name}
      </div>
   );
}
