export default function Name({ firstName, lastName }) {
  return (
    <div className="flex justify-center gap-2 text-2xl border-b-2 border-gray-100 border-solid p-3">
      <span>{firstName}</span>
      <span className="text-gray-400">{lastName}</span>
    </div>
  );
}
