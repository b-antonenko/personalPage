import reactPosterImg from '../images/react-poster.png';
import personalPage from '../images/personalPage.png';
import natours from '../images/natours.png';

export const linksData = [
  {
    title: 'About',
    link: '/#about',
    num: '01. ',
    key: 'about',
  },
  {
    title: 'Experience',
    link: '/#experience',
    num: '02. ',
    key: 'experience',
  },
  {
    title: 'Work',
    link: '/#projects',
    num: '03. ',
    key: 'work',
  },
  {
    title: 'Contact',
    link: '/#contact',
    num: '04. ',
    key: 'contact',
  },
];

export const technologies = ['Javascript', 'TypeScript', 'React', 'React Native', 'Redux', 'Jest'];

export const buttons = [
  { title: 'Transcenda', id: 'transcenda' },
  { title: 'Freelance', id: 'freelance' },
];

export const data = [{
  id: 'transcenda',
  position: 'Frontend Engineer',
  duration: 'December 2019 - Current time',
  sections:
    ['Collaboration with a team of developers to create a cross-platform and cross-device application based on React Native to manage smart home devices. Main tech stack on this project: react native, redux, rest api, firebase',
      'Developing a react components library based on a big design system. Main stack: react, react-bootstrap, jest, css/scss, storybook, git.',
    ],
},
{
  id: 'freelance',
  position: 'React Native / React engineer',
  duration: '2019 - 2024',
  sections:
    ['"Нумо" - kids educational mobile application. Uploaded on Apps Store & Play Market',
      '"CheckupScout" - healthcare mobile application with the main idea to help detect possible diseases of users.',
      '"Perkset" - the ultimate employee benefits management app for your company. Uploaded on both markets.'],
}];

export const onSayHelloButtonClick = () => {
  const email = 'b_antonenko@icloud.com';
  const subject = 'Hello, Bohdan';
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
};

export const projects = [
  {
    name: 'React Poster',
    description: 'A minimal React app for managing posts, built with Vite, React Router, and CSS Modules. As a back-end MockApi used.',
    stack: ['react', 'react router', 'css modules', 'vite', 'mockApi', 'netlify'],
    website: 'https://react-poster-ab.netlify.app/',
    git: 'https://github.com/b-antonenko/react-poster',
    img: reactPosterImg,
  },
  {
    name: 'My Personal Page',
    description: 'My personal website page built on react + vite, running on Netlify',
    stack: ['react', 'css', 'vite', 'netlify'],
    website: 'https://b-an.dev/',
    git: 'https://github.com/b-antonenko/personalPage',
    img: personalPage,
  },
  {
    name: 'Natours',
    description: 'Natours is a modern, desktop-first, responsive travel website built using HTML, CSS, and Sass. The project follows the 7-1 Sass architecture to maintain a clean and modular structure.',
    stack: ['html', 'css', 'sass', 'netlify'],
    website: 'https://natours-ab.netlify.app/',
    git: 'https://github.com/b-antonenko/natours',
    img: natours,
  },
];
