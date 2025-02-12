document.addEventListener("DOMContentLoaded", () => {
    const postContainer = document.getElementById("post-container");
    const savedSubtopics = JSON.parse(localStorage.getItem("subtopics"));
    const savedContent = JSON.parse(localStorage.getItem("editorContent"));

    if (savedSubtopics && savedContent) {
        // Filter selected subtopics
        const selectedSubtopics = savedSubtopics.filter(sub => sub.checked).sort((a, b) => a.order - b.order);

        selectedSubtopics.forEach(subtopic => {
            const section = document.createElement("div");
            section.innerHTML = `<h2>${subtopic.name}</h2>`;

            // Get related content
            savedContent.blocks.forEach(block => {
                if (block.type === "paragraph") {
                    section.innerHTML += `<p>${block.data.text}</p>`;
                }
            });

            postContainer.appendChild(section);
        });
    } else {
        postContainer.innerHTML = "<p>No content available.</p>";
    }
});
