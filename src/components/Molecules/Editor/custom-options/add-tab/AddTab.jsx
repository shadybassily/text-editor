import { useState, useContext } from 'react';
import { createPortal } from 'react-dom';
import { nanoid } from 'nanoid';

import { TabDispatchContext } from '@/App';
import Modal from '@/components/Atoms/modal/Modal';
import addIcon from '@/assets/editor-icons/icons8-create.png';

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
         <img src={addIcon} onClick={handleAdd} className="custom-option" />
      </>
   );
}
