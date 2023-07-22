import { useContext } from 'react';
import { TabContext, TabDispatchContext } from '@/App';
import './tab.css';

export default function Tab({ tab }) {
   const { selectedTab } = useContext(TabContext);
   const dispatch = useContext(TabDispatchContext);

   const isSelected = selectedTab?.id === tab.id;
   const tabClassName = `tab show-tab ${isSelected && 'active'}`;

   const handleTabSelect = (tab) => {
      dispatch({
         type: 'select',
         payload: tab,
      });
      console.log('selected');
   };
   return (
      <div className={tabClassName} onClick={() => handleTabSelect(tab)}>
         {tab.name}
      </div>
   );
}
