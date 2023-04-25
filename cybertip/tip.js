const shownTips = [];

async function getTip() {
  const filenames = ['./tips/tip1.txt', './tips/tip2.txt']; // liste des noms de fichiers
  const randomIndex = Math.floor(Math.random() * filenames.length); // index aléatoire dans la liste
  const filename = filenames[randomIndex]; // nom de fichier correspondant
  try {
    const response = await fetch(filename);
    const text = await response.text();
    const tips = text.trim().split('\n').filter(tip => !shownTips.includes(tip));
    if (tips.length === 0) {
      throw new Error('All tips have been shown');
    }
    const tip = tips[Math.floor(Math.random() * tips.length)];
    shownTips.push(tip);
    document.getElementById('tip').innerHTML = tip;
  } catch (error) {
    console.error(error);
    document.getElementById('tip').innerHTML = 'Sorry, no tip available for the moment, please try again later.';
  }
}

window.addEventListener('DOMContentLoaded', getTip);

function copyTip() {
  const tip = document.getElementById('tip').innerHTML;
  navigator.clipboard.writeText(tip);
}

function shareOnTwitter() {
  const tip = document.getElementById('tip').innerHTML;
  const tweet = `Cybersecurity Tip of the Day : ${tip}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  window.open(twitterUrl, '_blank');
}
