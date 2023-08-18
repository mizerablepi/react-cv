import { useState } from "react";

export default function Section({ title, children }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div
        className="bg-gray-300 rounded-md"
        onClick={() => {
          setActive(false);
        }}
      >
        <h4 className="p-2 font-bold">{title}</h4>
        {children}
      </div>
    );
  } else {
    return (
      <div
        className="bg-gray-300 rounded-md"
        onClick={() => {
          setActive(true);
        }}
      >
        <h4 className="p-2 font-bold">{title}</h4>
      </div>
    );
  }
}
