import tawafonaImg from "./assets/images/projects/tawafona.png";
import nmaImage from "./assets/images/projects/nmaColl.png";
import hmazaImage from "./assets/images/projects/hamza (2).png";
import qnvexImage from "./assets/images/projects/qnvex.png";
import tripImage from "./assets/images/projects/tripVex.png";

const logotext = "Ibrahim";
const meta = {
  title: "Ibrahim Salah",
  description:
    "I’m Ibrahim Salah Software Engireer _ Web devloper,currently working in Egypt Remotly",
};

const introdata = {
  title: "I’m Ibrahim Salah",
  animated: {
    first: "I love coding and development",
    second: "I code frondEnd pages",
    third: "I develop web apps",
  },
  description:
    "Web Developer specialized in building clean, responsive, and user-friendly web applications using modern technologies. Passionate about performance, code quality, and creating intuitive user experiences.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "abit about my self",
  aboutme:
    "Web Developer specialized in building clean, responsive, and user-friendly web applications using modern technologies. Passionate about performance, code quality, and creating intuitive user experiences.",
};
const worktimeline = [
  {
    jobtitle: "FrontEnd Developer",
    where: "QuanVex Company in Egypt",
    date: "2024",
  },
  {
    jobtitle: "Software Engineer And Web Developer",
    where: "FreeLancer",
    date: "2022",
  },
];

const skills = [
  {
    name: "Html",
    value: 99,
  },
  {
    name: "Css3",
    value: 95,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "Bootstrap",
    value: 90,
  },
  {
    name: "Tailwindcss",
    value: 90,
  },
  {
    name: "Shadcn",
    value: 70,
  },
  {
    name: "Reactjs",
    value: 85,
  },
  {
    name: "Nextjs",
    value: 60,
  },
  {
    name: "WordPress",
    value: 60,
  },
  {
    name: "Nodejs",
    value: 30,
  },
  {
    name: "Mongoose",
    value: 30,
  },
  {
    name: "Express",
    value: 30,
  },
  {
    name: "PHP",
    value: 30,
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    description:
      "Crafting responsive, user-friendly interfaces using modern frameworks like React.js and Next.js.    Focused on clean code, performance, and seamless user experiences.",
  },
  {
    title: "Web Apps",
    description:
      "Building scalable, high-performance web applications using modern frameworks like React.js and Next.js — tailored for seamless user experiences and real-world functionality.",
  },
  {
    title: "WordPress Design",
    description:
      "Custom, responsive WordPress websites tailored to your brand. From sleek business pages to dynamic blogs, I create user-friendly designs optimized for performance and easy management.",
  },
];

const dataportfolio = [
  {
    img: tawafonaImg,
    description:
      "Tawafona is a smart platform that helps pilgrims easily book and manage Hajj and Umrah trips.",
    link: "https://dev.tawafona.com/en",
  },
  {
    img: nmaImage,
    description:
      "nmacool is an online platform offering a wide range of Apple products, tech gadgets, and accessories, along with repair and support services.",
    link: "https://nmacool.com/en",
  },
  {
    img: qnvexImage,
    description:
      "QuanVex is a technology company specializing in innovative software solutions, offering services in web development, cloud solutions, and digital transformation for businesses.",
    link: "https://www.quanvex.com/",
  },
  {
    img: hmazaImage,
    description:
      "Hamza Quran Academy offers online Quran education with personalized lessons, helping students of all ages learn and memorize the Quran in a flexible, interactive, and accessible manner.",
    link: "https://hamzahquranacademy.com/",
  },
  {
    img: "https://picsum.photos/400/300/?grayscale",
    description: "Eljaeza freelancer project (Laravel- mysql - reactjs)",
    link: "#",
  },
  {
    img: tripImage,
    description:
      "Tripvex is a tourism platform that helps travelers discover, plan, and book unique experiences, offering curated tours, accommodations, and activities for a personalized travel adventure.",
    link: "#",
  },

  // {
  //   img: "https://picsum.photos/400/600/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/300/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/550/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/700/?grayscale",
  //   description:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
];

const contactConfig = {
  YOUR_EMAIL: "ibrahimsalah824@gmail.com",
  YOUR_FONE: "(+971)561 676 586",
  description:
    "Feel free to reach out for web development collaborations, freelance projects, or just to say hello. I'm always open to discussing new ideas or opportunities in frontend development.",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com/IbrahimSalahEldin",
  facebook: "https://facebook.com",
  linkedin: "https://www.linkedin.com/in/ibrahim-salah-29850517b/",
  twitter: "https://twitter.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
