// Editor.js Core Initialization
const editorContainer = document.getElementById('editor-container');

// Checkbox References
const jobSummaryCheckbox = document.getElementById('job-summary-checkbox');
const blogPostCheckbox = document.getElementById('blog-post-checkbox');
const questionPaperCheckbox = document.getElementById('question-paper-checkbox');

// Add Event Listeners to checkboxes to dynamically load the correct editor
jobSummaryCheckbox.addEventListener('change', function () {
    if (this.checked) {
        loadEditor('job-summary');
        blogPostCheckbox.disabled = true;
        questionPaperCheckbox.disabled = true;
    } else {
        unloadEditor();
    }
});

blogPostCheckbox.addEventListener('change', function () {
    if (this.checked) {
        loadEditor('blog-post');
        jobSummaryCheckbox.disabled = true;
        questionPaperCheckbox.disabled = true;
    } else {
        unloadEditor();
    }
});

questionPaperCheckbox.addEventListener('change', function () {
    if (this.checked) {
        loadEditor('question-paper');
        jobSummaryCheckbox.disabled = true;
        blogPostCheckbox.disabled = true;
    } else {
        unloadEditor();
    }
});

// Load editor dynamically
function loadEditor(type) {
    editorContainer.innerHTML = ''; // Clear previous content
    const editorDiv = document.createElement('div');
    editorDiv.id = `${type}-editor-container`;
    editorContainer.appendChild(editorDiv);

    // Dynamically import and run the corresponding script
    import(`./scripts/${type}.js`).then(module => {
        module.initEditor(`${type}-editor-container`);
    });
}

// Unload editor and reset checkboxes
function unloadEditor() {
    editorContainer.innerHTML = '';
    jobSummaryCheckbox.disabled = false;
    blogPostCheckbox.disabled = false;
    questionPaperCheckbox.disabled = false;
}
