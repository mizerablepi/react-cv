export default function Skills({ skills }) {
  return (
    <div className="">
      <h4 className="font-bold mb-3">MY SKILLS:</h4>
      <ul className="ml-8">
        {skills.map((skill, index) => {
          return (
            <li className="list-disc" key={index}>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
