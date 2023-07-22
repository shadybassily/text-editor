import './modal.css';
export default function Modal({ title, content, handleSave, handleCancel, isDisabled }) {
   return (
      <div className="modal-container">
         <div className="modal show-modal">
            <p>{title}</p>
            <div>{content}</div>
            <div className="modal-actions">
               <button disabled={isDisabled} onClick={handleSave}>
                  Ok
               </button>
               <button onClick={handleCancel}>Cancel</button>
            </div>
         </div>
      </div>
   );
}
