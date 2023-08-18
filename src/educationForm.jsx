export default function EducationForm({ education, onEducationChange }) {
  return (
    <form
      className="flex flex-col bg-white px-4 pb-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label htmlFor="degree" className="mt-3">
        Highest Degree:
      </label>
      <input
        type="text"
        value={education.name}
        id="degree"
        onInput={(e) => {
          onEducationChange({ ...education, name: e.target.value });
        }}
        className="border-2 border-gray-200"
      />

      <label htmlFor="college" className="mt-3">
        College Name:
      </label>
      <input
        type="text"
        value={education.college}
        id="college"
        onInput={(e) => {
          onEducationChange({ ...education, college: e.target.value });
        }}
        className="border-2 border-gray-200"
      />

      <label htmlFor="year" className="mt-3">
        Passing Year:
      </label>
      <input
        type="number"
        value={education.year}
        id="year"
        onInput={(e) => {
          onEducationChange({ ...education, year: e.target.value });
        }}
        className="border-2 border-gray-200"
      />
    </form>
  );
}
