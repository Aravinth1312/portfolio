import { Skill } from '../types/types';

export const skills: Skill[] = [
  {
    category: 'Frontend',
    technologies: [
      {
        name: 'HTML',
        color: '#E34F26',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS',
        color: '#1572B6',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      },
      {
        name: 'JavaScript',
        color: '#F7DF1E',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      {
        name: 'Java',
        color: '#D23C29',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      },
      {
        name: 'Node.js',
        color: '#339933',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Express',
        color: '#000000',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      },
      {
        name: 'Python',
        color: '#3776AB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      },
    ],
  },
  {
    category: 'Database',
    technologies: [
      {
        name: 'MySQL',
        color: '#4479A1',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      },
      {
        name: 'PostgreSQL',
        color: '#336791',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        color: '#47A248',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      },
    ],
  },
  {
    category: 'Testing',
    technologies: [
      {
        name: 'Software Testing',
        color: '#FFA500',
        icon: 'https://cdn-icons-png.flaticon.com/512/906/906343.png', // Custom icon as devicon doesn't have one
      },
    ],
  },
  {
    category: 'Tools & Version Control',
    technologies: [
      {
        name: 'Git',
        color: '#F05032',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      },
      {
        name: 'GitHub',
        color: '#181717',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      },
    ],
  },
];
