document.addEventListener("DOMContentLoaded", async () => {
    console.log("🚀 Editor.js script loaded!");

    // Check if Editor.js is loaded
    if (typeof EditorJS === "undefined") {
        console.error("❌ EditorJS not loaded!");
        return;
    }

    // Ensure required plugins are loaded
    if (typeof Header === "undefined" || typeof List === "undefined" || typeof Paragraph === "undefined") {
        console.error("❌ Missing plugins! Check Header, List, and Paragraph scripts.");
        return;
    }

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

            // Get selected subtopics
            let selectedTopics = [];
            document.querySelectorAll(".subtopic-checkbox:checked").forEach(checkbox => {
                selectedTopics.push(checkbox.value);
            });

            // Store the content and selected subtopics
            const postData = {
                editorContent: savedData,
                selectedTopics: selectedTopics
            };

            localStorage.setItem("editorContent", JSON.stringify(postData));
            alert("✅ Content and Subtopics Saved!");
        } catch (error) {
            console.error("❌ Saving failed:", error);
        }
    });
});
