let subheadings = JSON.parse(localStorage.getItem('subheadings')) || [
    { title: "Name", number: 10, checked: false, content: JSON.stringify(defaultEditorContent()) },
    { title: "Age", number: 11, checked: false, content: JSON.stringify(defaultEditorContent()) },
    { title: "Address", number: 12, checked: false, content: JSON.stringify(defaultEditorContent()) }
];

let innerEditors = {};

function createSubheadingBlock(subheading, index) {
    let uniqueID = generateUniqueID(subheading.title, subheading.number);
    return `
        <div class="subheading-container" id="subheading-${index}">
            <div class="subheading-header">
                <input type="checkbox" class="checkbox" ${subheading.checked ? 'checked' : ''}>
                <span class="subheading-title">${subheading.title} (${uniqueID})</span>
                <input type="number" class="number-input" value="${subheading.number}">
                <button class="add-btn" onclick="addSubheading(${index})">➕</button>
                <button class="remove-btn" onclick="removeSubheading(${index})">❌</button>
            </div>
            <div id="editor-${index}" class="editor-box"></div>
        </div>`;
}

function renderSubheadings() {
    let mainEditorContainer = document.getElementById("main-editor");
    mainEditorContainer.innerHTML = subheadings.map(createSubheadingBlock).join('');
}

renderSubheadings();
