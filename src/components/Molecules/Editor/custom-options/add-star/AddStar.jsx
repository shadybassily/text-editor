import useTextEditor from '@/utils/hooks/useTextEditor';

export default function AddStar(props) {
   const { appendToEditorContent } = useTextEditor();

   const addStar = () => {
      appendToEditorContent(props, '⭐');
   };

   return (
      <div onClick={addStar} className="custom-option">
         ⭐
      </div>
   );
}
