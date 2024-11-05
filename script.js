document.addEventListener("DOMContentLoaded", () => {
    const repoCards = document.querySelectorAll('.repo-card');
  
    repoCards.forEach(card => {
      const username = 'krishgalani'
      const repoName = card.getAttribute('data-repo');
      const apiUrl = `https://api.github.com/repos/${username}/${repoName}`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Update the card with fetched data
          card.querySelector('.repo-name').textContent = data.name || 'No name available';
          card.querySelector('.repo-description').textContent = data.description || 'No description available';
        //   card.querySelector('.repo-stars').textContent = data.stargazers_count || '0';
        //   card.querySelector('.repo-forks').textContent = data.forks_count || '0';
        //   card.querySelector('.avatar').src = data.owner.avatar_url || '';
          card.querySelector('.repo-link').href = data.html_url || '#';
        })
        .catch(error => {
          console.error("Error fetching GitHub data:", error);
          // Optionally, display an error message in the card
          card.querySelector('.repo-info').innerHTML = '<p>Error loading data</p>';
        });
    });
  });
  