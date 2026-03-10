console.clear()
import menuIconClosed from "../../imgs/icons/3lines.svg"
import menuIconOpened from "../../imgs/icons/cross.svg"

document.addEventListener('DOMContentLoaded', () => {
    function createMenu() {
        const menu = document.createElement('div');
        menu.className = 'menu';

        menu.innerHTML = `
        <button class="btn menu-button" aria-label="Menu">
            <img src="${menuIconClosed}" alt="Menu icon" class="menu-icon" />
        </button>
        <nav class="menu-panel" aria-label="Navigation menu">
            <a href="index.html" class="btn menu-panel__button">ГЛАВНАЯ</a>
            <a href="pages/about.html" class="btn menu-panel__button">О НАС</a>
            <a href="pages/files.html" class="btn menu-panel__button">ДОСЬЕ</a>
            <a href="pages/articles.html" class="btn menu-panel__button">СТАТЬИ</a>
            <a href="pages/podcasts.html" class="btn menu-panel__button">ПОДКАСТЫ</a>
            <a href="pages/test-types.html" class="btn menu-panel__button">ТЕСТЫ</a>
        </nav>
        <div class="menu-backdrop"></div>
        `;

        document.body.prepend(menu);
    }

    createMenu();

    const menuButton = document.querySelector('.menu-button');
    const menuPanel = document.querySelector('.menu-panel');
    const menuBackdrop = document.querySelector('.menu-backdrop');

    if (!menuButton || !menuPanel || !menuBackdrop) {
        return;
    }

    let isOpen = true;

    const menuOpenSVG = `<img src="${menuIconClosed}" alt="Menu icon" class="menu-icon" />`;

    const menuClosedSVG = `<img src="${menuIconOpened}" alt="Menu icon" class="menu-icon" />`;

    menuButton.addEventListener('click', () => {
        const menuIcon = menuButton.querySelector('.menu-icon');
        if (!menuIcon) return;

        if (isOpen) {
            menuIcon.outerHTML = menuClosedSVG;
            menuPanel.classList.add('menu-panel--open');
            menuBackdrop.classList.add('menu-backdrop--open');
        } else {
            menuIcon.outerHTML = menuOpenSVG;
            menuPanel.classList.remove('menu-panel--open');
            menuBackdrop.classList.remove('menu-backdrop--open');
        }
        isOpen = !isOpen;
    });

    menuBackdrop.addEventListener('click', () => {
        if (isOpen) return;
        const menuIcon = menuButton.querySelector('.menu-icon');
        if (!menuIcon) return;

        menuIcon.outerHTML = menuOpenSVG;
        menuPanel.classList.remove('menu-panel--open');
        menuBackdrop.classList.remove('menu-backdrop--open');
        isOpen = true;
    });
});