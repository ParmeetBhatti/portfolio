
import {faHome, faUserGraduate, faFolder, faBook} from '@fortawesome/free-solid-svg-icons'
export const navLinks = [
    {
        id: 1,
        name: 'Home',
        icon: faHome,      
        path: '/'
    },
    {
        id: 2,
        name: `About`,
        icon : faUserGraduate,
        path: '/About'
    }, 
    {
        id: 3,
        name: 'Projects',
        icon : faFolder,
        path: '/projects'
    },
    {
        id: 4,
        name: 'Education',
        icon : faBook,
        path: '/Education'
    },
];


import image1 from '../../src/assets/html.png'
import image2 from '../../src/assets/css.png'
import image3 from '../../src/assets/js.png'
import image4 from '../../src/assets/react.png'
import image5 from '../../src/assets/php.png'
import image6 from '../../src/assets/python.png'
export const tools = [
    {
        id: 1,
        img: image1,
    },
    {
        id: 2,
        img: image2,
    },
    {
        id: 3,
        img: image3,
    },
    {
        id: 4,
        img: image4,
    },
    {
        id: 5,
        img: image5,
    },
    {
        id: 6,
        img: image6,
    },
];


import {faCode, faDatabase, faBrain} from '@fortawesome/free-solid-svg-icons'
export const services = [
    {
        id: 1,
        icon: faCode,
        name:'Front End Development',
        des:'Proficient in frontend development with HTML, CSS, JavaScript, and React for building responsive and engaging user interfaces that enhance user interaction.'
    },
    {
        id: 2,
        icon: faDatabase,
        name:'Back End Development',
        des:'Proficient in backend development with PHP and MySQL for building data-driven applications while optimizing queries, and implementing authentication systems to ensure seamless functionality.'
    },
    {
        id: 3,
        icon: faBrain,
        name:'Artificial Intelligence',
        des:'Currently pursuing a Bachelors degree in Artificial Intelligence, dedicated to mastering the intricacies of machine learning, neural networks, and data analysis, with a focus on leveraging AI to address real-world challenges.'
    },
];




import protfoliImg1 from '../../src/assets/p1.jpg'
import protfoliImg2 from '../../src/assets/p2.jpg'
import protfoliImg3 from '../../src/assets/p3.png'
import protfoliImg4 from '../../src/assets/p4.png'
import protfoliImg5 from '../../src/assets/p5.jpg'
export const projects = [
    {
        id: 1,
        img: protfoliImg1,
        name: 'Virtual Assistant',
        des: 'Developed a virtual assistant named "Param" which uses the Speech Recognition library to capture voice commands from the user and perform tasks like Wikipedia search, Google search, Play Music,set alarm and timer, tell jokes, open location on Google Maps and fetch news fromGoogle News using News API.',
        github:'https://github.com/ParmeetBhatti/virtual_assistant',
        host: 'https://github.com/ParmeetBhatti/virtual_assistant',
    },
    {
        id: 1,
        img: protfoliImg2,
        name: 'Real Estate Website',
        des: 'Developed a responsive real estate website using HTML, CSS and JS exhibiting knowledge in front-end web development. Have added dark light theme and developed with mobile first methodology.',
        github: 'https://github.com/ParmeetBhatti/real_estate',
        host:'https://parmeetbhatti.github.io/real_estate/',
    },
    {
        id: 1,
        img: protfoliImg3,
        name: 'Car Rental Management System',
        des: 'Developed a dynamic car rental management system using HTML, CSS, JS , PHP and MySQL. The system encompasses user registration and login functionalities, booking vehicles, booking statustracking and an admin panel for vehicle management and user management.',
        github:'https://github.com/ParmeetBhatti/car_rental',
        host: 'https://github.com/ParmeetBhatti/car_rental',
    },
    {
        id: 1,
        img: protfoliImg4,
        name: 'Portfolio Website',
        des: 'Developed a responsive personal portfolio website using React, demonstrating proficiency in front-end development and design',
        github:'https://github.com/ParmeetBhatti/portfolio',
        host: 'https://parmeetbhatti.github.io/portfolio/',
    },
    {
        id: 1,
        img: protfoliImg5,
        name: 'Enhancement of User Authentication for mitigating MITM attacks',
        des: "Developed an algorithm called 'Park Schema' for mitigating Man in the Middle Attack which uses Multi-factor Authentication and appropriate password hashing techniques in the process .",
        github:'https://github.com/ParmeetBhatti/Park_Schema',
        host: 'https://github.com/ParmeetBhatti/Park_Schema',
    },
];

export const education = [
    {
        id: 1,
        level: 'Secondary School',
        school: 'DAV Public School,Nerul',
        year: '2012-2019',
        percent: '93.2%',
    },
    {
        id: 1,
        level: 'Higher Secondary',
        school: 'DAV Public School,Nerul',
        year: '2019-2021',
        percent: '89.4%',
    },
    {
        id: 1,
        level: 'B.Tech in Information Technology ',
        school: 'K J Somaiya College of Engineering',
        year: '2021-2025',
        percent: '8.85 CGPA',
    },
];



