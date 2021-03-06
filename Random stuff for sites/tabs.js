const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);

    const showContent = (i = 0) => {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    };

    const hideContent = () => {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    };

    hideContent();
    showContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if(target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, index) => {
                if(target == item || target.parentNode == item) {
                    hideContent();
                    showContent(index);
                }
            })
        }
    })
};


export default tabs;