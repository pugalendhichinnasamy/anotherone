document.addEventListener("DOMContentLoaded", async () => {
    console.log("🚀 Editor.js script loaded!");

    if (typeof EditorJS === "undefined") {
        console.error("❌ EditorJS not loaded!");
        return;
    }

    // Ensure the required plugins are available
    if (typeof Header === "undefined" || typeof List === "undefined" || typeof Paragraph === "undefined") {
        console.error("❌ Missing plugins! Make sure Header, List, and Paragraph are loaded.");
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
                class: List, // Ensure List is correctly loaded
                inlineToolbar: true
            },
            paragraph: {
                class: Paragraph, // Ensure Paragraph is correctly loaded
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
            alert("✅ Content Saved!");
        } catch (error) {
            console.error("❌ Saving failed:", error);
        }
    });
});
