// Initialize Editor.js
const editor = new EditorJS({
  holder: 'jobjs', // ID of the container where Editor.js will be rendered

  tools: {
                        header: Header,
                        paragraph: {
                            class: Paragraph,
                            inlineToolbar: ["bold", "italic", "underline", "marker", "inlineCode"]
                        },
                        table: Table,
                        quote: Quote,
                        underline: Underline,
                        linkTool: LinkTool,
                        image: ImageTool,
                        code: CodeTool,
                        inlineCode: InlineCode,
                        marker: Marker
                    },

  // Placeholder text in the editor
  placeholder: 'Start writing your content here...',

  // Data to pre-load in the editor
  data: {
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Welcome to Editor.js!',
          level: 2,
        },
      },
      {
        type: 'paragraph',
        data: {
          text: 'This is a paragraph block. You can edit, delete, or add new blocks using the tools above.',
        },
      },
    ],
  },
});

// Save button functionality
document.getElementById('saveButton').addEventListener('click', () => {
  editor.save().then((outputData) => {
    document.getElementById('output').innerText = JSON.stringify(outputData, null, 2); // Display saved data as JSON
  }).catch((error) => {
    console.error('Saving failed: ', error);
  });
});
