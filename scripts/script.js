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
            div.textContent = `${skill.level}%`;
            dt.classList.add('skill-item');
            dd.classList.add('skill-level');
            dt.style.backgroundImage = `url("../img/skills/${skill.icon}")`;
            div.style.width = `${skill.level}%`;

            dd.append(div);
            parentElement.append(dt);
            parentElement.append(dd);
        });
    },
}

const skillList = document.querySelector('.skill-list');
skills.generateList(skillList);
