export default function Contact({ number, email, linkedin, address }) {
  return (
    <div className="contact">
      <h4 className="font-bold mb-3">CONTACT:</h4>
      <div className="ml-2">{number}</div>
      <div className="ml-2">{email}</div>
      <div className="ml-2">{linkedin}</div>
      <div className="ml-2">{address}</div>
    </div>
  );
}
