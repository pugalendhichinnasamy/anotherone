import EditorJS from '@editorjs/editorjs'; 
import Header from '@editorjs/header'; 
import List from '@editorjs/list'; 

    // Initialize Editor.js
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
                        text: "Type Your Title Here...",
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

    document.getElementById("save-btn").addEventListener("click", async () => {
        try {
            const savedData = await editor.save();
            localStorage.setItem("editorContent", JSON.stringify(savedData));
            alert("✅ Content Saved!");
        } catch (error) {
            console.error("❌ Saving failed:", error);
        }
    });
})
