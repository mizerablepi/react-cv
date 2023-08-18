export default function NameForm(props) {
  return (
    <form
      className="flex flex-col bg-white px-4 pb-4"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <label className="font-bold mt-3" htmlFor="firstName">
        First Name:
      </label>
      <input
        type="text"
        className="border-2 border-gray-200"
        name="firstName"
        id="firstName"
        value={props.firstName}
        onInput={(e) => {
          props.onFirstNameChange(e.target.value.toUpperCase());
        }}
        autoFocus
      />
      <label className="font-bold mt-3" htmlFor="lastName">
        Last Name:
      </label>
      <input
        type="text"
        className="border-2 border-gray-200"
        name="lastName"
        id="lastName"
        value={props.lastName}
        onInput={(e) => {
          props.onLastNameChange(e.target.value.toUpperCase());
        }}
      />
      <label className="font-bold mt-3" htmlFor="jobTitle">
        Job Title:
      </label>
      <input
        type="text"
        className="border-2 border-gray-200"
        name="jobTitle"
        id="jobTitle"
        value={props.jobTitle}
        onInput={(e) => {
          props.onJobTitleChange(e.target.value.toUpperCase());
        }}
      />
      <label className="font-bold mt-3" htmlFor="phoneNumber">
        Phone Number:
      </label>
      <input
        type="text"
        className="border-2 border-gray-200"
        name="phoneNumber"
        id="phoneNumber"
        value={props.number}
        onInput={(e) => {
          props.onNumberChange(e.target.value);
        }}
      />
      <label className="font-bold mt-3" htmlFor="email">
        Email:
      </label>
      <input
        type="email"
        className="border-2 border-gray-200"
        name="email"
        id="email"
        value={props.email}
        onInput={(e) => {
          props.onEmailChange(e.target.value);
        }}
      />
      <label className="font-bold mt-3" htmlFor="linkedin">
        LinkedIn:
      </label>
      <input
        type="text"
        className="border-2 border-gray-200"
        name="linkedin"
        id="linkedin"
        value={props.linkedin}
        onInput={(e) => {
          props.onLinkedinChange(e.target.value);
        }}
      />
      <label className="font-bold mt-3" htmlFor="address">
        Address:
      </label>
      <input
        type="text"
        className="border-2 border-gray-200"
        name="address"
        id="address"
        value={props.address}
        onInput={(e) => {
          props.onAddressChange(e.target.value);
        }}
      />
      <label className="font-bold mt-3" htmlFor="about">
        About yourself:
      </label>
      <textarea
        id="about"
        className="border-2 border-gray-200"
        rows={6}
        value={props.about}
        onInput={(e) => {
          props.onAboutChange(e.target.value);
        }}
      />
    </form>
  );
}
