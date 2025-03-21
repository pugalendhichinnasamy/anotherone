import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

export function initEditor(holderId) {
    const editor = new EditorJS({
        holder: holderId,
        tools: {
            header: Header
        }
    });
}
