import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';

import { TabDispatchContext, TabContext } from '@/App';
import Modal from '@/components/Atoms/modal/Modal';
import addIcon from '@/assets/editor-icons/icons8-create.png';

export default function AddTab({ editorContent, handleTabSelect }) {
   const [isOpen, setIsOpen] = useState(false);
   const [tabName, setTabName] = useState('');

   const dispatch = useContext(TabDispatchContext);

   const { tabs } = useContext(TabContext);

   const handleAdd = () => setIsOpen(true);

   const handleInputChange = (e) => {
      const name = e.target.value;
      setTabName(name);
   };

   const handleSave = () => {
      //1. if it's the first tab to be created
      // and there is content in the editor
      // save that content on that created tab
      //2. if it's not the first created tab and there is content
      // create a tab with no content (dont save the content of a previous tab onto the new tab)
      let content = tabs.length === 0 ? editorContent : '<p></p>';
      let tabToSave = {
         id: nanoid(),
         name: tabName,
         content,
      };

      setIsOpen(false);
      setTabName('');

      dispatch({
         type: 'add',
         payload: tabToSave,
      });
      
      
      handleTabSelect(tabToSave)

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
                     <input placeholder="Tab Name" value={tabName} onChange={handleInputChange} />
                  }
                  handleCancel={handleCancel}
                  handleSave={handleSave}
                  isDisabled={tabName === ''}
               />,
               document.body
            )}
         <img src={addIcon} onClick={handleAdd} className="custom-option" />
      </>
   );
}
