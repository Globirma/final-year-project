# Final Year Project – Programming Learning Game

A beginner-friendly web app designed to teach core programming concepts through a game-like learning experience. It combines lessons, progress tracking, rewards, and interactive coding activities to make learning programming more engaging and approachable.

## Overview

This project is built with React and Vite and focuses on teaching fundamental programming topics such as:

- Introduction to programming
- Variables
- Arithmetic
- Conditionals
- Loops

The app uses a structured progression system where learners unlock new lessons as they complete previous ones. It includes visual feedback, progress bars, points, and animated encouragement to keep the learning flow motivating.

## Features

- Gamified lesson progression
- Locked and unlocked unit flow
- Progress tracking across lessons
- XP/points display
- Beginner-focused curriculum
- Interactive coding lesson layout
- Visual feedback and encouragement animations
- Responsive dashboard UI
- Route-based learning experience

## Tech Stack

- React 18
- Vite
- JavaScript / JSX
- React Router DOM
- Tailwind CSS
- Framer Motion
- React DnD
- Iconify
- Lucide React
- Lottie animations
- Math.js

## Project Structure

```bash
Final-Year-Project-Game-main/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── dashboard/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── ...
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.cjs
├── vite.config.js
├── README.md
└── .gitignore
```

## Getting Started

Open the project folder and install dependencies:

```bash
npm install
```

Then start the app:

```bash
npm run dev
```

The application will run locally, typically at:

```text
http://localhost:5173
```

## Available Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## App Flow

1. User lands on the home page.
2. User signs in or signs up.
3. They access the dashboard.
4. They navigate to the Learn page.
5. Lessons unlock based on previous completion.
6. Each lesson updates progress and point values.
7. Completing a unit advances the learner through the curriculum.

## Key Components

- `App.jsx` – route configuration and app-level auth checks
- `ProgressContext.jsx` – stores and updates learning progress
- `Layout.jsx` – dashboard layout shell
- `Learn.jsx` – unit selection and lesson progression
- `Unit0.jsx` – introductory lesson flow and progress logic
- `components/reusabale-ui` – reusable UI parts like buttons and progress bars
- `components/code-editor` – interactive code challenge interface

## Notes

Important: run the app from the project directory `Final-Year-Project-Game-main`, not from the parent folder. Running `npm install` in the wrong folder will result in the error `ENOENT: no such file or directory, open '.../package.json'`.

## License

This project is currently provided without a formal license declaration.

## Author

Final Year Project
```

SkillsCard.jsx

```js
const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className='mt-6 font-bold'>{title}</h4>
      <p className='mt-2 text-slate-500'>{text}</p>
    </article>
  );
};
export default SkillsCard;
```

#### Global Styles

index.html

```html
<html lang="en" class="bg-slate-50 scroll-smooth"></html>
```

#### About

- create About component and render in App.jsx

```js
import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section class='bg-white py-20' id='about'>
      <div class='align-element grid  md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='code and coffee' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
```

#### Projects

- explore "projects" array in data.jsx
- create Projects and ProjectsCard components
- setup return and render in App.jsx

Projects.jsx

```js
import ProjectsCard from './ProjectsCard';
import { projects } from '../data';
import SectionTitle from './SectionTitle';
const Projects = () => {
  return (
    <section className='py-20 align-element' id='projects'>
      <SectionTitle text='web creations' />
      <div className='py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8'>
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
```

ProjectsCard.jsx

```js
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className='bg-white rounded-lg shadow-md block hover:shadow-xl duration-300'>
      <img
        src={img}
        alt={title}
        className='w-full object-cover rounded-t-lg h-64 '
      />
      <div className='capitalize p-8'>
        <h2 className='text-xl tracking-wide font-medium'>{title}</h2>
        <p className='mt-4 text-slate-700 leading-loose'>{text}</p>
        <div className='mt-4 flex gap-x-4'>
          <a href={url}>
            <TbWorldWww className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
          <a href={github}>
            <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
          </a>
        </div>
      </div>
    </article>
  );
};
export default ProjectsCard;
```

#### Extra Challenge

- setup projects in CMS
