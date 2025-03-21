function addBlogPost() {
  const blogTitle = document.getElementById('blogTitle').value;
  const blogContent = document.getElementById('blogContent').value;

  const blogDisplay = document.getElementById('blogDisplay');
  const blogPost = document.createElement('div');
  blogPost.innerHTML = `
    <h3>${blogTitle}</h3>
    <p>${blogContent}</p>
    <hr />
  `;
  blogDisplay.appendChild(blogPost);
}
