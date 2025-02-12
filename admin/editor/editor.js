const editor = new EditorJS({
    holder: 'editor',
    tools: {
        header: {
            class: Header,
            inlineToolbar: true
        },
        list: {
            class: List,
            inlineToolbar: true
        }
    }
});

const subtopicList = document.getElementById("subtopic-list");
const addSubtopicBtn = document.getElementById("add-subtopic");
let subtopics = [];

// Add a new subtopic
addSubtopicBtn.addEventListener("click", () => {
    const subtopicName = prompt("Enter subtopic name:");
    if (subtopicName) {
        const subtopic = {
            id: Date.now(),
            name: subtopicName,
            checked: false,
            order: subtopics.length + 1
        };
        subtopics.push(subtopic);
        renderSubtopics();
    }
});

// Render the subtopic list with checkboxes
function renderSubtopics() {
    subtopicList.innerHTML = "";
    subtopics.sort((a, b) => a.order - b.order).forEach((subtopic, index) => {
        const li = document.createElement("li");

        // Checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = subtopic.checked;
        checkbox.addEventListener("change", () => {
            subtopic.checked = checkbox.checked;
        });

        // Order Input
        const orderInput = document.createElement("input");
        orderInput.type = "number";
        orderInput.value = subtopic.order;
        orderInput.style.width = "40px";
        orderInput.addEventListener("change", () => {
            subtopic.order = parseInt(orderInput.value);
            renderSubtopics();
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(` ${subtopic.name} `));
        li.appendChild(orderInput);
        subtopicList.appendChild(li);
    });
}

// Save content and subtopics
document.getElementById("save-btn").addEventListener("click", async () => {
    try {
        const savedData = await editor.save();
        localStorage.setItem("editorContent", JSON.stringify(savedData));
        localStorage.setItem("subtopics", JSON.stringify(subtopics));
        alert("Content and Subtopics Saved!");
    } catch (error) {
        console.error("Saving failed:", error);
    }
});

// Load existing data
window.onload = () => {
    const savedSubtopics = localStorage.getItem("subtopics");
    if (savedSubtopics) {
        subtopics = JSON.parse(savedSubtopics);
        renderSubtopics();
    }
};
