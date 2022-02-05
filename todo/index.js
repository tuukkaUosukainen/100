const root = document.getElementById('root');

// Create new DOM elements
const heading = document.createElement('h1');
const dateParagraph = document.createElement('p');
const hr = document.createElement('hr');

// Add element content
heading.textContent = 'TODO';
dateParagraph.textContent = new Date().toLocaleString();

// Render elements to page
root.appendChild(heading);
root.appendChild(dateParagraph);
dateParagraph.appendChild(hr);