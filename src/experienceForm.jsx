export default function ExperienceForm({
  state,
  experiences,
  onExperienceChange,
  index,
}) {
  return (
    <form
      className="flex flex-col bg-white m-2 p-2 rounded-lg border-2 border-red-400"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor="job-title" className="">
        Job Title:
      </label>
      <input
        type="text"
        value={experiences.title}
        id="job-title"
        onInput={(e) => {
          let newState = [...state];
          newState[index] = { ...experiences, title: e.target.value };
          onExperienceChange(newState);
        }}
        className="border-2 border-gray-200 mb-3"
      />

      <label htmlFor="company-name" className="">
        Company Name:
      </label>
      <input
        type="text"
        value={experiences.company}
        id="company-name"
        onInput={(e) => {
          let newState = [...state];
          newState[index] = { ...experiences, company: e.target.value };
          onExperienceChange(newState);
        }}
        className="border-2 border-gray-200 mb-3"
      />
      <div className="flex gap-4">
        <div className="flex flex-col w-2/5">
          <label htmlFor="job-start" className="">
            Start Year:
          </label>
          <input
            type="number"
            value={experiences.start}
            id="job-start"
            onInput={(e) => {
              let newState = [...state];
              newState[index] = { ...experiences, start: e.target.value };
              onExperienceChange(newState);
            }}
            className="border-2 border-gray-200 mb-3"
          />
        </div>
        <div className="flex flex-col w-2/5">
          <label htmlFor="job-end" className="">
            End Year:
          </label>
          <input
            type="text"
            value={experiences.end}
            id="job-end"
            onInput={(e) => {
              let newState = [...state];
              newState[index] = { ...experiences, end: e.target.value };
              onExperienceChange(newState);
            }}
            className="border-2 border-gray-200 mb-3"
          />
        </div>
      </div>
      <label htmlFor="job-description" className="">
        Job Description:
      </label>
      <textarea
        value={experiences.description}
        id="job-description"
        onInput={(e) => {
          let newState = [...state];
          newState[index] = { ...experiences, description: e.target.value };
          onExperienceChange(newState);
        }}
        className="border-2 border-gray-200 mb-3"
        rows={6}
      />
      <button
        className="text-white bg-red-700"
        onClick={() => {
          let newState = [...state];
          newState.splice(index, 1);
          onExperienceChange(newState);
        }}
      >
        REMOVE EXPERIENCE
      </button>
    </form>
  );
}
