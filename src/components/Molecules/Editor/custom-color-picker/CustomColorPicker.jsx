import { BlockPicker } from 'react-color';
import './custom-color-picker.css';
export default function CustomColorPicker(props) {
   const { expanded, onExpandEvent } = props;
   const { color = '#000000' } = props.currentState;

   const stopPropagation = (e) => {
      e.stopPropagation();
   };

   const onChange = (color) => {
      const { onChange } = props;
      onChange('color', color.hex);
   };

   const renderModal = () => {
      return (
         <div onClick={stopPropagation}>
            <BlockPicker color={color} onChangeComplete={onChange} />
         </div>
      );
   };

   return (
      <div
         className="color-picker-container"
         aria-haspopup="true"
         aria-expanded={expanded}
         aria-label="rdw-color-picker"
      >
         <div onClick={onExpandEvent}>
            <div
               style={{
                  width: '20px',
                  height: '20px',
                  background: color,
               }}
            ></div>
         </div>
         {expanded ? renderModal() : undefined}
      </div>
   );
}
