export default function Checkbox({ value = false, onChange = () => false }) {
  return (
    <div
      className={`relative border-[3px] text-blue-500 ${
        value ? "border-blue-500" : "border-gray-300"
      } bg-white w-8 h-8`}
      onClick={() => onChange(!value)}>
      {value ? (
        <svg
          class="w-12 h-12 absolute -top-[16px] -left-[4px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"></path>
        </svg>
      ) : (
        ""
      )}
    </div>
  );
}
