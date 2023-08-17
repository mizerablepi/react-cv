export default function Education({
  education = {
    name: "YOUR HIGHEST DEGREE",
    college: "College Name",
    year: "2018",
  },
}) {
  return (
    <div className="mt-8">
      <h4 className="mb-3 font-bold">EDUCATION: </h4>
      <h6 className="font-bold">{education.name}</h6>
      <div className="font-bold">
        {education.college} {education.year}
      </div>
    </div>
  );
}
