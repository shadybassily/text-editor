import { EditorState, Modifier } from 'draft-js';
import { useState, useEffect } from 'react';

export default function useTextEditor() {
   const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

   return { editorState, setEditorState };
}
