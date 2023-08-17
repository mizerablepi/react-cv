import { useState } from "react";

import CV from "./cv";
import Aside from "./aside";

export default function App() {
  const [firstName, setFirstName] = useState("MUAAZ");
  const [lastName, setLastName] = useState("SHAIKH");
  const [jobTitle, setJobTitle] = useState("SOFTWARE ENGINEER");
  const [email, setEmail] = useState("mizerablepi@gmail.com");
  const [number, setNumber] = useState("1234567890");
  const [linkedin, setlinkedin] = useState("linkedin.com/muaaz-shaikh");
  const [address, setAddress] = useState("Panvel, India");
  const [about, setAbout] = useState(
    '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate voluptatibus numquam architecto asperiores ducimus magni mollitia non eos, dolorem reiciendis, odio fugit quis molestias, accusamus quae ipsam veniam blanditiis commodi."'
  );
  const [skills, setSkills] = useState([
    "JavaScript",
    "HTML",
    "Tailwind",
    "Webpack",
    "Python",
    "Data Analysis",
    "React",
  ]);
  const [awards, setAwards] = useState([
    "Best person",
    "Programmer of the year",
    "i use arch btw",
    "supreme leader",
  ]);
  const [experiences, setExperiences] = useState([
    {
      title: "YOUR JOB TITLE",
      company: "company name",
      start: "2015",
      end: "2019",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati praesentium accusamus veniam facere impedit maxime facilis? Harum et placeat impedit suscipit magnam aperiam, voluptate ratione fugiat delectus quae sint.",
    },
    {
      title: "YOUR JOB TITLE",
      company: "company name",
      start: "2015",
      end: "2019",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati praesentium accusamus veniam facere impedit maxime facilis? Harum et placeat impedit suscipit magnam aperiam, voluptate ratione fugiat delectus quae sint.",
    },
  ]);
  return (
    <div className="flex justify-between">
      <Aside />
      <CV
        firstName={firstName}
        lastName={lastName}
        jobTitle={jobTitle}
        number={number}
        email={email}
        linkedin={linkedin}
        address={address}
        about={about}
        skills={skills}
        awards={awards}
        experiences={experiences}
      />
    </div>
  );
}
