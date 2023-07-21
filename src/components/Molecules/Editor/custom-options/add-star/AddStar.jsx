import useTextEditor from '../../../../../hooks/useTextEditor';
import './add-star.css';

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
