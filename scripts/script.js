const skills = {
    data: [
        {
            name: 'html',
            level: 50,
            icon: 'html.svg',
        },
        {
            name: 'css',
            level: 50,
            icon: 'css.svg',
        },
        {
            name: 'python',
            level: 50,
            icon: 'python.svg',
        },
        {
            name: 'c++',
            level: 50,
            icon: 'c++.svg',
        },
    ],

    generateList: function (parentElement) {
        this.data.forEach((skill) => {
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            const div = document.createElement('div');

            dt.textContent = skill.name;
            dt.classList.add('skill-item');
            dt.style.backgroundImage = `url("../img/skills/${skill.icon}")`;
            dd.classList.add('skill-level');
            div.style.width = `${skill.level}%`;
            div.textContent = `${skill.level}%`;

            dd.append(div);
            parentElement.append(dt);
            parentElement.append(dd);
        });
    },
}

const skillList = document.querySelector('.skill-list');
skills.generateList(skillList);
