async function loadSpotlights() {
  const res = await fetch('data/members.json');
  const data = await res.json();

  const qualified = data.members.filter(member =>
    member.membership === 'Silver' || member.membership === 'Gold'
  );

  const spotlights = [];
  while (spotlights.length < 3 && qualified.length > 0) {
    const randIndex = Math.floor(Math.random() * qualified.length);
    spotlights.push(qualified.splice(randIndex, 1)[0]);
  }

  const container = document.getElementById('spotlights');
  spotlights.forEach(member => {
    container.innerHTML += `
      <div class="spotlight">
        <img src="images/${member.image}" alt="${member.name} logo" class="spotlight-img">
        <h3>${member.name}</h3>
        <p>${member.info}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      </div>
    `;
    const imageSrc = member.image ? `images/${member.image}` : 'images/placeholder.png';
    
  });
}
loadSpotlights();