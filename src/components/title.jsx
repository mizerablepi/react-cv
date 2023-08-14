import { useState } from "react";
import "../styles/title.css";

export default function Title() {
  const [title, setTitle] = useState("CREATIVE DIRECTOR");

  return (
    <div className="cv-title">
      <input
        className="input "
        value={title}
        onInput={(e) => setTitle(e.target.value.toUpperCase())}
      />
    </div>
  );
}
