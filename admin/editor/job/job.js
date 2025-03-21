// Initial data or data from localStorage
let subheadings = JSON.parse(localStorage.getItem('subheadings')) || [
  { title: "Name", number: 10, checked: false, content: JSON.stringify(defaultEditorContent()) },
  { title: "Age", number: 11, checked: false, content: JSON.stringify(defaultEditorContent()) },
  { title: "Address", number: 12, checked: false, content: JSON.stringify(defaultEditorContent()) }
];

let innerEditors = {};
const currentDate = new Date();
const datePart = `${currentDate.getFullYear()}${String(currentDate.getMonth() + 1).padStart(2, '0')}${String(currentDate.getDate()).padStart(2, '0')}`;

function defaultEditorContent() {
  return {
    blocks: [
      { type: "header", data: { text: "Default Heading", level: 2 } },
      { type: "paragraph", data: { text: "This is a sample paragraph with default text content." } },
      { type: "table", data: { content: [["Column 1", "Column 2"], ["Data 1", "Data 2"]] } }
    ]
  };
}

function generateUniqueID(title, number) {
  let initials = title.substring(0, 2).toLowerCase();
  return `${datePart}${initials}${number}`;
}

function createSubheadingBlock(subheading, index) {
  let uniqueID = generateUniqueID(subheading.title, subheading.number);
  return `
    <div class="subheading-container" id="subheading-${index}">
      <div class="subheading-header">
        <input type="checkbox" class="checkbox" onchange="toggleCheckbox(${index})" ${subheading.checked ? 'checked' : ''}>
        <span class="subheading-title">${subheading.title} (${uniqueID})</span>
        <input type="number" class="number-input" value="${subheading.number}" onchange="updateNumber(${index}, this.value)">
        <button class="add-btn" onclick="addSubheading(${index})">➕</button>
        <button class="remove-btn" onclick="removeSubheading(${index})">❌</button>
        <button class="clear-btn" onclick="clearEditor(${index})">🗑️</button>
      </div>
      <div id="editor-${index}" class="editor-box"></div>
    </div>`;
}

function renderSubheadings() {
  let mainEditorContainer = document.getElementById("main-editor");
  if (!mainEditorContainer) {
    console.error("Main editor container not found!");
    return;
  }

  mainEditorContainer.innerHTML = subheadings.map((sub, index) => createSubheadingBlock(sub, index)).join('');

  subheadings.forEach((sub, index) => {
    innerEditors[index] = new EditorJS({
      holder: `editor-${index}`,
      tools: {
        header: Header,
        paragraph: { class: Paragraph, inlineToolbar: ["bold", "italic"] },
        table: Table,
        quote: Quote,
      },
      data: sub.content ? JSON.parse(sub.content) : defaultEditorContent()
    });
  });
}

function addSubheading(afterIndex) {
  let newTitle = prompt("Enter subheading name:");
  if (!newTitle) return;
  let nextNumber = Math.max(...subheadings.map(s => s.number)) + 1;
  subheadings.splice(afterIndex + 1, 0, { title: newTitle, number: nextNumber, checked: false, content: JSON.stringify(defaultEditorContent()) });
  saveSubheadings();
  renderSubheadings();
}

function clearEditor(index) {
  if (confirm("Clear all data?")) {
    if (innerEditors[index]) innerEditors[index].clear();
    subheadings[index].content = "";
  }
}

function saveSubheadings() {
  localStorage.setItem('subheadings', JSON.stringify(subheadings));
}

renderSubheadings();
