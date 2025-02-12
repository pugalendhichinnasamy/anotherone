document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Main JavaScript Loaded");

    // Example: Alert when clicking on the "Open Editor" button
    document.querySelector("a[href='admin/editor/editor.html']").addEventListener("click", () => {
        alert("Opening the editor...");
    });
});
