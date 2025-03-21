function addJob() {
  const jobTitle = document.getElementById('jobTitle').value;
  const jobList = document.getElementById('jobList');
  const jobItem = document.createElement('p');
  jobItem.textContent = `Job: ${jobTitle}`;
  jobList.appendChild(jobItem);
}

