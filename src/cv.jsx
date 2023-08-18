import Name from "./name";
import Title from "./jobtitle";
import Contact from "./contact";
import About from "./about";
import Skills from "./skills";
import Awards from "./awards";
import Experience from "./exp";
import Education from "./education";

export default function CV({
  firstName,
  lastName,
  jobTitle,
  number,
  email,
  linkedin,
  address,
  about,
  skills,
  awards,
  experiences,
  education,
}) {
  return (
    <div className="cv bg-white shadow-md px-6 m-2 text-xs h-min">
      <Name firstName={firstName} lastName={lastName} />
      <Title jobTitle={jobTitle} />
      <div className="px-1 py-6 border-b-2 border-gray-200 border-solid flex gap-6 justify-between">
        <Contact
          number={number}
          email={email}
          linkedin={linkedin}
          address={address}
        />
        <About about={about} />
      </div>
      <div className="flex justify-between py-9 gap-6">
        <div className="left-body flex flex-col border-r-2 border-gray-200 border-solid">
          <Skills skills={skills} />
          <Awards awards={awards} />
        </div>
        <div className="right-body flex flex-col">
          <Experience experiences={experiences} />
          <Education education={education} />
        </div>
      </div>
    </div>
  );
}
