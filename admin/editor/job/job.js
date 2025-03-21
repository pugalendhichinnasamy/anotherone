// Initialize Editor.js
const editor = new JobJS({
  holder: 'jobjs', // ID of the container where Editor.js will be rendered

  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
      config: {
        levels: [1, 2, 3],
        defaultLevel: 2,
      },
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    
    image: {
      class: ImageTool,
      config: {
        endpoints: {
          byFile: 'http://localhost:8008/uploadFile', // File upload endpoint
          byUrl: 'http://localhost:8008/fetchUrl',    // URL upload endpoint
        },
      },
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote’s author',
      },
    },
    embed: {
      class: Embed,
      config: {
        services: {
          youtube: true,
          twitter: true,
        },
      },
    },
    table: {
      class: Table,
      inlineToolbar: true,
      config: {
        rows: 2,
        cols: 3,
      },
    },
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
