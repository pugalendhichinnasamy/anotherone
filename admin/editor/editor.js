document.addEventListener("DOMContentLoaded", () => {
    console.log("🚀 Editor.js script loaded!");

    // Ensure Editor.js is available
    if (typeof EditorJS === "undefined") {
        console.error("❌ EditorJS not loaded!");
        return;
    }

    // Import the required tools
    const editor = new EditorJS({
        holder: "editor",
        autofocus: true,
        tools: {
            header: {
                class: Header,
                inlineToolbar: true
            },
            list: {
                class: List,
                inlineToolbar: true
            }
        },
        onReady: () => {
            console.log("✅ Editor.js is ready!");
        },
        onChange: () => {
            console.log("✏️ Editor content changed!");
        }
    });

    if (!editor) {
        console.error("❌ Failed to initialize Editor.js");
    }
});
