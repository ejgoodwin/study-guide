console.log('hi');
const collapseTitles = document.querySelectorAll('[collapse-title]');
console.log(collapseTitles)
collapseTitles.forEach(title => {
    title.addEventListener('click', () => {
        console.log(title)
        const collapseId = title.getAttribute('collapse-title');
        const collapseContent = document.querySelector(`[collapse-id=${collapseId}]`);
        if (collapseContent.hasAttribute('open')) {
            collapseContent.removeAttribute('open');
            title.removeAttribute('open');
        } else {
            collapseContent.setAttribute('open', '');
            title.setAttribute('open', '');
        }
    })
});