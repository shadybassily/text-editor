import useTextEditor from '../../../../../hooks/useTextEditor';
import './add-start.css';

export default function AddStar(props) {
   const { appendToEditorContent } = useTextEditor();

   const addStar = () => {
      appendToEditorContent(props, '⭐');
   };

   return (
      <div onClick={addStar} className="star">
         ⭐
      </div>
   );
}
