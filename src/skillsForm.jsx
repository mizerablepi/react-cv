export default function SkillsForm(props) {
  const skillsList = props.skills.join(",");
  const awardsList = props.awards.join(",");

  function handleSkillInput(e) {
    const newList = e.target.value.split(",");
    props.onSkillsChange(newList);
  }

  function handleAwardsInput(e) {
    const newList = e.target.value.split(",");
    props.onAwardsChange(newList);
  }
  return (
    <form
      className="flex flex-col bg-white px-4 pb-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor="skills" className="mt-3">
        Skills:
      </label>
      <input
        type="text"
        value={skillsList}
        id="skills"
        onInput={handleSkillInput}
        className="border-2 border-gray-200"
      />

      <label htmlFor="awards" className="mt-3">
        Skills:
      </label>
      <input
        type="text"
        value={awardsList}
        id="awards"
        onInput={handleAwardsInput}
        className="border-2 border-gray-200"
      />
    </form>
  );
}
