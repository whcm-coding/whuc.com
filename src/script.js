import files from './config';
window.onload = function onHomePageLoaded() {
  var content = document.getElementsByClassName('content')[0];
  Object.keys(files).forEach((key) => {
    var el = document.createElement('a');
    el.className = 'item';
    el.href = `./hw/${key}/index.html`;
    el.target = '_self';
    el.innerHTML = `<h2>${files[key].title}</h2>`;
    content.appendChild(el);
  });
};
