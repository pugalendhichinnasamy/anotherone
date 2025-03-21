// Function to return default editor data
export function defaultEditorContent() {
    return {
        blocks: [
            { type: "header", data: { text: "Default Header", level: 2 } },
            { type: "paragraph", data: { text: "This is a default paragraph." } },
            { type: "table", data: { content: [["Header 1", "Header 2"], ["Data 1", "Data 2"]] } }
        ]
    };
}
