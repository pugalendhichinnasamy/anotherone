import EditorJS from '@editorjs/editorjs';
import Table from '@editorjs/table';
import Quote from '@editorjs/quote';

export function initEditor(holderId) {
    const editor = new EditorJS({
        holder: holderId,
        tools: {
            table: Table,
            quote: Quote
        }
    });
}
