import { useState, useContext } from 'react';
import { TabContext, TabDispatchContext } from '@/App';
import { createPortal } from 'react-dom';

import './addTab.css';
import { nanoid } from 'nanoid';
import Modal from '../modal/Modal';
export default function AddTab() {
   const dispatch = useContext(TabDispatchContext);

   const [isOpen, setIsOpen] = useState(false);
   const [tabName, setTabName] = useState('');

   const handleAdd = () => setIsOpen(true);

   const handleInputChange = (e) => {
      const name = e.target.value;
      setTabName(name);
   };

   const handleSave = () => {
      let tabToSave = {
         id: nanoid(),
         name: tabName,
      };

      setIsOpen(false);
      setTabName('');

      dispatch({
         type: 'add',
         payload: tabToSave,
      });

      dispatch({
         type: 'select',
         payload: tabToSave,
      });
   };

   const handleCancel = () => {
      setIsOpen(false);
      setTabName('');
   };

   return (
      <>
         {isOpen &&
            createPortal(
               <Modal
                  title="Enter Tab Name"
                  content={
                     <input
                        className="new-tab-input"
                        placeholder="Tab Name"
                        value={tabName}
                        onChange={handleInputChange}
                     />
                  }
                  handleCancel={handleCancel}
                  handleSave={handleSave}
                  isDisabled={tabName === ''}
               />,
               document.body
            )}
         <button onClick={handleAdd} className="add-tab-btn">
            +
         </button>
      </>
   );
}

{
   /* <div className="add-tab-actions">
               <input
                  className="new-tab-input"
                  placeholder="Tab Name"
                  value={tabName}
                  onChange={handleInputChange}
               />
               <button onClick={handleSave}>save</button>
               <button onClick={handleCancel}>Cancel</button>
            </div> */
}
