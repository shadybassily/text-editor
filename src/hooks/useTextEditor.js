import { EditorState, Modifier } from 'draft-js';
import { useState, useEffect } from 'react';
import bold from '../assets/editor-icons/bold.png';
import CustomColorPicker from '../components/Molecules/Editor/CustomColorPicker/CustomColorPicker';
export default function useTextEditor() {
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

   const toolbarOptions = {
      options: ['inline', 'list', 'colorPicker', 'image', 'fontFamily', 'history'],
      inline: {
         className: 'toolbar-inline-options',
         component: undefined,
         dropdownClassName: undefined,
         options: ['bold', 'italic', 'underline'],
         bold: { icon: bold },
      },
      list: {
         inDropdown: false,
         className: undefined,
         component: undefined,
         dropdownClassName: undefined,
         options: ['unordered', 'ordered'],
      },
      fontFamily: {
         // to add more fonts, make sure to use the corresponding CDN in index.html
         options: [
            'Arial',
            'Georgia',
            'Lumanosimo',
            'Impact',
            'Tahoma',
            'Times New Roman',
            'Verdana',
         ],
         className: undefined,
         component: undefined,
         dropdownClassName: 'dropdown',
      },
      colorPicker: {
         component: CustomColorPicker,
      },
   };

   return { editorState, setEditorState, toolbarOptions };
}
