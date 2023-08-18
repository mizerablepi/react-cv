import Section from "./section";
import NameForm from "./nameForm";
import SkillsForm from "./skillsForm";
// import ExperienceForm from "./experienceForm";
import EducationForm from "./educationForm";
import ExperienceForm from "./experienceForm";

export default function Aside(props) {
  return (
    <div className="mt-4 pl-4 self-start grid grid-cols-1 max-w-lg flex-1 gap-4">
      <Section title={"Personal info"}>
        <NameForm
          firstName={props.firstName}
          lastName={props.lastName}
          jobTitle={props.jobTitle}
          number={props.number}
          email={props.email}
          linkedin={props.linkedin}
          address={props.address}
          about={props.about}
          onFirstNameChange={props.onFirstNameChange}
          onLastNameChange={props.onLastNameChange}
          onJobTitleChange={props.onJobTitleChange}
          onNumberChange={props.onNumberChange}
          onEmailChange={props.onEmailChange}
          onLinkedinChange={props.onLinkedinChange}
          onAddressChange={props.onAddressChange}
          onAboutChange={props.onAboutChange}
        />
      </Section>
      <Section title={"Skills & Awards"}>
        <SkillsForm
          skills={props.skills}
          awards={props.awards}
          onSkillsChange={props.onSkillsChange}
          onAwardsChange={props.onAwardsChange}
        />
      </Section>
      <Section title={"Experiences"}>
        {props.experiences.map((exp, index) => {
          return (
            <ExperienceForm
              state={props.experiences}
              experiences={exp}
              onExperienceChange={props.onExperienceChange}
              index={index}
              key={exp.title}
            />
          );
        })}
        <button
          className="bg-green-500 text-gray-100 font-bold ml-2 mb-2 p-1 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            let newState = [...props.experiences];
            newState.push({
              title: "YOUR JOB TITLE",
              company: "company name",
              start: "2015",
              end: "2019",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem obcaecati praesentium accusamus veniam facere impedit maxime facilis? Harum et placeat impedit suscipit magnam aperiam, voluptate ratione fugiat delectus quae sint.",
            });
            props.onExperienceChange(newState);
          }}
        >
          ADD EXPERIENCE
        </button>
      </Section>
      <Section title={"Education"}>
        <EducationForm
          education={props.education}
          onEducationChange={props.onEducationChange}
        />
      </Section>
    </div>
  );
}
