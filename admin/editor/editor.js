function saveContent() {
    let content = document.getElementById("editor").value;
    localStorage.setItem("savedContent", content);
    alert("Content saved!");
}

// Load content if exists
window.onload = function() {
    let savedContent = localStorage.getItem("savedContent");
    if (savedContent) {
        document.getElementById("editor").value = savedContent;
    }
};
