document.addEventListener('DOMContentLoaded', (event) => {
  setupInternalLinks();
});

function setupInternalLinks() {
  let links = [];
  let targets = [];
  const anchors = document.getElementsByTagName('a');

  for (let i in anchors) {
    let href = anchors[i].href;
    if (!href) {
      let name = anchors[i].name;
      targets[name] = anchors[i];
    }
    else if (href.indexOf('#') > -1) {
      links.push(anchors[i]);
    }
  }

  for (let i in links) {
    let targetName = links[i].href.split('#', 2)[1];
    if (targetName && targets[targetName]) {
      links[i].addEventListener('click', (function setFocus(element) {
        return () => {
          setTimeout(() => element.parentNode.focus(), 100);
        };
      })(targets[targetName]));
    }
  }
}
