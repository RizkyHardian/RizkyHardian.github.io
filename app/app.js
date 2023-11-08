const shareButtons = document.querySelectorAll('.title-share-button');

console.log(shareButtons);

async function copyText(e) {
  e.preventDefault();
  const link = this.getAttribute('link');
  console.log(link);

  try {
    await navigator.clipboard.writeText(link);
    alert('Copy This Text: ' + link);
  } catch (err) {
    console.log(err);
  }
}

shareButtons.forEach((shareButtons) => shareButtons.addEventListener('click', copyText));
