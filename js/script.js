let btn = document.querySelector('#menu__button'),
    nav = document.querySelector('#menu'),
    btnClosed = 'menu__button menu__button-closed',
    btnOpened = 'menu__button menu__button-opened',
    navClosed = 'menu menu-closed',
    navOpened = 'menu menu-opened';

btn.addEventListener('click', () => {
    if (btn.className == btnClosed) {
        nav.className = navOpened;
        btn.className = btnOpened;
    } else {
        nav.className = navClosed;
        btn.className = btnClosed;
    }
});