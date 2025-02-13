document.addEventListener("DOMContentLoaded", function () {
    // Initialize Outer Editor
    const outerEditor = new EditorJS({
        holder: 'outer-editor',
        autofocus: true,
        tools: {
            header: Header
        },
        onReady: () => {
            console.log("Outer Editor.js is ready!");
        },
        onChange: () => {
            saveOuterEditorData();
        }
    });

    function saveOuterEditorData() {
        outerEditor.save().then((outputData) => {
            console.log("Outer Editor Data:", outputData);
        }).catch((error) => {
            console.error("Outer Editor saving failed:", error);
        });
    }

    // Initialize Inner Editor inside outer
    const innerEditor = new EditorJS({
        holder: 'inner-editor',
        autofocus: false,
        tools: {
            header: Header
        },
        onReady: () => {
            console.log("Inner Editor.js is ready!");
        },
        onChange: () => {
            saveInnerEditorData();
        }
    });

    function saveInnerEditorData() {
        innerEditor.save().then((outputData) => {
            console.log("Inner Editor Data:", outputData);
        }).catch((error) => {
            console.error("Inner Editor saving failed:", error);
        });
    }

    // Save both editors when button is clicked
    function saveData() {
        saveOuterEditorData();
        saveInnerEditorData();
        alert("Content saved! Check the console for details.");
    }

    window.saveData = saveData; // Expose to global scope for button click
});
