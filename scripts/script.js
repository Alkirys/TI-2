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
    data: [],

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
            this.data.sort(getComparer(propName));
            this.inSort = propName;
        } else {
            this.data.reverse();
        }
        this.generateList(parentElement);
    },

    initList: function (url, parentElement, skillsSection) {
        // Тестировщик заходит в бар. Заказывает пиво. Заказывает 0 пива. Заказывает 999999 пива.
        // Заказывает ящерицу. Заказывает -1 пиво. Заказывает двравпорывп.
        //
        // Первый реальный посетитель заходит в бар и спрашивает, где туалет. Бар вспыхивает, все гибнут в огне.
        fetch(url)
            .then(data => data.json())
            .then(jsonData => {
                this.data = jsonData.data;
                this.generateList(parentElement);
            })
            .catch(err => {
                skillsSection.remove();
                console.log(err);
            });
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
const themeCheckbox = document.querySelector('.switch-checkbox');
const skillsSection = document.querySelector('#skills');

skills.initList('db/skills.json', skillList, skillsSection);
menu.toggleMenu(nav, burgerButton);

buttonGroup.addEventListener(
    'click',
    (evt) => evt.target.nodeName === 'BUTTON' && skills.sortByProp(skillList, evt.target.dataset.type)
);

burgerButton.addEventListener('click', () => menu.toggleMenu(nav, burgerButton));
// Первый закон зомби-апокалипсиса: будь человеком и к тебе потянутся


const localStorage = window.localStorage;
let theme = localStorage.getItem('theme');
const themeStateEnum = {
    dark: 'dark',
    light: 'light',
}

themeCheckbox.addEventListener('change', () => {
    if (theme === themeStateEnum.dark) {
        theme = themeStateEnum.light;
    } else {
        theme = themeStateEnum.dark;
    }
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark-theme');
});

if (!theme) {
    localStorage.setItem('theme', themeStateEnum.dark);
    theme = themeStateEnum.dark;
} else if (theme !== themeStateEnum.dark) {
    document.body.classList.remove('dark-theme');
    themeCheckbox.checked = !themeCheckbox.checked;
}
// Ложь неприятнее всего, когда она глагол.
