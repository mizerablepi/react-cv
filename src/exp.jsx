export default function Experience({ experiences }) {
  return (
    <div>
      <h4 className="font-bold">Professional Experience</h4>
      {experiences.map((exp, index) => {
        return (
          <div key={index} className="mt-4">
            <h4 className="font-bold">{exp.title}</h4>
            <h5 className="font-bold">
              {exp.company} -{exp.start} - {exp.end}
            </h5>
            <p className="ml-4">{exp.description}</p>
          </div>
        );
      })}
    </div>
  );
}
