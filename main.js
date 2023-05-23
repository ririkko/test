import newsData from './news.js';

document.addEventListener('DOMContentLoaded', () => {
  const newsList = document.getElementById('news-list');

  newsData.forEach((news) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<strong>${news.date}</strong>: ${news.content}`;

    if (news.setlist) {
      const setlistItems = document.createElement('ul');
      news.setlist.forEach((song) => {
        const setlistItem = document.createElement('li');
        setlistItem.textContent = song;
        setlistItems.appendChild(setlistItem);
      });
      listItem.appendChild(setlistItems);
    }

    newsList.appendChild(listItem);
  });
});
