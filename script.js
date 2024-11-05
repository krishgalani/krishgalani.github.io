document.addEventListener("DOMContentLoaded", () => {
    const username = "krishgalani";
    const repoName = "jobsdb-scraper";
    
    fetch(`https://api.github.com/repos/${username}/${repoName}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById('repo-name').textContent = data.name;
        document.getElementById('repo-description').textContent = data.description;
        document.getElementById('repo-stars').textContent = data.stargazers_count;
        document.getElementById('repo-forks').textContent = data.forks_count;
        document.getElementById('repo-avatar').src = data.owner.avatar_url;
        document.getElementById('repo-link').href = data.html_url;
      })
      .catch(error => console.error("Error fetching GitHub data:", error));
  });
  