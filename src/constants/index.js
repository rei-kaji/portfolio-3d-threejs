import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  netlearning,
  multiplecompany,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  csharp,
  nextjs,
  imagegenerator,
  eventbbs,
  fakemario,
  fitness,
  note,
  pokemon,
  portfolio,
  teslaimitate,
  stoprygenerator,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DataBase Developer",
    icon: mobile,
  },
  {
    title: "Project Manager",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Netlearning Holdings",
    icon: netlearning,
    iconBg: "#383E56",
    date: "April 2018 - July 2021",
    points: [
      "This company serves e-learning systems and develops everything in-house. Joined after graduating.",
      "As a full-stack developer had worked to build frontend to backend apps with C#(.Net), Java, JavaScript, HTML and CSS. The database was Microsoft SQL Server, and to automation was Jenkins.",
      "I owned development to test, release, operate and maintain.",
      "Developed Japan's first service is linking IMS's Blockchains type Open Badge with the company's LMS in 4 months.",
      "As the leader of the maintenance team, I improved the response method and followed up with the support team, resulting in a 35% increase in productivity and a 40% decrease in the number of requests.",
    ],
  },
  {
    title: "Freelance Developer",
    company_name: "Multiple Company",
    icon: multiplecompany,
    iconBg: "#E6DEDD",
    date: "July 2021 - Current",
    points: [
      "Working for multiple startups as a freelance developer while attending CICCC",
      "Tasks include building Shopify, web app development, project management, etc.",
      "Built Shopify apps without prior experience using Liquid, learned quickly and successfully customized and fixed bugs in FrancFranc EC Shop",
      "Led a project as PM and Developer to launch a new agency, successfully brought together 3 designers and 5 developers to achieve great results and release a new type of agency service",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI Image Generator",
    description:
      "AI image generator website. It uses OpenAI's Image Generator API and React/Tailwind for frontend, Express/MongoDB for backend, and Cloudinary for image storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
    ],
    image: imagegenerator,
    source_code_link: "https://github.com/rei-kaji/AI-Image-Generator",
    demo: "https://rei-ai-image-generator.netlify.app/",
  },
  {
    name: "Story Generator",
    description:
      "This app uses OpenAI's API to generate a story based on a title, genre, and keywords. It also automatically generates images based on the keywords. It's a powerful tool for storytellers, novelists, filmmakers, and game developers.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
      {
        name: "OpenAI",
        color: "white-text-gradient",
      },
    ],
    image: stoprygenerator,
    source_code_link: "https://github.com/rei-kaji/Story-Generator.git",
    demo: "https://story-generator.vercel.app/auth/register",
  },
  {
    name: "Fitness App",
    description:
      "Using RappidAPI to get the fitness data. You can search and learn how to make your body strong. It show the animation so you can do easy!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RappidAPI",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: fitness,
    source_code_link: "https://github.com/rei-kaji/fitness-app",
    demo: "https://rei-fitness.netlify.app/",
  },
  {
    name: "Event BBS",
    description:
      "My friend and I created a service to solve the problem of not knowing if there are people playing soccer or basketball at Vancouver's parks. Users can form teams and find other players through the service, making it easier to play the game they love.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: eventbbs,
    source_code_link: "https://github.com/rei-kaji/event-bbs",
    demo: "https://event-bbs.web.app",
  },
  {
    name: "Portfolio in full scratch",
    description:
      "Features include full-scratch overall creation, floating menus, and CSS animations implemented.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/rei-kaji/portfolio-react",
    demo: "https://rei-portfolio.netlify.app/#home",
  },
  {
    name: "Fake Mario Maker",
    description:
      "This is an application that allows you to freely create and play with fields and enemies like MarioMaker.",
    tags: [
      {
        name: "C#",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Visual Studio",
        color: "pink-text-gradient",
      },
    ],
    image: fakemario,
    source_code_link: "https://github.com/rei-kaji/FakeMario.git",
    demo: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
