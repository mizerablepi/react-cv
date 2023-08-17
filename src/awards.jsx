export default function Awards({ awards }) {
  return (
    <div className="mt-4">
      <h4 className="font-bold mb-3">AWARDS: </h4>
      {awards.map((award, index) => {
        return (
          <div className="ml-4" key={index}>
            {award}
          </div>
        );
      })}
    </div>
  );
}
