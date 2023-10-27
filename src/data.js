// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (uncomment below and import your image)
// import newLogo from "./images/yourFileName"

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "genene";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="ph:link-bold" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "I take pleasure in collaborating within teams. I hold a strong belief that effective communication and collaboration among team members are essential for attaining success in projects. I am consistently eager to share my knowledge and insights with my colleagues to contribute to the overall success of the team.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-java" className="display-4" />,
    name: "Java"
  },
  {
    id: 2,
    skill: <Icon icon="mdi:database" className="display-4" />,
    name: "SQL Database"
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="mdi:database" className="display-4" />,
    name: "MongoDB"
  },
  {
    id: 5,
    skill: <Icon icon="mdi:aws" className="display-4" />,
    name: "AWS"
  },
  {
    id: 6,
    skill: <Icon icon="mdi:database" className="display-4" />,
    name: "Oracle Database"
  },
  {
    id: 7,
    skill: <Icon icon="mdi:language-cpp" className="display-4" />,
    name: "C++"
  },
  {
    id: 8,
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python"
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];


// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://resume-genene.s3.amazonaws.com/Genene_Aga_Resume.pdf)
export const resume = "https://resume-genene.s3.amazonaws.com/Genene_Aga_Resume.pdf";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
*/
export const formspreeUrl = "https://7732ndfes0.execute-api.us-east-1.amazonaws.com/s3/contact";
