// import image1 from "../public/test.jpg"
import image2 from "../public/images/Schermopname_7.png"
import image1 from "../public/images/Schermopname_8.png"
import image3 from "../public/images/Schermopname_9.png"
import image4 from "../public/images/Schermopname_10.png"
import image5 from "../public/images/molview1.png"

const references = [
    {
      title: "Car4Rent",
      image: image4,
      link: "car4rent",
      description: "Car4Rent is a car rental application that allows users to rent cars from different locations. The application is built using Next.js, Springboot, and Azure. The application is hosted on Azure and uses Azure's CosmosDB for the database. The application is built using a microservices architecture and uses Azure's Services for deployment.",
      variable1: 30,
      variable2: -150,
      tech1: "NEXT.JS",
      tech2: "SPRINGBOOT",
      tech3: "AZURE"
    },
    {
      title: "H2GROW",
      image: image2,
      description: "H2Grow was a 3 week long project which aimed to developed a automated watering systems for plants. We used Three.js to create a 3D model for the plants adding a personal touch. The project was developed using Next.js, Springboot and Min.io.",
      link: "h2grow",
      variable1: 100,
      variable2: 30,
      tech1: "NEXT.JS",
      tech2: "SPRINGBOOT",
      tech3: "MIN.IO",
      tech4: "THREE.JS"
    },
    {
      title: "MOLVIEW",
      image: image5,
      description: "Molview is a ongoing project which is still in progress that aims to create visualizations of molecules and atoms and applying Mobius transformations to them. The project is developed using Next.js, Typescript and Three.js.",
      link: "molview",
      variable1: 100,
      variable2: 30,
      tech1: "NEXT.JS",
      tech2: "TYPESCRIPT",
      tech3: "THREE.JS"
    },
    {
      title: "Kevin Dhond",
      image: image3,
      description: "Kevin Dhond is a local landscaper who wanted to create a website to showcase his work and attract new clients. The website was built using React.js and features a clean, modern design that highlights Kevin's landscaping services.",
      link: "kevindhond",
      variable1: 120,
      variable2: 60,
      tech1: "UI/UX",
      tech2: "REACT.JS"
    },
    {
      title: "T. Thoelen",
      image: image1,
      description: "Tycho Thoelen is a fellow student who does photography on the side. He wanted a website to showcase his work and attract new clients. The website was built using React.js and features a clean, modern design that highlights Tycho's photography services.",
      link: "tychothoelen",
      variable1: 120,
      variable2: 60,
      tech1: "UI/UX",
      tech2: "REACT.JS"
    },
    
  ];

const hobbies = [
  {
    name: "cycling",
  },
  {
    name: "developing",
  },
  {
    name: "cooking",
  },
  {
    name: "ui/ux",
  },
  {
    name: "football",
  },
  {
    name: "movies",
  },
  {
    name: "travelling",
  },
]
  
  const navItems = [
    {
      name: "iNDEX",
    },
    {
      name: "aBOUT",
    },
    {
      name: "cONTACT",
    },
  ];


  export { references, navItems, hobbies};