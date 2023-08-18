export default function Title({ jobTitle = "SOFTWARE ENGINEER" }) {
  return (
    <div className="p-2 text-sm text-center border-b-2 border-gray-200 border-solid">
      {jobTitle}
    </div>
  );
}
