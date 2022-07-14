window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.open_menu, .close_menu').forEach((el) => {
        el.addEventListener('click', e => {
            if (e.target.classList.contains('open_menu')) {
                document.querySelector('.menu_items').classList.add('show')
                document.querySelector('.close_menu').classList.add('show')
            } else {
                document.querySelector('.menu_items').classList.remove('show')
                document.querySelector('.close_menu').classList.remove('show')
            }
        })
    })
});
