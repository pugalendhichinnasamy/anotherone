document.addEventListener("DOMContentLoaded", function () {
    // Create the outer Editor.js instance
    const outerEditor = new EditorJS({
        holder: 'outer-editor',
        autofocus: true,
        tools: {},
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

    // Function to initialize the inner Editor.js inside a specific div
    function initializeInnerEditor(holderId) {
        return new EditorJS({
            holder: holderId,
            autofocus: false,
            tools: {},
            onReady: () => {
                console.log(`Inner Editor.js inside ${holderId} is ready!`);
            },
            onChange: () => {
                saveInnerEditorData(holderId);
            }
        });
    }

    function saveInnerEditorData(holderId) {
        innerEditors[holderId].save().then((outputData) => {
            console.log(`Inner Editor Data for ${holderId}:`, outputData);
        }).catch((error) => {
            console.error(`Inner Editor saving failed for ${holderId}:`, error);
        });
    }

    // Creating an inner Editor.js instance dynamically
    const innerEditorContainer = document.getElementById("inner-editor-container");
    const innerEditorDiv = document.createElement("div");
    innerEditorDiv.id = "inner-editor";
    innerEditorContainer.appendChild(innerEditorDiv);

    const innerEditors = {};
    innerEditors["inner-editor"] = initializeInnerEditor("inner-editor");
});
