// Owen can change the dashboard numbers by editing the JSON file in the data folder.
async function loadStats() {
  const response = await fetch('data/stats.json');
  const stats = await response.json();

  document.getElementById('domination').textContent = stats.domination;
  document.getElementById('cards').textContent = stats.cardsCreated;
  document.getElementById('domains').textContent = stats.domains;
  document.getElementById('monkeys').textContent = stats.flyingMonkeyAlert;

  const bar = document.getElementById('bar-fill');
  bar.style.width = stats.domination;
}

loadStats();
