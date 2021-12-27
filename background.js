chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension have been successfully installed');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmark saved');
});
