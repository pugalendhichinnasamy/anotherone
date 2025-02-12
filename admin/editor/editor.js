// Initialize Editor.js
const editor = new EditorJS({
    holder: 'editor',
    tools: {
        header: {
            class: Header,
            inlineToolbar: ['link']
        },
        list: {
            class: List,
            inlineToolbar: true
        },
        paragraph: {
            class: Paragraph,
            inlineToolbar: true
        }
    }
});

// Save content
document.getElementById('save-btn').addEventListener('click', async function () {
    try {
        const savedData = await editor.save();
        localStorage.setItem('editorContent', JSON.stringify(savedData));
        alert("Content saved successfully!");
    } catch (error) {
        console.error('Saving failed:', error);
    }
});

// Load saved content
window.onload = async function () {
    const savedContent = localStorage.getItem('editorContent');
    if (savedContent) {
        editor.render(JSON.parse(savedContent));
    }
};

