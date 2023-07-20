import { EditorState, Modifier, ContentState } from 'draft-js';
import { useState, useEffect } from 'react';
//icons
import bold from '../assets/editor-icons/bold.png';
import CustomColorPicker from '../components/Molecules/Editor/customColorPicker/CustomColorPicker';

export default function useTextEditor() {
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

   const [uploadedImage, setUploadedImage] = useState([]);

   const uploadImageCallback = (file) => {
      // long story short, every time we upload an image, we
      // need to save it to the state so we can get its data
      // later when we decide what to do with it.
      let LocallyUploadedImages = uploadedImage;
      const imageObject = {
         file: file,
         localSrc: URL.createObjectURL(file),
      };

      LocallyUploadedImages.push(imageObject);
      setUploadedImage(LocallyUploadedImages);
      // setUploadedImages(LocallyUploadedImages);
      // We need to return a promise with the image src
      // the img src we will use here will be what's needed
      // to preview it in the browser. This will be different than what
      // we will see in the index.md file we generate.
      return new Promise((resolve, reject) => {
         resolve({ data: { link: imageObject.localSrc } });
      });
   };

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
      image: {
         className: 'rdw-image-wrapper',
         //the callback fn is essential to upload images locally
         //otherwise only uploading using URLs is available.
         uploadCallback: uploadImageCallback,
      },
   };
   
   //inserting content to the text editor
   const appendToEditorContent = (props, content = '') => {
      const { editorState, onChange } = props;
      const contentState = Modifier.replaceText(
         editorState.getCurrentContent(),
         editorState.getSelection(),
         content,
         editorState.getCurrentInlineStyle()
      );
      onChange(EditorState.push(editorState, contentState, 'insert-characters'));
   };

   return { editorState, setEditorState, toolbarOptions, appendToEditorContent, replaceEditorContent };
}
