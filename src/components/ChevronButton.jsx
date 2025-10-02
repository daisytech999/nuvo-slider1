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
