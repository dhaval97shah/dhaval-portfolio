import dynamic from "next/dynamic";

const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const GithubProfileCard = dynamic(() =>
  import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
  return (
    <div>
      <SEO
        data={{
          title: "Dhaval Shah",
          description: "A passionate React Developer and Mobile App Developer.",
          url: "https://developer-portfolio-1Dhaval100.vercel.app",
          keywords: [
            "React js",
            "React native",
            "Mobile application",
            "web developer",
            "mobile app developer",
            "Dhaval",
            "Dhaval Shah",
            "Dhaval Portfolio ",
            "Dhaval Shah Portfolio",
            "contextapi",
            "redux",
            "Tailwind css",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <Education />
      <Experience />
      {/* <Feedbacks /> */}
      <Projects />
      <GithubProfileCard />
    </div>
  );
}
