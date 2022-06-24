export function emptyContent() {
  const content = document.querySelector("#content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
