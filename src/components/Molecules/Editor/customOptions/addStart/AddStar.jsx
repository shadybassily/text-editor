import useTextEditor from '../../../../../hooks/useTextEditor';
import './addStar.css';

export default function AddStar(props) {
   const { appendToEditorContent } = useTextEditor();

   const addStar = () => {
      appendToEditorContent(props, 'star');
   };

   return (
      <div onClick={addStar} className="star">
         ⭐
      </div>
   );
}
