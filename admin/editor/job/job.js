// Function to save and display the text entered in the textarea
document.getElementById('saveButton').addEventListener('click', function() {
  const text = document.getElementById('editorInput').value;  // Get input value
  document.getElementById('outputText').innerText = text;     // Display it below
});
