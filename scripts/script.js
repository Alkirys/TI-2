const getComparer = (prop) => {
    return (a, b) => {
        if (a[prop] < b[prop]) {
            return -1;
        }

        if (a[prop] > b[prop]) {
            return 1;
        }

        return 0;
    }
};

const skills = {
    inSort: false,
    data: [
        {
            name: 'html',
            level: 80,
            icon: 'html.svg',
        },
        {
            name: 'css',
            level: 70,
            icon: 'css.svg',
        },
        {
            name: 'python',
            level: 10,
            icon: 'python.svg',
        },
        {
            name: 'c++',
            level: 20,
            icon: 'c++.svg',
        },
    ],

    generateList: function (parentElement) {
        this.data.forEach((skill) => {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');

            dt.textContent = skill.name;
            div.textContent = `${skill.level}%`;
            dt.classList.add('skill-item');
            dd.classList.add('skill-level');
            dt.style.backgroundImage = `url("img/skills/${skill.icon}")`;
            div.style.width = `${skill.level}%`;

            dd.append(div);
            parentElement.append(dt, dd);
        });
    },

    sortByProp: function (parentElement, propName) {
        parentElement.innerHTML = '';
        if (!this.inSort || this.inSort !== propName) {
            console.log(`sort by ${propName}`);
            this.data.sort(getComparer(propName));
            this.inSort = propName;
        } else {
            this.data.reverse();
            console.log(`reverse`);
        }
        this.generateList(parentElement);
    },
}

const menu = {
    isOpen: true,

    toggleMenu: function(menuElement, button) {
        menuElement.classList.toggle('main-nav__closed');
        button.classList.toggle('nav-btn__close');
        button.classList.toggle('nav-btn__open');
        button.children[0].innerText = this.isOpen ? 'Открыть меню' : 'Закрыть меню';
        this.isOpen = !this.isOpen;
    },
}
// Робин Гуд впадал в ступор, встречая людей среднего достатка.

const skillList = document.querySelector('.skill-list');
const buttonGroup = document.querySelector('.skills__buttonGroup');
const burgerButton = document.querySelector('.nav-btn');
const nav = document.querySelector('.main-nav');

skills.generateList(skillList);
menu.toggleMenu(nav, burgerButton);

buttonGroup.addEventListener('click', (evt) => {
    if (evt.target.nodeName === 'BUTTON') {
        skills.sortByProp(skillList, evt.target.dataset.type);
    }
});

burgerButton.addEventListener('click', () => {
    menu.toggleMenu(nav, burgerButton);
});
// Первый закон зомби-апокалипсиса: будь человеком и к тебе потянутся
