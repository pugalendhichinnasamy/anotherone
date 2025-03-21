// Default content template for Editor.js
function defaultEditorContent() {
    return {
        blocks: [
            { type: "header", data: { text: "Default Heading", level: 2 } },
            { type: "paragraph", data: { text: "This is a sample paragraph with default text content." } },
            { type: "table", data: { content: [["Column 1", "Column 2"], ["Data 1", "Data 2"]] } }
        ]
    };
}
