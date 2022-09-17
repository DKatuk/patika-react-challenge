import React from "react";

const About = () => {
  return (
    <div className="m-6 text-center">
      <h1 className="text-2xl font-bold text-primary-200">
        About Todo Project
      </h1>
      <hr className="my-2" />
      <p className="text-secondary-300 dark:text-secondary-100">
        This project was develop for{" "}
        <a
          href="https://www.patika.dev/bootcamp/popupsmart-react-practicum"
          className="font-bold text-primary-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          Patika.dev Popupsmart Practicium
        </a>{" "}
        which will be held between 21.09.22- 05.10.22.{" "}
      </p>
      <h2 className="text-xl font-bold text-primary-200 dark:text-secondary-100 mt-3 ">
        Technologies Used
      </h2>
      <ol className="text-secondary-300 dark:text-secondary-100">
        <li>React</li>
        <li>React Router</li>
        <li>React Icons</li>
        <li>Tippy.js tooltip</li>
        <li>React-big-calendar</li>
        <li>React recharts</li>
        <li>ESlint</li>
        <li>Prettier</li>
        <li>Tailwindcss</li>
        <li>Tailwindcss Line-clamp</li>
        <li>Git - Github</li>
      </ol>
      <h1 className="text-xl font-bold text-primary-200 mt-3">
        Get To Know Me
      </h1>
      <hr className="my-2" />
      <img
        src="https://avatars.githubusercontent.com/u/100930519?v=4"
        alt="logo"
        className="w-28 mx-auto rounded-full my-2"
      />
      <p className="text-secondary-300 dark:text-secondary-100">
        {" "}
        Hey! I am a Frontend Developer from Izmir,Turkey. I recently completed
        Re:Coded Front-End Bootcamp. So, I am familiar with Bootcamp
        environment. Re:Coded is a non-profit organization that has Flatiron
        School's (in NYC, USA) Software Engineering and Web Development Courses.
        This immersive bootcamp was highly competitive, with a 5% acceptance
        rate. Upon completion of the courses in 20 weeks, I have developed a
        strong foundation in git, Github, HTML, CSS, JavaScript, React, Next.js,
        Tailwincss and Bootstrap. I am looking for a Frontend Developer position
        where I can improve my skills. I believe I can be a valuable asset to
        Popupsmart team because I am a total team-player. I always like to
        improve my skills by either taking online courses or having hands-on
        experience by doing an internship or working. I am a fast learner and
        always open to new ideas and feedback. Looking forward to hearing from
        you.
      </p>
      <div className="flex justify-center gap-5 mt-3">
        <a
          href="https://github.com/DKatuk"
          className="font-bold text-primary-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
        <a
          href="https://www.linkedin.com/in/dilara-katuk-0bab56211/"
          className="font-bold text-primary-100"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Linkedin
        </a>
      </div>
    </div>
  );
};

export default About;
