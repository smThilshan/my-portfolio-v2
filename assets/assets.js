import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./thilshan-logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./thilshan-photo-hd.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import flutter_icon from "./icons8-flutter.svg";
import java_icon from "./icons8-java.svg";
import javascript_icon from "./icons8-javascript.svg";
import html_icon from "./icons8-html.svg";
import css_icon from "./icons8-css.svg";
import tailwind_css_icon from "./icons8-tailwind-css.svg";
import dart_icon from "./icons8-dart.png";
import react_icon from "./icons8-react.svg";
import react_native_icon from "./icons8-react-native.svg";
import springboot_icon from "./icons8-spring-boot.svg";
import php_icon from "./icons8-php.svg";
import laravel_icon from "./icons8-laravel-48.png";
import expressjs_icon from "./icons8-express-js.svg";
import nodejs_icon from "./icons8-nodejs.svg";
import nextjs_icon from "./icons8-nextjs.svg";
import typescript_icon from "./icons8-typescript.svg";
import sql_icon from "./icons8-sql-48.png";
import mysql_icon from "./icons8-mysql-50.png";
import postgress_sql_icon from "./icons8-postgresql.svg";
import sqlite_sql_icon from "./icons8-sqlite.svg";
import bootstrap_icon from "./icons8-bootstrap.svg";
import python_icon from "./icons8-python.svg";
import mongodb_icon from "./icons8-mongodb.svg";
import pearson_logo from "./pearson.png";
import kingston_logo from "./kingston-university.png";
import imara_logo from "./imarasoft_logo.jpeg";
import udemy_logo from "./udemy-logo.png";
import aws_logo from "./aws-logo.png";
import linkedin_logo from "./Linkedin-logo.png";
import postman_logo from "./postman-logo.png";
import udacity_logo from "./udacity.png";
import nvq_logo from "./nvq-logo.png";
import isoft_logo from "./isoft-logo.png";



export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  flutter_icon,
  java_icon,
  javascript_icon,
  html_icon,
  css_icon,
  tailwind_css_icon,
  dart_icon,
  react_icon,
  react_native_icon,
  springboot_icon,
  php_icon,
  laravel_icon,
  expressjs_icon,
  nodejs_icon,
  nextjs_icon,
  typescript_icon,
  sql_icon,
  mysql_icon,
  postgress_sql_icon,
  sqlite_sql_icon,
  bootstrap_icon,
  python_icon,
  mongodb_icon,
  pearson_logo,
  kingston_logo,
  imara_logo,
  udemy_logo,
  aws_logo,
  linkedin_logo,
  postman_logo,
  udacity_logo,
  nvq_logo,
  isoft_logo
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js",
    route: "/languages",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "B.Tech in Computer Science",
    route: "/education",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
    route: "/projects",
  },
];

export const projectsList = [
  {
    name: "Portfolio Website",
    description:
      "A personal portfolio site built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS"],
    image: assets.figma,
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourname/portfolio",
  },
  {
    name: "E-commerce App",
    description: "Cross-platform shopping app built with Flutter.",
    tech: ["Flutter", "Firebase"],
    image: assets.figma,
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourname/portfolio",
  },
  {
    name: "Admin Dashboard",
    description: "Responsive admin panel with user management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: assets.figma,
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourname/portfolio",
  },
    {
    name: "Admin Dashboard",
    description: "Responsive admin panel with user management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: assets.figma,
    // liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourname/portfolio",
  },
];

export const languageList = [
  { name: "HTML5", icon: assets.html_icon },
  { name: "CSS3", icon: assets.css_icon },
  { name: "JavaScript", icon: assets.javascript_icon },
  { name: "Tailwind css", icon: assets.tailwind_css_icon },
  { name: "Dart", icon: assets.dart_icon },
  { name: "Flutter", icon: assets.flutter_icon },
  { name: "React js", icon: assets.react_icon },
  { name: "React Native", icon: assets.react_native_icon },
  { name: "Java", icon: assets.java_icon },
  { name: "SpringBoot", icon: assets.springboot_icon },
  { name: "Php", icon: assets.php_icon },
  { name: "Laravel", icon: assets.laravel_icon },

  { name: "Express js", icon: assets.expressjs_icon },
  { name: "Node js", icon: assets.nodejs_icon },
  { name: "MongoDB", icon: assets.mongodb_icon },
  { name: "Next js", icon: assets.nextjs_icon },
  { name: "Typescript", icon: assets.typescript_icon },
  { name: "Python", icon: assets.python_icon },

  { name: "Sql", icon: assets.sql_icon },
  { name: "MySql", icon: assets.mysql_icon },
  { name: "Sqlite", icon: assets.sqlite_sql_icon },
  { name: "Postgres", icon: assets.postgress_sql_icon },

  { name: "Bootstrap", icon: assets.bootstrap_icon },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];

export const educationList = [
  {
    type: "Bachelors Degree",
    title: "B.Sc. (Hons) in Computer Science",
    institution: "Kingston University",
    year: "2023 - 2024",
    logo: assets.kingston_logo,
  },
  {
    type: "Higher National Diploma",
    title: "HND in Software Engineering",
    institution: "Pearson",
    year: "2023 - 2021",
    logo: assets.pearson_logo,
  },
  {
    type: "Diploma",
    title: "Diploma in Web design & development",
    institution: "Imara Software Solution",
    year: "2021",
    logo: assets.imara_logo,
  },
];

export const certificationList = [
  {
    name: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    status: "completed",
    year: "2025",
    logo: assets.postman_logo,
  },
  {
    name: "Software Debugging",
    issuer: "Udacity",
    status: "progress",
    year: "2025",
    logo: assets.udacity_logo,
  },
  {
    name: "AWS Cloud Practitioner CLF-C02",
    issuer: "Amazon Web Services",
    status: "progress",
    year: "2025",
    logo: assets.aws_logo,
  },
  {
    name: "NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)",
    issuer: "Udemy",
    status: "progress",
    year: "2025",
    logo: assets.udemy_logo,
  },
  {
    name: "Java Spring Framework 6, Spring Boot 3, Spring AI Telusko",
    issuer: "Udemy",
    status: "progress",
    year: "2023",
    logo: assets.udemy_logo,
  },
  {
    name: "Docker and Kubernates: The Complete Guide",
    issuer: "Udemy",
    status: "progress",
    year: "2025",
    logo: assets.udemy_logo,
  },
  {
    name: "React Essential Training",
    issuer: "LinkedIn",
    status: "completed",
    year: "2025",
    logo: assets.linkedin_logo,
  },
  {
    name: "TypeScript for Beginners: Mastering TypeScript Fundamentals",
    issuer: "Udemy",
    status: "completed",
    year: "2025",
    logo: assets.udemy_logo,
  },
  {
    name: "National Vocational Qualification lvl-3",
    issuer: "NVQ Sri Lanka",
    status: "completed",
    year: "2020",
    logo: assets.nvq_logo,
  },
  {
    name: "Diploma in Spoken English",
    issuer: "Isoft Puttalam",
    status: "completed",
    year: "2020",
    logo: assets.isoft_logo,
  },
];
