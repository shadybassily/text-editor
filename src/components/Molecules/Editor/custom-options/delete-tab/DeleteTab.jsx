import { useContext } from 'react';
import { TabContext, TabDispatchContext } from '@/App';
import deleteIcon from '@/assets/editor-icons/icons8-delete.png';

export default function DeleteTab() {
   const dispatch = useContext(TabDispatchContext);
   const { selectedTab } = useContext(TabContext);

   const handleTabDelete = () => {
      dispatch({
         type: 'delete',
         payload: selectedTab,
      });
   };
   return <img src={deleteIcon} onClick={handleTabDelete} className="delete-tab custom-option" />;
}
