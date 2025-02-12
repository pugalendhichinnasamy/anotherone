document.addEventListener("DOMContentLoaded", async () => {
    console.log("🚀 Editor.js script loaded!");

    if (typeof EditorJS === "undefined") {
        console.error("❌ EditorJS not loaded!");
        return;
    }

    // Load Subtopics from JSON File
    let subtopics = [];
    try {
        const response = await fetch("./subtopics.json");
        subtopics = await response.json();
    } catch (error) {
        console.error("❌ Failed to load subtopics:", error);
    }

    const subtopicList = document.getElementById("subtopic-list");

    // Render Subtopics with Checkboxes
    function renderSubtopics() {
        subtopicList.innerHTML = "";
        subtopics.forEach((subtopic) => {
            const li = document.createElement("li");

            // Checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = subtopic.checked;
            checkbox.addEventListener("change", () => {
                subtopic.checked = checkbox.checked;
            });

            li.appendChild(checkbox);
            li.appendChild(document.createTextNode(` ${subtopic.name}`));
            subtopicList.appendChild(li);
        });
    }

    renderSubtopics();

    // Initialize Editor.js
    const editor = new EditorJS({
        holder: "editor",
        autofocus: true,
        tools: {
            header: {
                class: Header,
                inlineToolbar: true,
                config: {
                    placeholder: "Enter a title...",
                    levels: [2, 3, 4],
                    defaultLevel: 2
                }
            },
            list: {
                class: List,
                inlineToolbar: true
            },
            paragraph: {
                class: Paragraph,
                inlineToolbar: true
            }
        },
        data: {
            blocks: [
                {
                    type: "header",
                    data: {
                        text: "Default Subheading Title",
                        level: 2
                    }
                },
                {
                    type: "paragraph",
                    data: {
                        text: "Start writing your content here..."
                    }
                }
            ]
        },
        onReady: () => {
            console.log("✅ Editor.js is ready!");
        },
        onChange: () => {
            console.log("✏️ Editor content changed!");
        }
    });

    // Save Button Click Event
    document.getElementById("save-btn").addEventListener("click", async () => {
        try {
            const savedData = await editor.save();
            localStorage.setItem("editorContent", JSON.stringify(savedData));
            localStorage.setItem("subtopics", JSON.stringify(subtopics));
            alert("✅ Content and Subtopics Saved!");
        } catch (error) {
            console.error("❌ Saving failed:", error);
        }
    });
});
