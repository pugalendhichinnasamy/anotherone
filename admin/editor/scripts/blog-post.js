import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import Paragraph from '@editorjs/paragraph';

export function initEditor(holderId) {
    const editor = new EditorJS({
        holder: holderId,
        tools: {
            header: Header,
            paragraph: Paragraph
        }
    });
}
