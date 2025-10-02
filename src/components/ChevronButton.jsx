// ChevronButton is a reusable button component.
// - Displays an arrow (➤) inside a circle
// - By default it faces right (gray)
// - When active, it rotates left and inverts colors

function ChevronButton({ isActive, onClick }) {
  return (
    <button
      className={`chevron ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
     ⮜
    </button>
  );
}

export default ChevronButton;
