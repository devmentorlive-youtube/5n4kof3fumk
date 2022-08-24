export default function TextField({
  value,
  onChange = () => {},
  onBlur = () => {},
}) {
  return (
    <input
      type="text"
      value={value}
      className="p-2 bg-transparent border-b-[3px] border-gray-300 outline-none text-white"
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    />
  );
}
