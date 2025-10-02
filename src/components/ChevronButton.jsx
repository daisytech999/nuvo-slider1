// ChevronButton is a reusable button component.
// - Displays an arrow (➤) inside a circle
// - By default it faces right (gray)
// - When active, it rotates left and inverts colors

function ChevronButton({ isActive, onClick }) {
  return (
    <button
      className={`chevron ${isActive ? "active" : ""}`}
      onClick={onClick}
      aria-label="Select product"
    >
      {/* SVG Arrow */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </button>
  );
}

export default ChevronButton;
