import { useState } from "react";
import "../styles/header.css";

export default function Header() {
  const [firstName, setFirstName] = useState("JOHN");
  const [lastName, setLastName] = useState("DOE");

  function handleFirstNameChange(event) {
    setFirstName(event.target.value.toUpperCase());
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value.toUpperCase());
  }

  return (
    <div className="cv-header">
      <input
        type="text"
        className="input first-name"
        value={firstName}
        onInput={handleFirstNameChange}
      />
      <input
        type="text"
        className="input last-name"
        value={lastName}
        onInput={handleLastNameChange}
      />
    </div>
  );
}
