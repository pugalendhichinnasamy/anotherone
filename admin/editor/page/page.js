function addPage() {
  const pageTitle = document.getElementById('pageTitle').value;
  const pageList = document.getElementById('pageList');
  const pageItem = document.createElement('li');
  pageItem.textContent = pageTitle;
  pageList.appendChild(pageItem);
}
