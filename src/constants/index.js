export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "CMMA - Maintenance Management System",
    desc: "Software for managing the assets of college and offices. It includes managing the hardware and software resources within college or office, stock management, maintenance of college computer lab and others. Still Updations going on...",
    subdesc:
      "Built as a asset and maintenance management system with Laravel, PHP, and SASS.",
    href: "",
    texture: "/textures/project/cmma.png",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Laravel",
        path: "/assets/icons/laravel.png",
      },
      {
        id: 2,
        name: "PHP",
        path: "assets/icons/php.svg",
      },
      {
        id: 3,
        name: "Sass",
        path: "/assets/icons/sass.png",
      },
    ],
  },
  {
    title: "Portfolio",
    desc: "A dynamic, interactive platform designed to showcase my journey, expertise, and creative problem-solving skills. With a clean, modern interface and cutting-edge web technologies, it highlights my proficiency in building scalable applications, intuitive UI/UX designs, and innovative solutions. More coming soon...",
    subdesc:
      "Built as a portfolio app with Three.js, React, Tailwind CSS and JavaScript.",
    href: "",
    texture: "/textures/project/sc4.png",
    logo: "/assets/logo/shamil_logo.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "Three.js",
        path: "/assets/icons/three.png",
      },
      {
        id: 2,
        name: "React.js",
        path: "/assets/icons/react.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "assets/icons/tailwindcss.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/icons/javascript.png",
      },
      {
        id: 5,
        name: "Vite",
        path: "/assets/icons/vite-js.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 1.1 : isMobile ? 1.7 : 2.1,
    deskPosition: isSmall
      ? [1.8, -5.1, -6.0]
      : isMobile
      ? [2, -4.4, -8.9]
      : [3.9, -6.1, -8.9],
    deskRotation: isSmall
      ? [-2.8, -1.6, 3.4]
      : isMobile
      ? [-2.8, -1.6, 3.1]
      : [-2.8, -1.6, 3.3],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};
