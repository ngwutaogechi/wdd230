const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;

const memberContainer = document.getElementById('member-directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

fetch('data/members.json')
  .then(response => response.json())
  .then(data => displayMembers(data.members));

function displayMembers(members) {
  memberContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');
    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p>Membership: ${member.membership}</p>
      <p>${member.info}</p>
    `;
    memberContainer.appendChild(card);
  });
}

gridBtn.addEventListener('click', () => {
  memberContainer.classList.add('grid-view');
  memberContainer.classList.remove('list-view');
});

listBtn.addEventListener('click', () => {
  memberContainer.classList.add('list-view');
  memberContainer.classList.remove('grid-view');
});
