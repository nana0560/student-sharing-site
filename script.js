// Handle form submission for ideas
const ideaForm = document.getElementById('ideaForm');
const ideasList = document.getElementById('ideasList');

ideaForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const ideaTitle = document.getElementById('ideaTitle').value;
  const ideaDescription = document.getElementById('ideaDescription').value;

  // Create new list item
  const ideaItem = document.createElement('li');
  ideaItem.className = 'list-group-item';
  ideaItem.innerHTML = `<strong>${ideaTitle}</strong><p>${ideaDescription}</p>`;

  // Add to ideas list
  ideasList.appendChild(ideaItem);

  // Clear the form
  ideaForm.reset();
});
