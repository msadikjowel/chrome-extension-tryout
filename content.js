window.onload = () => {
    const button = document.createElement('button');
    button.id = "darkModeButton";
    button.textContent = "Dark Mode";
    document.querySelector('#end').prepend(button);

    button.addEventListener('click', () => enabledDarkMode());
};

function enabledDarkMode() {
    document.getElementsByTagName('ytd-app')[0].style.backgroundColor = 'black';
}